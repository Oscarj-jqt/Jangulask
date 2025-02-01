import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';

export const router: Router = [
    { path: "login", component: LoginComponent},
    { path: "signup", component: SignupComponent},
    { path: "admin", loadChildren: () => import("./modules/admin/admin.module").then(e => e.AdminModule)},
    { path: "employee", loadChildren: () => import("./modules/employee/employee.module").then(e => e.EmployeeModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})
export class AppRoutingModule { }