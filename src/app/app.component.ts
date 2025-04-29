import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageEmployeeComponent } from './page/manage-employee/manage-employee.component';
import { ViewAllEmployeeComponent } from './page/view-all-employee/view-all-employee.component';
import { AddDepartmentComponent } from './page/add-department/add-department.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ManageEmployeeComponent,ViewAllEmployeeComponent,AddDepartmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'empApp';
}
