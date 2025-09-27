import { Component } from '@angular/core';
import { TaskService } from '../../service/task-service';
import { LoginService } from '../../login-service';
import { User } from '../../Registration';
import { TaskCreate, TaskInfo } from '../../Tasks';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-task',
  imports: [FormsModule,RouterLink],
  templateUrl: './create-task.html',
  styleUrl: './create-task.css'
})
export class CreateTask {
  task:TaskCreate= new TaskCreate();
  taskInfo:TaskInfo[]=[];
       user:User=new User();
  ngOnInit(): void {
   this.user= this.loginService.getuser();
   this.task.userId=this.user.userId;
  }

  constructor(private task_Service:TaskService, private loginService:LoginService,
    private router:Router
  ){

  }
  
   public createTask(){
      
    this.task_Service.createTask(this.task).subscribe(

      (response:any)=>{
         console.log(response);
         if(response!=null){
            
          setTimeout(() => {
              return this.router.navigate(['dashboard']).then(() => window.location.reload());
          }, 2000);
          
            
         }
         
      },
      (error)=>{
        console.log(error);
        
      }
    )
        
   }

   updateTaskStatus(){

   }
}
