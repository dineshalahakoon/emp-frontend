import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
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

 

      
  constructor(private http:HttpClient){}



  public empId="";
  public employee={
    id:this.empId,
    fristName:undefined,
    lastName:undefined,
    email:undefined,
    departmentlist:[
      {
        name:"",
        description:"",
        employee:{
          id:this.empId,
        }
      }
    ],
    role:{
      name:"",
      description:""
    }
    }


  AddEmployee(){


console.log(this.employee);
this.employee.id=this.empId;
this.employee.departmentlist[0].employee.id=this.empId;
const headers = new HttpHeaders({
  'Content-Type':'Application/json',
  'Authorization':'amFuZV9kb2U6c2VjdXJlNDU2a'
});


    this.http.post("http://localhost:8080/emp-controller/add-employee" ,this.employee,{headers}).subscribe(
      
      (data)=>{
        Swal.fire({
          title: "success!",
          icon: "success",
         
        });
        
       
      }
       
    )
  }
  
}
