import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavComponent } from '../../common/nav/nav.component';

@Component({
  selector: 'app-view-all-employee',
  imports: [HttpClientModule,FormsModule,CommonModule,NavComponent],
  templateUrl: './view-all-employee.component.html',
  styleUrl: './view-all-employee.component.css'
})
export class ViewAllEmployeeComponent {

  

  public employeeList:any;


  public selectedEmployee={
    id:null,
    fristName:null,
    lastName:null,
    email:null,
    departmentId:null,
    roleId:null
  };

  constructor(private http:HttpClient){
    this.loadEmployeTable()
  }

  getDepartmentNames(departmentList:any[]):string{
    return departmentList.map(dept=>dept.name).join(', ');
    
  }

  loadEmployeTable(){

    const headers = new HttpHeaders({
      'Content-Type':'Application/json',
      'Authorization':'amFuZV9kb2U6c2VjdXJlNDU2a'
    });

    this.http.get("http://localhost:8080/emp-controller/get-all",{headers}).subscribe(res=>{
        this.employeeList=res;
        console.log(res)

      })
  

  }
  deleteEmployee(employee:any){
    const headers = new HttpHeaders({
      'Content-Type':'Application/json',
      'Authorization':'amFuZV9kb2U6c2VjdXJlNDU2a'
    });

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/emp-controller/delete-emp/${employee.id}`,{responseType:'text',headers}).subscribe(res=>{
          this.loadEmployeTable()
             Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
                console.log(res);
          
              })
              console.log(employee)
      }
    });
  }

  updateEmployee(employee:any){



    // this.selectedEmployee={
    //   id:employee.id,
    //   fristName:employee.fristName,
    //   lastName:employee.lastName,
    //   email:employee.email,
    //   department:employee.departmentId,
    //   role:employee.roleId
    // };

    

if(employee!=null){
  this.selectedEmployee=employee;
}
console.log(employee);

  }

  saveUpdateEmployee(){
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {


        this.http.put("http://localhost:8080/emp-controller/update-employee",this.selectedEmployee).subscribe(res=>{
          console.log(res);   
          this.loadEmployeTable()
        })



        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });




  }

}
