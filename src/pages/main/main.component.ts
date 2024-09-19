import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MainService } from '../../service/ApiMain Service/main.service';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  

  
  mainservice = inject(MainService);
 

  instructionList: any[] = [];
  serviceList1: any[] = [];

  ngOnInit(): void {
    this.mainservice.getinstructionList().subscribe((res: any[]) => {
      this.instructionList = res;
    });

    this.mainservice.getserviceList1().subscribe((res: any[]) => {
      this.serviceList1 = res;
    });
  }

 


  filterByLinkId(linkId: string): any[] {
    return this.instructionList.filter(item => item.LINKID === linkId);
  }
  

  instructionPopup: boolean = false;
  servicesPopup: boolean = false;
  downloadPopup: boolean = false;

  togglePopup(popupType: string): void {
    // Reset all popups
    this.instructionPopup = false;
    this.servicesPopup = false;
    this.downloadPopup = false;

    // Open the selected popup
    if (popupType === 'instruction') {
      this.instructionPopup = true;
    } else if (popupType === 'services') {
      this.servicesPopup = true;
    } else if (popupType === 'download') {
      this.downloadPopup = true;
    }
  }



  
}
