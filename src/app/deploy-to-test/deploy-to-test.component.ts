import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-deploy-to-test',
  templateUrl: './deploy-to-test.component.html',
  styleUrls: ['./deploy-to-test.component.css']
})
export class DeployToTestComponent implements OnInit {

  environment;
  snackBar;

  constructor(public dialogRef: MatDialogRef<DeployToTestComponent>,
              public snackBarTool: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) private data) {
    this.environment = data.environment;
    this.snackBar = snackBarTool;
  }

  /**
   * trigger deployment to the passed environment
   */
  confirmSelection() {

    if (this.environment.triggerURL) {

      // Hit the provided URL to trigger the deployment
      fetch(this.environment.triggerURL)
        .then(response => {
          console.log('Trigger URL hit successfully');
          this.snackBar.open('Deploy Triggered', 'Success!', {
            duration: 3000
          });

        }).catch(err => {
        this.snackBar.open('Error In Triggering Deploy', 'Error', {
          duration: 3000
        });
        console.log('Failed to hit trigger URL');
        console.log(err);
      });

    } else {
      console.log('Cannot trigger deploy, no deployURL provided.');
      console.log(this.environment);
    }

    this.dialogRef.close();

  }

  /**
   * Handles the user hit of the abort button
   */
  abortSelection() {
    this.snackBar.open('Deployment Not Triggered', 'Deploy Aborted', {
      duration: 3000
    });
    console.log('Aborting trigger of deploy');
    console.log('Not triggering deployment');
    this.dialogRef.close();

  }


  ngOnInit() {
  }

}
