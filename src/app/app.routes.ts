import { Routes } from '@angular/router';
import { Login } from './component/login/login';
import { Signup } from './component/signup/signup';
import { Dashboard } from './component/dashboard/dashboard';
import { Navbar } from './component/navbar/navbar';
import { CreateTask } from './component/create-task/create-task';

export const routes: Routes = [

    {path:'', component:Navbar,

        children:[
            {path:'register',component:Signup},
            {path:'login',component:Login}
        ]
    },
   
    {path:'dashboard',component:Dashboard,

        children:[
            {path:'create-task',component:CreateTask}
        ]
    }
];
