import { Component, Input } from '@angular/core';
import { MatDialog} from "@angular/material/dialog";
import { personaResponse } from '@models/personaModel';
import { ModalbodyComponent } from "@person/page/modalbody/modalbody.component"

@Component({
  selector: 'app-updatebutton',
  templateUrl: './updatebutton.component.html',
  styleUrls: ['./updatebutton.component.css']
})
export class UpdatebuttonComponent {

  @Input() persona: personaResponse = {peridentificacion:"1111111", pernombre1:"Sancochio", 
	perapellido1:"Malhecho", perapellido2:"De toda la vida", percorreo:"sacochiio@gmail.com",
	pertelefono:"3215698745", perestado:"A", depid:"1", ciuid:"1", ciunombre:"NINGUNA"}

  constructor(private matDialog: MatDialog){}
  open(){
    // console.log(this.persona);
    this.matDialog.open(ModalbodyComponent, {
      disableClose : true,
      autoFocus: true,
      data:{
        title: "Editar persona",
        mode: "update",
        persona: this.persona
      }
    });
  }
}
