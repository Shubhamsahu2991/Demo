import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApplicationformnewComponent } from '../../../applicationformnew/applicationformnew.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,ApplicationformnewComponent,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
