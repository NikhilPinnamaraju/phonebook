import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DisplayAllComponent } from './display-all/display-all.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent} from './body/body.component';

const routes: Routes=[
  { 
    path: 'home',
    component:HomeComponent
  },
  { 
    path: 'edit/:id',
    component:EditContactComponent
  },
  { 
    path: 'add',
    component:AddContactComponent
  },
  { 
    path: 'displayall',
    component:DisplayAllComponent
  },
  { 
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DisplayAllComponent,
    AddContactComponent,
    EditContactComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
