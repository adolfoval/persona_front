import { Component, Input } from '@angular/core';
import { MatDialog} from "@angular/material/dialog";
import { ComfirmdialogComponent }  from "@person/page/comfirmdialog/comfirmdialog.component";
import { personaResponse } from "@models/personaModel";

@Component({
  selector: 'app-deletebutton',
  templateUrl: './deletebutton.component.html',
  styleUrls: ['./deletebutton.component.css']
})
export class DeletebuttonComponent {
  constructor(private matDialog : MatDialog){}
  @Input() persona: personaResponse = {peridentificacion:"1111111", pernombre1:"Sancochio", 
	perapellido1:"Malhecho", perapellido2:"De toda la vida", percorreo:"sacochiio@gmail.com",
	pertelefono:"3215698745", perestado:"A", depid:"1", ciuid:"1", ciunombre:"NINGUNA"}

  openComfirm(){

    this.matDialog.open(ComfirmdialogComponent, {
      disableClose : true,
      autoFocus: true,
      data:{
        title: "Insertar persona",
        mode: "delete",
        persona: this.persona
      }
    });
  }
}
