import { Component, OnInit } from '@angular/core';
import { Contacts } from '../model/contacts';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent implements OnInit {

  phonebook:Contacts[]=[];
  err:string;
  baseUrl:string="http://localhost:57285/api/Phonebook/";
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts(): void{
    this.http.get(this.baseUrl)
             .map(result=>result as Contacts[])
             .subscribe(lstContacts=>{
                              this.phonebook=lstContacts;console.log(this.phonebook)
                              },(error:HttpErrorResponse)=>{console.log(error.error);this.err=error.error}
                        );
  }
  deleteContact(Id): void{
    this.http.delete(this.baseUrl+Id)
             .subscribe(resp=>{
                              console.log("Record Deleted");
                              this.router.navigateByUrl("/displayall");
                              });

  }
}
