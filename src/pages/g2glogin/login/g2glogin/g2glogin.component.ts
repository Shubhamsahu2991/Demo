import { Component, inject, OnInit  } from '@angular/core';
import { MainService } from '../../../../service/ApiMain Service/main.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import CryptoJS from 'crypto-js';
import { UserService } from '../../../../service/user/user.service';

@Component({
  selector: 'app-g2glogin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './g2glogin.component.html',
  styleUrl: './g2glogin.component.css'
})

export class G2gloginComponent implements OnInit {
  mainserice = inject(MainService)
  userService = inject(UserService)
  token: any ;
  loggedInUsername: any;

  loginForm!: FormGroup;
  generatedCaptcha: string = '';

  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      captcha:  ['', Validators.required]
    });
    this.generatedCaptcha = this.generateCaptcha();
  }



  onsubmit(username: string, password: string ,captcha: string): void {

    if (captcha !== this.generatedCaptcha) {
      alert('Invalid CAPTCHA');
      return;
    }
    const encryptedUsername = CryptoJS.AES.encrypt(username,'qwweeweqeqee11key5441555515eqq').toString();
  
    this.mainserice.g2glogin(username, password).subscribe(
      (Ok) => {
        console.log(Ok);
        this.token = Ok.token; // Get the token from the response
        sessionStorage.setItem('token', this.token);
        //sessionStorage.setItem('username', encryptedUsername);
        this.router.navigate(['/Dashboard']);
        this.loginForm.reset();
        this.userService.setLoggedInUsername(username);
        },
      (error) => {
        // Handle login error (e.g., display an error message)
        alert('user name & password is incorrect')
        console.error('Login failed:', error);
        this.loginForm.reset();
      }
    );
  }


  generateCaptcha(): string {
    const characters = 'QWASZXEDC1234';
    let captcha = '';
    for (let i = 0; i < 5; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
  }

  REgenerateCaptcha(): void {
    this.generatedCaptcha = this.generateCaptcha();
  }
}


