import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from '../app/contacts/contacts.component';
import { ContactComponent } from '../app/contact/contact.component';
import { ContactViewComponent } from '../app/contact-view/contact-view.component';

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
    path: '**',
    redirectTo: 'others/404'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
