import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';
import { StorageService } from './auth/services/storage/storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DemoAngularMaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  isEmployeeLoggedIn: boolean = StorageService.isEmployeeLoggedIn();
  isAdminLoggedIn: boolean = StorageService.isAdminLoggedIn();

  constructor(private routes:Routes){}

  ngOnInit(){
    this.routes.events.subscribe(event=>{
      this.isEmployeeLoggedIn = StorageService.isEmployeeLoggedIn();
      this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
    })
  }

  logout() {
    StorageService.logout();
    this.routes.navigateByUrl("/login");
  }
}
