import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserAuth } from '../../../interfaces/user-auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('re@re.re', [Validators.required, Validators.email]);
  password = new FormControl('rerere', [
    Validators.required,
    Validators.minLength(6),
  ]);

  constructor(
    private authService: AuthService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      console.log(params);
      if (params.registred) {
        alert('auth login now');
      } else if (params.accesDenied) {
        alert('auth login retry');
      } else if (params.sessionFailed) {
        alert('auth sessionFailed');
      } else if (params.user) {
        alert('auth user is consist');
      }
    });
  }

  public getErrorMessageEmail(): string {
    return this.email.hasError('required')
      ? 'empty'
      : this.email.hasError('email')
      ? 'valid'
      : '';
  }

  public getErrorMessagePassword(): string {
    return this.password.hasError('required')
      ? 'empty'
      : this.password.value.length
      ? 'min'
      : '';
  }

  public onSubmit(): void {
    const userAuth: UserAuth = {
      email: this.email.value,
      password: this.password.value,
    };

    this.authService.login(userAuth).subscribe(
      (res) => console.log(res),
      (error) => {
        console.log(error.error[0]);
        if (error.error[0].field === 'email') {
          this.router
            .navigate(['/auth/register'], {
              queryParams: {
                auth: false,
                user: false,
                email: this.email.value,
              },
            })
            .then();
        }
        if (error.error[0].field === 'password') {
          alert(`error ${error.error[0].message}`);
        }
      }
    );
  }
}
