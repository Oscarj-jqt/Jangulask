import { Component } from '@angular/core';

@Component({
  selector: 'app-post-task',
  imports: [],
  templateUrl: './post-task.component.html',
  styleUrl: './post-task.component.css'
})
export class PostTaskComponent {

  constructor(private adminService: AdminService) {
    this.getUsers();
  }

  getUsers() {
    this.adminService.getUsers().subscribe((res) => {
      console.log(res);
    })
  }
}
