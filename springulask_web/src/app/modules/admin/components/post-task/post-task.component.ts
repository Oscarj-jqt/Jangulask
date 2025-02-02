import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-post-task',
  imports: [
  ],
  templateUrl: './post-task.component.html',
  styleUrl: './post-task.component.css'
})
export class PostTaskComponent {

taskForm!: FormGroup;
listOfEmployees: any[];
listOfPriorities: any = ["LOW", "MEDIUM", "HIGH"];

  constructor(private adminService: AdminService,
    private fb: FormBuilder
  ) {
    this.getUsers();
    this.taskForm = this.fb.group({
      employeeId: [null, [Validators.required]],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      dueDate: [null, [Validators.required]],
      priority: [null, [Validators.required]],
    })
  }

  getUsers() {
    this.adminService.getUsers().subscribe((res) => {
      this.listOfEmployees = res;
      console.log(res);
    })
  }

  postTask() {
    console.log(this.taskForm.value);
  }
}
