import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/models/request.model';
import { RequestService } from 'src/app/services/request.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-shared',
  templateUrl: './request-shared.component.html',
  styleUrls: ['./request-shared.component.css', './../../../shared/shared.css']
})
export class RequestSharedComponent implements OnInit {
  public Editor = ClassicEditor;

  userId: number = 0;
  requestForm: FormGroup;
  requestModel = new Request();

  constructor(
    private requestService: RequestService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('loginToken') || '{}').id;

    this.requestForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      priority: new FormControl(null, [Validators.required]),
    });
  }

  submit(): void {
    this.requestModel.title = this.requestForm.controls['title'].value;
    this.requestModel.content = this.requestForm.controls['content'].value;
    this.requestModel.category = this.requestForm.controls['category'].value;
    this.requestModel.priority = this.requestForm.controls['priority'].value;
    this.requestModel.senderUserId = this.userId;

    this.requestService.postRequest(this.requestModel).subscribe(
      (res: number) => {
        if (res > 0) {
          this.toastrService.success('Talep başarılı bir şekilde İletildi.');
          this.router.navigate(['/request-main']);
        } else {
          this.toastrService.error('Beklenmedik bir hata ile karşılaşıldı');
        }
      }, (err) => {
        this.toastrService.error('Beklenmedik bir hata ile karşılaşıldı');
        throw err;
      }
    );
  }

}
