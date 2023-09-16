import { Component, OnInit } from '@angular/core';
import { personaResponse, personaRe } from "@models/personaModel";
import { TablepersonService } from "@person/services/tableperson.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import {MatTooltipModule} from '@angular/material/tooltip';


@Component({
	selector: 'app-personpage',
	templateUrl: './personpage.component.html',
	styleUrls: ['./personpage.component.css']
})


export class PersonpageComponent implements OnInit{

	personas: personaResponse = {data: [], message: ""}
	
	constructor(private personService:TablepersonService, private  notification:MatSnackBar){
		this.personService.PersonaObsObject$.subscribe({
			next: (response) =>{this.personas = response},
			error: (err) => {console.log(err)},
			complete: () =>{console.log("Escucha completa")}
		});
	}

	ngOnInit(): void {
		this.personService.getPersons$().subscribe({
			next: (response) =>{this.personas = response;},
			error: (err) => {console.log(err)},
			complete: () =>{console.log("Escucha completa")}
		})
	}

}
