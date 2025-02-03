import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-task',
  imports: [],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent {

  id: number = this.route.snapshot.params["id"];
  taskForm!: FormGroup;
  listOfEmployees: any = [];
  listOfPriorities: any = ["LOW", "MEDIUM", "HIGH"];

  constructor(private service: AdminService,
    private route: ActivatedRoute
  ) {
    this.getTaskById();
  }

  getTaskById() {
    this.service.getTaskById(this.id).subscribe((res) => {
      console.log(res);
    })
  }

}
