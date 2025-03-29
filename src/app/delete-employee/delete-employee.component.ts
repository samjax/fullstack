import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-delete-employee',
  standalone: false,
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.css'
})
export class DeleteEmployeeComponent implements OnInit{
  title = 'Delete Employee';
  employee: Employee = new Employee();
  id!: number;

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
    this.employeeservice.deleteEmployee(this.id).subscribe(data => { 
      console.log(data);
     this.getEmployeeList();
     } , error => {
      console.log(error);
    }   
    );          
  }

  private getEmployeeList(){
    this.router.navigate(['/employees'])
  }
}
