import { Routes } from '@angular/router';
import { ManageEmployeeComponent } from './page/manage-employee/manage-employee.component';
import { ViewAllEmployeeComponent } from './page/view-all-employee/view-all-employee.component';
import { AddDepartmentComponent } from './page/add-department/add-department.component';


export const routes: Routes = [
   {
    path:"add-employee",
    component:ManageEmployeeComponent
   },
   {
    path:"view-all",
    component:ViewAllEmployeeComponent,
    
   },
   {
    path:"add-department",
    component:AddDepartmentComponent,
    
   }




  
];
