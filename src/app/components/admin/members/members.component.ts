import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Member } from 'src/app/models/Member';
import { AddMemberDialogComponent } from '../add-member-dialog/add-member-dialog.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  private member: Member = new Member();
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openNewMemberDialog() {
    const dialogRef = this.dialog.open(AddMemberDialogComponent, {
      width: '250px',
      data: this.member
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.member = result;
    });
  }

}
