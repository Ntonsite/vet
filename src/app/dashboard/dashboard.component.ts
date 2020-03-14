import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Vet } from '../vet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

vet: Vet[];
selectedVet: Vet = {id:null, specialistIn:null, location: null};

  constructor(private apiService: ApiService) { }
	  ngOnInit() {
	    this.apiService.readVet().subscribe((vet: Vet[])=>{
	    this.vet = vet;
	    console.log(this.vet);
	 });	
  	}
}

