import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { error } from 'console';


@Component({
  selector: 'app-update-employee',
  standalone: false,
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
  title = 'Update Employee';
  employee: Employee = new Employee();
  id!: number;

  // inject employeeservice and router in to update-employee component
  constructor(private employeeservice: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.employeeservice.getEmployeeByID(this.id).subscribe(data => { 
      this.employee = data;
    }, error => { 
      console.log(error);
    }
    );
  }  

  onSubmit(){
    this.employeeservice.updateEmployee(this.id, this.employee).subscribe(data => { 
      console.log(data);
      this.getEmployeeList();
     } , error => {
      console.log(error);
    }   
    );          
  }

    //to take me back to employee list page
    getEmployeeList(){
      this.router.navigate(['/employees']);
    } 

}
