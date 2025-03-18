import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavComponent } from '../../common/nav/nav.component';

@Component({
  selector: 'app-manage-employee',

  imports: [FormsModule,CommonModule,HttpClientModule,NavComponent],
  templateUrl: './manage-employee.component.html',
  styleUrl: './manage-employee.component.css'
})
export class ManageEmployeeComponent {
  public employee={
    fristName:undefined,
    lastName:undefined,
    email:undefined,
    departmentId:undefined,
    roleId:undefined
  
    }

      
  constructor(private http:HttpClient){}
  AddEmployee(){
    this.http.post("http://localhost:8080/emp-controller/add-employee" ,this.employee).subscribe(
      
      (data)=>{
        Swal.fire({
          title: "success!",
          icon: "success",
          draggable: true
        });
       
      }
       
    )
  }
  
}
