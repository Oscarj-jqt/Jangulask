import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  listOfTasks: any = [];

  constructor(private service: AdminService) {
    this.getTasks();
  }

  getTasks() {
    this.service.getAllTasks().subscribe((res) => {
      this.listOfTasks = res;
    })
  }
}
