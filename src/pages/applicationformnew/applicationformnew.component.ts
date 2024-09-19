import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl, FormBuilder, Validators } from '@angular/forms';
import { format, parseISO } from 'date-fns';
import { MainService } from '../../service/ApiMain Service/main.service';
import { __values } from 'tslib';
import { Studentclass } from '../../model/Interface/applicationform.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-applicationformnew',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule,RouterLink],
  templateUrl: './applicationformnew.component.html',
  styleUrl: './applicationformnew.component.css',
})
export class ApplicationformnewComponent implements OnInit {
  
  mainservice = inject(MainService);

  casteOptions = [
    { value: 'Gen', label: 'General' },
    { value: 'OBC', label: 'OBC' },
    { value: 'SC', label: 'SC' },
    { value: 'ST', label: 'ST' }
  ];

  //BIND DROPDOWN FOR STUDY CENTER NAME PASSING VALUE IS USERID
  studycenterZilaDDL: { value: any; label: any; }[] = [];

  //BIND DROPDOWN FOR STUDY CENTER NAME PASSING VALUE IS USERID
  studycenterDDL: { value: any; label: any; }[] = [];

  //BIND DROPDOWN FOR Stream for 12th class ( HSS )
  StreamDDL: { value: any; label: any; }[] = [];

  studentform: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.studentform = this.fb.group({
    });
    this.studentform = new FormGroup({
      studentEname: new FormControl(''),
      studentHname: new FormControl(''),
      fatherEname: new FormControl(''),
      fatherHEname: new FormControl(''),
      motherEname: new FormControl(''),
      motherHname: new FormControl(''),
      caste: new FormControl(''),
      gender: new FormControl(''),
      dob: new FormControl(''),
      dobwords: new FormControl(''),
      mobile: new FormControl(''),
      adhivash: new FormControl(''),
      presentAddress: new FormControl(''),
      presentpincode: new FormControl(''),
      permanentAddress: new FormControl(''),
      permanentpincode: new FormControl(''),
      standard: new FormControl(''),
      stream: new FormControl(''),
      studycenterzila: new FormControl(''),
      studycenter: new FormControl('')
    });

    this.fetchStudyCenterZilaDDL();
    this.fetchStudyCenterDDL();
    this.fetchStream();
    this.onchangestandard();

  }
  onSubmit(): void {
    debugger;
    if (this.studentform.valid) {
      const studentData: Studentclass = this.studentform.value;
      debugger;
      this.mainservice.insertStudent(studentData).subscribe((response) => {
        alert('Student inserted successfully!')
        console.log('Student inserted successfully!', response);
        this.studentform.reset();
 
      })
    }

    else {
      console.log('Form is invalid. Please check the fields.');
      // You can also show validation error messages to the user
    }
  }



  onchangestandard(): void {
    this.studentform.get('standard')?.valueChanges.subscribe((value) => {
      if (value === 'HS') {
        this.StreamDDL = []; // Clear the array
        this.studentform.get('stream')?.setValue(' '); // Reset stream value
      } else if (value === 'HSS') {
        this.fetchStream(); // Call the API to populate StreamDDL
      }
    });
  }
  


  //Study center DDL Bind
  fetchStudyCenterDDL(): void {
    // call API from main service'
    this.mainservice.getStudyCenter().subscribe(
      (res: any[]) => {
        this.studycenterDDL = res.map(item => ({
          value: item.UserID,
          label: item.StudyCenterName
        }));
      },
      error => {
        console.error('Error fetching study center Zila:', error);
      }
    );
  }





  //StudyCenterZila DDl BIND
  fetchStudyCenterZilaDDL(): void {
    // call API from main service'
    this.mainservice.getStudyCenterZila().subscribe(
      (res: any[]) => {
        this.studycenterZilaDDL = res.map(item => ({
          value: item.DistrictID,
          label: item.DistrictName
        }));
      },
      error => {
        console.error('Error fetching study center Zila:', error);
      }
    );
  }




  //stream DDl BIND
  fetchStream(): void {
    // call API from main service'
    this.mainservice.getStream().subscribe(
      (res: any[]) => {
        this.StreamDDL = res.map(item => ({
          value: item.SubjectCode,
          label: item.SubjectName
        }));
      },
      error => {
        console.error('Error fetching Stream:', error);
      }
    );
  }





  


  selectedDate: string = '';










  getDateInWords(): string {
    if (!this.selectedDate) {
      return ''; // Handle case when no date is selected
    }
    const parsedDate = parseISO(this.selectedDate);
    return format(parsedDate, 'do MMMM yyyy'); // Example: "30th August 2024"
  }






  getCurrentYear(): number {
    return new Date().getFullYear();
  }
  getCurrentSession() {
    return new String('(1)')
  }
}

