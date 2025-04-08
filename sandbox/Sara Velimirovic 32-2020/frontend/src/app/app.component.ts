import { Component } from '@angular/core';
import { Task } from './models/task';
import { TasksService } from './services/tasks.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  tasks: Task[] = []
  task: Task = {
    toDo: "",
    isSelected: false
  }

  constructor(private tasksService: TasksService){

  }

  ngOnInit() {
    this.getAllTasks();
  }

  cekiraj(vr : Task) : void {
    vr.isSelected = !vr.isSelected;
  }

  getAllTasks(){
    this.tasksService.getAllTasks().subscribe(response=>{ this.tasks=response; this.task = {
      toDo: "",
      isSelected: false
    }});
  }

  create() {
    this.tasksService.createTask(this.task).subscribe( response => { this.getAllTasks(); console.log(response)})
  }

  obrisi(task: Task) {
    this.tasksService.deleteTask(task).subscribe( response => { this.getAllTasks(); console.log(response)})
  }

}
