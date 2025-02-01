import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
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

  constructor(private router:Router){}

  ngOnInit(){
    this.router.events.subscribe(event=>{
      this.isEmployeeLoggedIn = StorageService.isEmployeeLoggedIn();
      this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
    })
  }

  logout() {
    StorageService.logout();
    this.router.navigateByUrl("/login");
  }
}
