import { Component, inject, OnInit ,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MainService } from '../../service/ApiMain Service/main.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../service/user/user.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

userService = inject(UserService)
mainService = inject(MainService)
constructor(private router: Router, private mainservice: MainService) {}
  
get loggedInUsername(): string {
  return this.userService.getLoggedInUsername();
}

// logout(){
//    this.userService.setLoggedInUsername('');
//     this.router.navigate(['/g2glogin']);
//     sessionStorage.clear();      
// }


logout(): void {
   
  this.mainService.g2glogout(this.userService.getLoggedInUsername()).subscribe((Ok) => {
    console.log(Ok);
   }); 
  this.userService.setLoggedInUsername('');
  this.router.navigate(['/g2glogin']);
  sessionStorage.clear();
}


}

