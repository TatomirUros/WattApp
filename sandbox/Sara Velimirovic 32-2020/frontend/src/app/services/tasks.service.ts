import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environment/environment';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private url = "Task";

  constructor(private http: HttpClient) { }

  public getAllTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/${this.url}`)
  }
  
  public createTask(task : Task) : Observable<Task[]> {
    return this.http.post<Task[]>(`${environment.apiUrl}/${this.url}`, task)
  } 

  public deleteTask(task : Task) : Observable<Task[]> {
    return this.http.delete<Task[]>(`${environment.apiUrl}/${this.url}/${task.id}`)
  }
}
