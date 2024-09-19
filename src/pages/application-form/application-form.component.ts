import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import isOnline from 'is-online';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { FormControl, FormsModule,ReactiveFormsModule, Validators} from '@angular/forms';
import { FormGroup,FormBuilder,FormArray} from '@angular/forms';


@Component({
  selector: 'app-application-form',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink, MatSlideToggleModule,FormsModule,ReactiveFormsModule],
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  
title = 'tempforms';
form!: FormGroup;
availableSubjects: string[] = ['English', 'Hindi', 'Math','sanskrit','s science'];
appiaringsubject : string[] = ['urdu', 'bengali', 'marathi','sanskrit','science'];


constructor(private fb: FormBuilder) {}

ngOnInit(): void {
this.form = this.fb.group({
subjects: this.fb.array([this.createSubject()])
});
}

get subjects(): FormArray {
return this.form.get('subjects') as FormArray;
}

createSubject(): FormGroup {
return this.fb.group({
subject: [''],
marks: [0, Validators.required],
practicalMarks: [0, Validators.required]
});
}

addSubject(): void {
this.subjects.push(this.createSubject());
}

getTotalMarks(index: number): number {
const subjectGroup = this.subjects.at(index) as FormGroup;
const marks = subjectGroup.get('marks')?.value || 0;
const practicalMarks = subjectGroup.get('practicalMarks')?.value || 0;
return marks + practicalMarks;
}

onSubjectChange(index: number): void {
// Handle changes if needed
}

  networkStatus: boolean = false;




  /// for number only 
  validateNumericInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;

    // Remove non-numeric characters
    const numericValue = inputValue.replace(/[^0-9]/g, '');

    // Update the input value
    inputElement.value = numericValue;
  }



  /// for character only 
  validateAlphabeticInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let inputValue = inputElement.value;

    // Remove non-alphabetic characters
    inputValue = inputValue.replace(/[^A-Za-z]/g, '');

    // Update the input value
    inputElement.value = inputValue;
  }



  validateHindiInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let inputValue = inputElement.value;

    // Remove non-Hindi characters (Devanagari script) and spaces
    inputValue = inputValue.replace(/[^ऀ-ॿ\s]/g, '');

    // Update the input value
    inputElement.value = inputValue;
  }




  //if check box true then the value copy to permanent address
  copyAddress(): void {
    const presentAddress = document.getElementById('inputstate') as HTMLInputElement;
    const permanentAddress = document.getElementById('permanentInputstate') as HTMLInputElement;
    const presentPincode = document.getElementById('inputZipcode') as HTMLInputElement;
    const permanentPincode = document.getElementById('permanentInputZipcode') as HTMLInputElement;
    const presentstate = document.getElementById('District') as HTMLSelectElement;
    const permanentstate = document.getElementById('permanentDistrict') as HTMLSelectElement;
    const checkbox = document.getElementById('flexCheckDefault') as HTMLInputElement | null;

    if (presentAddress && permanentAddress && presentPincode && permanentPincode &&presentstate &&permanentstate) {
      if (checkbox != null) {
        if (checkbox.checked) {
          permanentAddress.value = presentAddress.value;
          permanentPincode.value = presentPincode.value;
          permanentstate.value = presentstate.value;
        } else {
          permanentAddress.value = '';
          permanentPincode.value = '';
          permanentstate.value = '';
        }
      }
    }
  }

  marks1: number = 0;
  practicalMarks1: number = 0;
  totalMarks1: number = 0;

  marks2: number = 0;
  practicalMarks2: number = 0;
  totalMarks2: number = 0;

  calculateTotalMarks(marks: number, practicalMarks: number): number {
    return  marks + practicalMarks;
  }
// }
  


//   // calculate marks addition of marks and practical marks
//   calculateTotalMarks(): void {
//     const marksInput = document.getElementById('inputMarks') as HTMLInputElement;
//     const practicalMarksInput = document.getElementById('inputPMarks') as HTMLInputElement;
//     const totalMarksInput = document.getElementById('inputTmarks') as HTMLInputElement;

//     if (marksInput && practicalMarksInput && totalMarksInput) {
//       const marks = parseFloat(marksInput.value) || 0;
//       const practicalMarks = parseFloat(practicalMarksInput.value) || 0;
//       const total = marks + practicalMarks;

//       totalMarksInput.value = total.toString();
//     }
//   }

  




//for togel pop up table new or old
  new: boolean = false;
  old: boolean = false;
  showCardGroup: boolean = true; // New property to track card group visibility

  togglePopup(popupType: string): void {
    // Reset all popups
    this.new = false;
    this.old = false;

    // Open the selected popup and hide card group
    if (popupType === 'new') {
      this.new = true;
    } else if (popupType === 'old') {
      this.old = true;
    }

    this.showCardGroup = false; // Hide card group
  }
  // constructor() {
  //   isOnline().then(online => {
  //     this.networkStatus = online;
  //   });
  }

