import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap"
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TablepersonService } from "@person/services/tableperson.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit{

  constructor(private gridService: TablepersonService, private notification: MatSnackBar){}

  public isCollapsed = true;
  public formBusqueda: FormGroup = new FormGroup({});
  peridentificacion : FormControl = new FormControl({}); 
  pernombre : FormControl = new FormControl({}); 
  percorreo : FormControl = new FormControl({}); 


  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
    
  }

  createForm(){
    this.formBusqueda = new FormGroup({
      peridentificacion : this.peridentificacion,
      pernombre: this.pernombre,
      percorreo: this.percorreo,
    })
  }

  createFormControls(){
    this.peridentificacion = new FormControl("")
    this.pernombre = new FormControl("");
    this.percorreo = new FormControl("");      
  }
  
  writeIn(control: string){
    if(control === "peridentificacion"){
      this.pernombre.setValue("");
      this.percorreo.setValue("");
  
    }else if(control === "pernombre"){
      this.peridentificacion.setValue("");
      this.percorreo.setValue("");
    }else{
      this.peridentificacion.setValue("");
      this.pernombre.setValue("");
    }
  }

  search(){
    console.log("Buscar...")
    if(this.peridentificacion.value !== ""){
      console.info("Busca por identificacion")
      this.gridService.filter("By", this.peridentificacion.value);

    }else if(this.pernombre.value !== ""){
      console.info("Busca por nombre");
      this.gridService.filter("By", this.pernombre.value);

    }else if(this.percorreo.value !== ""){

      console.info("Busca por correo");
      this.gridService.filter("By", this.percorreo.value);
    }else{
      this.notification.open("Los campos de los filtros estan vacios.", "Ok",{
        direction: 'ltr',
        duration: 3000,
        panelClass: ["red-snackbar"],
        verticalPosition: "top",
        horizontalPosition: "center"
      });
    }
    
  }
  
}