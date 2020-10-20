import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacts } from '../model/contacts';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  phonebook:Contacts;
  baseUrl:string="http://localhost:57285/api/Phonebook/";

  constructor(private http:HttpClient, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let Id=6;
    this.activatedRoute
        .params
        .subscribe(parameters=>{
                                  Id=parameters["id"];
                                  this.http.get(this.baseUrl+6)
                                  .map(resp=>resp as Contacts)
                                  .subscribe(lstContacts=>this.phonebook=lstContacts);
                                });
                                this.phonebook= new Contacts(0,"","","","","","","","","","");

  }
  deleteContact(Id): void{
    this.http.delete(this.baseUrl+Id)
             .subscribe(resp=>{
                              console.log("Record Deleted");
                              this.router.navigateByUrl("/displayall");
                              });

  }

}
