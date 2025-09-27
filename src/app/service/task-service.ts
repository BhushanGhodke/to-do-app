import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  constructor(private http:HttpClient){

  }

  baseUrl:string='http://localhost:1111/task'
  
  public  getTasksByUserId(userId:number){
      return this.http.get(`${this.baseUrl}/getTask/${userId}`);
  } 

  public createTask(Task:any){
    return this.http.post(`${this.baseUrl}/createTask`,Task);
  }

  public updateTask(TaskInfo:any){
    return this.http.patch(`${this.baseUrl}/updateTaskStatus`,TaskInfo);
  }

  public deleteTasksByTaskId(taskId:number){
      return this.http.delete(`${this.baseUrl}/deleteTask/${taskId}`);
  } 


}
