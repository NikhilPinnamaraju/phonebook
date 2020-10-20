import { Component, OnInit } from '@angular/core';
import { Contacts } from '../model/contacts';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  phonebook:Contacts;
  baseUrl:string="http://localhost:57285/api/Phonebook";
  
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.phonebook= new Contacts(0,"","","","","","","","","","");
  }

  addContact(): void{
    this.http.post(this.baseUrl,this.phonebook)
             .subscribe(resp=>{
                                console.log("Record added");
                                this.router.navigateByUrl("/displayall");
                              }
                        );
  }

}
