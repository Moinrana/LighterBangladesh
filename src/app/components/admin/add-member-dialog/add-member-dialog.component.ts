import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Member } from 'src/app/models/Member';

@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.css']
})
export class AddMemberDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Member
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {

  }

}
