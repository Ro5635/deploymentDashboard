import {Component} from '@angular/core';
import { DeployToTestComponent } from './deploy-to-env/deploy-to-env.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {
  }

  pageLinks = [
    {name: 'Docs', url: 'http://www.google.com'},
    {name: 'Test Env', url: 'http://www.google.com'},
    {name: 'Dev Env', url: 'http://www.google.com'},
    {name: 'Jenkins', url: 'http://www.google.com'}
  ];

  environments = [
    {name: 'Test Environment', description: 'Project X test environment', triggerURL: 'https://www.google.com'},
    {name: 'Dev Environment', description: 'Project X development environment', triggerURL: 'https://www.google.com'}
  ];

  openDialog(environment): void {
    const dialogRef = this.dialog.open(DeployToTestComponent,{
      width: '350px',
      data: {
        environment: environment
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
