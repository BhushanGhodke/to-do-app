import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  constructor(private http:HttpClient){

  }

  baseUrl:string=environment.apiUrl;
  
  public  getTasksByUserId(userId:number){
      return this.http.get(`${this.baseUrl}/task/getTask/${userId}`);
  } 

  public createTask(Task:any){
    return this.http.post(`${this.baseUrl}/task/createTask`,Task);
  }

  public updateTask(TaskInfo:any){
    return this.http.patch(`${this.baseUrl}/task/updateTaskStatus`,TaskInfo);
  }

  public deleteTasksByTaskId(taskId:number){
      return this.http.delete(`${this.baseUrl}/task/deleteTask/${taskId}`);
  } 


}
