import { Component } from '@angular/core';
import { NavComponent } from "../../common/nav/nav.component";
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-department',
  imports: [NavComponent,HttpClientModule,FormsModule,CommonModule],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {


      
  constructor(private http:HttpClient){}

  // {"name":"Human ssdds",
  //   "description":"handel employee relations",
  //   "employe1":{
  //       "id":2
  //       }
  //   }



  public getemployee:any;
  public empName = undefined;
  public empEmail=undefined;
  public empRole=undefined;
  FindEmployee(){
    this.departmentList = [];
    const headers = new HttpHeaders({
      'Content-Type':'Application/json',
      'Authorization':'amFuZV9kb2U6c2VjdXJlNDU2a'
    });

   let empID=this.department.employe1.id

    this.http.get(`http://localhost:8080/emp-controller/find-by-id/${empID}`,{headers}).subscribe(res=>{
        this.getemployee=res;
        console.log(res)
        console.log
        this.empName=this.getemployee.fristName
        this.empEmail=this.getemployee.email
        this.empRole=this.getemployee.role.name

      })




  }

  public department={
    
    name:undefined,
    description:undefined,

 
    employe1:{
      id:""
    }
    }
     departmentList: any[] = [];

    AddDEpartment(){

      this.departmentList.push({ ...this.department });

console.log(this.departmentList);
console.log(this.department);
const headers = new HttpHeaders({
  'Content-Type':'Application/json',
  'Authorization':'amFuZV9kb2U6c2VjdXJlNDU2a'
});


    this.http.post("http://localhost:8080/department/add-department" ,this.department,{headers}).subscribe(
      
      (data)=>{
        Swal.fire({
          title: "success!",
          icon: "success",
         
        });
        
       
      }
       
    )
  }
}
