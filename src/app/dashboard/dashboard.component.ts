import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Breed } from '../breed';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

breed: Breed[];
selectedBreed: Breed = {id:null, name:null};

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.readBreed().subscribe((breed: Breed[])=>{
    this.breed = breed;
    console.log(this.breed);
 });
  }
}

