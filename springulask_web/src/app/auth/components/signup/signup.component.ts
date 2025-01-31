import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupForm! : FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private routes: Routes
  ) {
    this.signupForm = this.fb.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required]],
      confirmPassword:[null,[Validators.required]]
    })
  }

  togglePasswordVisibility(){
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(){
    console.log(this.signupForm.value)
    const password = this.signupForm.get("password")?.value;
    const confirmPassword = this.signupForm.get("confirmpassword")?.value;
    if (password !== confirmPassword) {
      this.snackbar.open("Password do not match", "Close", { duration: 5000, panelClass: "error-snackbar" });
      return;
    }

    this.authService.signup(this.signupForm.value).subscribe((res) => {
      console.log(res);
      if (res.id != null) {
        this.snackbar.open("Signup successful", "Close", { duration: 5000 });
        this.routes.navigateByUrl("/login");
      } else {
        this.snackbar.open("Signup failed. Try again", "Close", { duration:5000,panelClass: "error-snackbar" })
      }
    })
  }
}
