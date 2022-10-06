import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RequestListDTO } from 'src/app/models/complexTypes/request-list-dto.model';
import { RequestService } from 'src/app/services/request.service';
import { RequestDetaillistComponent } from '../request-detaillist/request-detaillist.component';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css', './../../../shared/shared.css']
})
export class RequestListComponent implements OnInit {

  requestId = 0;
  requestList: RequestListDTO[] = [];

  loading: boolean = false;

  constructor(
    private requestService: RequestService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.requestService.getRequestListWithUser().subscribe(
      (res: RequestListDTO[]) => {
        this.requestList = res.slice();
        this.loading = false;
        console.log(res);

      },
      (err) => { throw err; }
    );
  }

  detailList(id: number): void {
    this.dialog.open(RequestDetaillistComponent, {
      maxWidth: '90vw',
      disableClose: false, // TRUE YAP
      width: '90vw',
      data: {
        requestId: id
      },
    });
  }

}
