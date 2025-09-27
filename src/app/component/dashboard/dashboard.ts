import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TaskService } from '../../service/task-service';
import { User } from '../../Registration';
import { LoginService } from '../../login-service';
import { TaskCreate, TaskInfo } from '../../Tasks';
import { DatePipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,RouterLink,NgFor,DatePipe,FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard  implements OnInit{

   user:User=new User();
 task:TaskCreate= new TaskCreate();
   taskInfo:TaskInfo[]=[];

   taskupdate:TaskInfo= new  TaskInfo();
    
  ngOnInit(): void {
   this.user= this.loginService.getuser();
    this.getTaskByUserId();
  }

  constructor(private task_Service:TaskService, private loginService:LoginService,
    private router:Router){

  }
      
 public getTaskByUserId(){
    this.task_Service.getTasksByUserId(this.user.userId).subscribe(


      (response:any)=>{
        console.log(response);
        this.taskInfo=response;
        window.location.reload;
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
 }
  updateStatus(status:string,taskId:number){
    this.taskupdate.taskId = taskId;    
    this.taskupdate.status=status;
    console.log('update status () called');
    
    this.task_Service.updateTask(this.taskupdate).subscribe(


      (response:any)=>{
         console.log(response);
         if(response!=null){
          window.location.reload();
         }
         
      },
      (error)=>{
        console.log(error);
        
      }
    )

  }
   
   deleteTask(taskId:number){
        this.task_Service.deleteTasksByTaskId(taskId).subscribe(


          (response:any)=>{
              
            if(response==true){
              window.location.reload();
            }
          },
          (error)=>{
            console.log(error);
            
          }
        )
   }

   updateTask(taskId:number){

   }

   Logout(){
    this.loginService.logout();
    this.router.navigate([''])
   }
}

