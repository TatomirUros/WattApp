import { Component, OnInit } from '@angular/core';
import { Task } from './models/task.model';
import { TasksService } from './service/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ToDo List';
  tasks: Task[]=[];
  task: Task={
    taskId:'',
    taskName:'',
    taskDescription:'',
    expiryDate:''
  }
  desc?:string;
  constructor(private tasksService: TasksService){

  }
  ngOnInit(): void {
    this.getAllTasks();
    
  }

  getAllTasks(){
    this.tasksService.getAllTasks().subscribe(
      response=>{
        this.tasks=response;
        //console.log(response);

      
      }
    );
  }

  onSubmit(){
    //if task is new
    if (this.task.taskId===''){
         this.tasksService.addTask(this.task).subscribe(
          response=>{
            this.getAllTasks();
            this.task={
              taskId:'',
              taskName:'',
              taskDescription:'',
              expiryDate:''

            };
          }
      );
    }else{ 
    //if we want to update a task
      this.tasksService.updateATask(this.task).subscribe(
        response=>{
          this.getAllTasks();
          this.task={
            taskId:'',
            taskName:'',
            taskDescription:'',
            expiryDate:''

          };
        }
      )
    }
   // console.log(this.task);
  }

  deleteTask(id:string){
    this.tasksService.deleteTask(id).subscribe(
      response=>{
        this.getAllTasks();
      }
    );

  }

  SeeDescriptionOfATask(id:string){
    this.tasksService.getATask(id).subscribe(
      response=>{
        //console.log(response.taskDescription)
        this.desc=response.taskDescription;
        
      }
    )
  }

  UpdateATask(id:string){
    this.tasksService.getATask(id).subscribe(
      response=>{
         this.task=response;
      }
    )

  }

 


}


