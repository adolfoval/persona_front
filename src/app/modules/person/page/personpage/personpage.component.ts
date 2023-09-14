import { Component, OnInit } from '@angular/core';
import { personaResponse } from "@models/personaModel";
import { TablepersonService } from "@person/services/tableperson.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import {MatTooltipModule} from '@angular/material/tooltip';


@Component({
	selector: 'app-personpage',
	templateUrl: './personpage.component.html',
	styleUrls: ['./personpage.component.css']
})


export class PersonpageComponent implements OnInit{

	personas: personaResponse = {data: [{peridentificacion:"1111111", pernombre1:"Sancochio", 
	perapellido1:"Malhecho", perapellido2:"De toda la vida", percorreo:"sacochiio@gmail.com",
	pertelefono:"3215698745",perestado:"I", depid:"-1",  ciuid:"-1", ciunombre:"SANTIAGO DE CHILE"}], message:""} 
	

	constructor(private personService:TablepersonService, private  notification:MatSnackBar){
		this.personService.listen().subscribe((m: any) =>{
			console.log(m);
			if(m[0] === "By"){
				this.allPersonsBy(m[1])
			}else{

				this.allPersons()
			}
		})
	}

	ngOnInit(): void {
		this.allPersons();
	}

	private allPersons(){
		this.personService.getPersons$().subscribe({
			next: (response: personaResponse) => {
				console.table(response)
				this.personas = response;
			},
			error: (error) =>{
				this.notification.open("Ocurrio un error consultando las personas", "Ok",{
					direction: 'ltr',
					duration: 3000,
					panelClass: ["red-snackbar"],
					verticalPosition: "top",
					horizontalPosition: "center"
				});
				
				setTimeout( () =>{
					console.log(error)
					this.notification.open(error.message, "Ok", {
						direction: 'ltr',
						duration: 4000,
						panelClass: ["red-snackbar"],
						verticalPosition:"top",
						horizontalPosition: "center"
					});
				}, 4000)},
		})
	}

	private allPersonsBy(data: string){
		this.personService.getPersonsBy$(data).subscribe({
			next: (response) => {
				this.personas = response.data;
			},
			error: (error) =>{
				this.notification.open("Ocurrio un error consultando las personas", "Ok",{
					direction: 'ltr',
					duration: 3000,
					panelClass: ["red-snackbar"],
					verticalPosition: "top",
					horizontalPosition: "center"
				});
				
				setTimeout( () =>{
					console.log(error)
					this.notification.open(error.message, "Ok", {
						direction: 'ltr',
						duration: 4000,
						panelClass: ["red-snackbar"],
						verticalPosition:"top",
						horizontalPosition: "center"
					});
				}, 4000)},
		})
	}

}
