import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from '../app/contact/contacts/contacts.component';
import { ContactComponent } from '../app/contact/contact/contact.component';
import { ContactViewComponent } from '../app/contact/contact-view/contact-view.component';
import { HoursComponent } from '../app/hours/hours/hours.component';
import { HourComponent } from '../app/hours/hour/hour.component';
import { HourViewComponent } from '../app/hours/hours-view/hours-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'view/contact/:id',
    component: ContactViewComponent,
  },
  {
    path: 'hours',
    component: HoursComponent,
  },
  {
    path: 'hour',
    component: HourComponent,
  },
  {
    path: 'view/hour/:id',
    component: HourViewComponent,
  },
  {
    path: '**',
    redirectTo: 'others/404'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
