import { Component, OnInit } from '@angular/core';
import { PLCOutputsService } from '../../shared/services/plcoutputs.service';
import { PLCOutput } from '../../shared/models/plcoutput.model';
import { switchMap, first } from 'rxjs/operators';
import { Subscription, timer } from 'rxjs';
import { PLCInputsService } from '../../shared/services/plcinputs.service';
import { PLCInput } from '../../shared/models/plcinput.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // PLCOutputs: PLCOutput[];
  PLCOutputs: PLCOutput[];
  PLCOutput: PLCOutput;
  inputId: string;
  PLCStatusDescriptive: string;
  subscription: Subscription;
  statusText: string;
  statusContentClass: string;
  ConfigModeButtonText: string;


  constructor(private outputService: PLCOutputsService, private inputService: PLCInputsService) {  }

  ngOnInit() {

  if (!this.inputId) {
    this.inputService.getPLCInputs()
        .subscribe(response => {
          console.log(response);
         // const json = response.json();
          // let json = JSON.parse(response.json());
         // console.log('josn', json);
           this.inputId = response.json()[0].id;
           console.log('inputId', this.inputId);
        });
  }

    this.PLCOutput = new PLCOutput;
    this.PLCStatusDescriptive = '';
    this.ConfigModeButtonText = 'Enter Config Mode';
    this.subscription = timer(0, 1000).pipe(
      switchMap(() => this.outputService.getPLCOutputs())
    ).subscribe(response => {
      this.PLCOutputs = JSON.parse(response.json());
      this.PLCOutput = this.PLCOutputs[0];
      this.PLCStatusDescriptive = this.getStatusDescriptive(this.PLCOutput.iPLC_STATUS);
    });
  }

  onConfigModeClick() {
    const updatePLCInput: PLCInput = new PLCInput;
    updatePLCInput.id = this.inputId;
    if (this.PLCOutput.iPLC_STATUS === 100) {
      updatePLCInput.iPLC_STATUS = 10;
    } else {
      updatePLCInput.iPLC_STATUS = 100;
    }
    this.inputService.updatePLCInputs(updatePLCInput)
      .pipe(first())
      .subscribe(response => {
          console.log('response', response);
        },
        error => {
          console.log('error', error);
        });

    // this.userService.updateUser(this.editForm.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate(['list-user']);
    //     },
    //     error => {
    //       alert(error);
    //     });
  }

  getStatusDescriptive(iPLC_STATUS: number): string {
    switch (iPLC_STATUS) {
      case 10:
        this.statusContentClass = 'status-order-done';
        this.ConfigModeButtonText = 'Enter Config Mode';
        return 'Order done';
      case 20:
        this.statusContentClass = 'status-new-order';
        this.ConfigModeButtonText = 'Enter Config Mode';
        return 'New order';
      case 30:
        this.statusContentClass = 'status-processing-order';
        this.ConfigModeButtonText = 'Enter Config Mode';
        return 'Processing order';
      case 100:
        this.statusContentClass = 'status-config-mode';
        this.ConfigModeButtonText = 'Exit Config Mode';
        return 'Config mode';
      case 900:
        this.statusContentClass = 'status-alarm-mode';
        this.ConfigModeButtonText = 'Enter Config Mode';
        return 'Alarm mode';

      default:
        this.statusContentClass = 'status-unknown';
        this.ConfigModeButtonText = 'Enter Config Mode';
      return 'Unknown';
    }
  }

}
