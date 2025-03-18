import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './page/add-employee/add-employee.component';
import { ManageEmployeeComponent } from './page/manage-employee/manage-employee.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ManageEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'empApp';
}
