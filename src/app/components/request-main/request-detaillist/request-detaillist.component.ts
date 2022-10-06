import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestListDTO } from 'src/app/models/complexTypes/request-list-dto.model';
import { RequestUser } from 'src/app/models/request-user.model';
import { Request } from 'src/app/models/request.model';
import { User } from 'src/app/models/user.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request-detaillist',
  templateUrl: './request-detaillist.component.html',
  styleUrls: ['./request-detaillist.component.css']
})
export class RequestDetaillistComponent implements OnInit {
  requestId = 0;
  userId = 0;

  request = new RequestListDTO();
  user: User = new User();
  requestUser = new RequestUser();

  constructor(
    public dialogRef: MatDialogRef<RequestDetaillistComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private requestService: RequestService
  ) {
    this.requestId = this.data.requestId;
  }

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('loginToken') || '{}').id;
    this.getRequestById();
  }

  getRequestById(): void {
    this.requestService.getRequestById(this.requestId).subscribe(
      (res) => {
        this.request = res;
        console.log(res);
        
      }, (err) => {
        throw err;
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
