import { Component, OnInit } from '@angular/core';
import { Contacts } from '../model/contacts';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  phonebook:Contacts;
  baseUrl:string="http://localhost:57285/api/Phonebook/";

  constructor(private http:HttpClient, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let Id;
    this.activatedRoute
        .params
        .subscribe(parameters=>{
                                  Id=parameters["id"];
                                  this.http.get(this.baseUrl+Id)
                                  .map(resp=>resp as Contacts)
                                  .subscribe(lstContacts=>this.phonebook=lstContacts);
                                });
                                this.phonebook= new Contacts(0,"","","","","","","","","","");
                                
  }
  editContact(): void{
    this.http.put(this.baseUrl+this.phonebook.Id,this.phonebook)
             .subscribe(resp=>{
                                console.log("Record Updated");
                                this.router.navigateByUrl("/displayall");
                              }
                        );
  }
}
