import { Routes } from '@angular/router';
import { MainComponent } from '../pages/main/main.component';
import { ApplicationFormComponent } from '../pages/application-form/application-form.component';
import { ApplicationformnewComponent } from '../pages/applicationformnew/applicationformnew.component';
import { G2gloginComponent } from '../pages/g2glogin/login/g2glogin/g2glogin.component';
import { NewComponent } from '../pages/new/new.component';
import { DemoComponent } from '../pages/demo/demo.component';
import { authGuard } from '../service/guard/auth.guard';
import { DashboardComponent } from '../pages/g2glogin/dashboard/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: ''
        , component: MainComponent
    },
    {
        path: 'ApplicationForm'
        , component: ApplicationFormComponent
    },
    
    {
        path: 'g2glogin'
        , component: G2gloginComponent
    },
   
    {
        path: 'Dashboard',
        component: DashboardComponent,
        canActivate: [authGuard] 
    },

    {
        path: 'Dashboard',
        children : [
            {
                path: 'ApplicationFormnew',
                component: ApplicationformnewComponent,
                canActivate: [authGuard] 
                },
        ]
    },
    
    {
        path: 'admin'
        , component: NewComponent,
          
    },
    {
        path: 'demo'
        , component: DemoComponent
    }
];

