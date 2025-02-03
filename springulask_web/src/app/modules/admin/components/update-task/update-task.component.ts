import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from 'express';

@Component({
  selector: 'app-update-task',
  imports: [],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent {

  id: number = this.route.snapshot.params["id"];
  updateTaskForm!: FormGroup;
  listOfEmployees: any = [];
  listOfPriorities: any = ["LOW", "MEDIUM", "HIGH"];
  listOfTaskStatus: any = ["PENDING", "INPROGRESS", "COMPLETED", "DEFERRED", "CANCELLED"];

  constructor(private service: AdminService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private adminService:AdminService,
    private snackbar:MatSnackBar,
    private router: Router
  ) {
    this.getTaskById();
    this.getUsers();
    this.updateTaskForm = this.fb.group({
      employeeId: [null, [Validators.required]],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      dueDate: [null, [Validators.required]],
      priority: [null, [Validators.required]],
      taskStatus: [null, [Validators.required]]
    })
  }

  getTaskById() {
    this.service.getTaskById(this.id).subscribe((res) => {
      this.updateTaskForm.patchValue(res);
      console.log(res);
    })
  }

  getUsers(){
    this.adminService.getUsers().subscribe((res) => {
      this.listOfEmployees = res;
      console.log(res);
    })
  }

  updateTask() {
    this.adminService.updateTask(this.id, this.updateTask.value).subscribe((res)=>{
      if(res.id != null){
        this.snackBar.open("Task updated successfully","Close", { duration: 5000 });
        this.router.navigateByUrl("/admin/dashboard");
      } else {
        this.snackBar.open("Something went wrong", "ERROR", { duration: 5000});
      }
    })
  }

}
