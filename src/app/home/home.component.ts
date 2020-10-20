import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacts } from '../model/contacts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  phonebook:Contacts;
  baseUrl:string="http://localhost:57285/api/Phonebook/";

  constructor(private http:HttpClient, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
