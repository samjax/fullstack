import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { error } from 'console';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  standalone: false,
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit{
  title = 'Add Employee'
  employee: Employee = new Employee();
  // Inject employee service in to create-employee component
  constructor(private employeeservice: EmployeeService, private router: Router) { }
  
  ngOnInit(): void {
    
  } 

  onSubmit(){
    this.employeeservice.createEmployee(this.employee).subscribe(data => {
      console.log("Employee added successfully: " + data);
      this.getEmployeeList();
    }, error =>  console.log(error)); 
     
  } 

  //to take me back to employee list page
  getEmployeeList(){
    this.router.navigate(['/employees']);
  } 

  //after addition of an employee we need to go the employee list page, for that we need add a router
  //To inject the router we again use the constructor

  // callMeSally(){
  //   console.log("Call me sally");
  // }
}
