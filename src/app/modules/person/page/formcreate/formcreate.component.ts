import { Component} from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MatDialog} from "@angular/material/dialog";
import { ModalbodyComponent } from "@person/page/modalbody/modalbody.component"



@Component({
  selector: 'app-formcreate',
  templateUrl: './formcreate.component.html',
  styleUrls: ['./formcreate.component.css']
})
export class FormcreateComponent {

  constructor(private modalService: NgbModal, private matDialog: MatDialog){}

  open(){

    this.matDialog.open(ModalbodyComponent, {
      disableClose : true,
      autoFocus: true,
      data:{
        title: "Insertar persona",
        mode: "insert"
      }
    });
  }

}