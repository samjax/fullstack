import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  standalone: false,
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee = new Employee();
  id!: number;
  title = 'Employee Details';
  constructor(private employeeservice: EmployeeService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.employeeservice.getEmployeeByID(this.id).subscribe(data => {
      this.employee = data;
    });
  } 

}
