import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm! : FormGroup;
  hidePassword = true;
  routes: any;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private snackbar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required]]
    })
  }

  togglePasswordVisibility(){
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((res) => {
      console.log(res);
      if (res.userId != null) {
        this.snackbar.open("Login successful", "Close", { duration: 5000 });
      } else {
        this.snackbar.open("Invalid credentials", "Close", { duration:5000, panelClass: "error-snackbar" })
      }
    })
  }
}
