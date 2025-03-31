import { Component, OnInit } from '@angular/core';
import { Employee}  from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { error } from 'console';



@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employees!: Employee[];
  title = 'Employee List';
  
  constructor(private employeeservice: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();  
  } 

  private getEmployees(){
    this.employeeservice.getEmployeesList().subscribe(data => {
      this.employees = data;
    }); 
} 
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    //this.router.navigate(['delete-employee', id]);
    this.employeeservice.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }

  getEmployeeDetails(id: number){
    this.router.navigate(['employee-details',id]);
  }

}

 