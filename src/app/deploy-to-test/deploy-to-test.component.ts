import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-deploy-to-test',
  templateUrl: './deploy-to-test.component.html',
  styleUrls: ['./deploy-to-test.component.css']
})
export class DeployToTestComponent implements OnInit {

  choosenEmoji: string;
  emojis = ['🐼', '💪', '🐷', '👽', '🐥'];

  constructor(public dialogRef: MatDialogRef<DeployToTestComponent>) {
  }

  confirmSelection() {
    this.dialogRef.close(this.choosenEmoji);
  }

  ngOnInit() {
  }

}
