import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUserDTO } from 'src/app/models/complexTypes/login-user-dto.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service.ts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginBacgroundImage: string = './../../assets/images/request_image.jpg';

  formLogin: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  submit(): void {
    const loginUser:LoginUserDTO = new LoginUserDTO();
    loginUser.username = this.formLogin.controls['userName'].value;
    loginUser.password = this.formLogin.controls['password'].value;

    this.userService.loginUser(loginUser).subscribe(
      (res: User) => {
        if (res !== null && res !== undefined) {
          const user: User = res;
          localStorage.setItem('loginToken', JSON.stringify(user));
          this.toastrService.success('Giriş başarılı');
          this.router.navigate(['/request-main']);
        }
        else {
          this.toastrService.error('Kullanıcı adı veya parola hatalı!');
        }
      },
      (err) => {
        this.toastrService.show('Beklenmedik bir hata ile karşılaşıldı.');
        throw err;
      }
    );
  }
}
