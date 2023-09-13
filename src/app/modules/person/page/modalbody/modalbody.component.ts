import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
// import { Departamento } from '@models/departamentoModel';
import { DepartmentserviceService } from "@person/services/departmentservice.service";
import { CityService } from "@person/services/city.service";
import { PersonaModel } from '@models/personaModel';
import { SavepersonService } from '@modules/person/services/saveperson.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { TablepersonService } from "@person/services/tableperson.service";
import { UpdatepersonService } from "@person/services/updateperson.service";



interface Departamento{
  depid: string;
  depnombre: string;
}

@Component({
  selector: 'app-modalbody',
  templateUrl: './modalbody.component.html',
  styleUrls: ['./modalbody.component.css']
})


export class ModalbodyComponent implements OnInit{

  departamentos : any;
  ciudades : any;
  persona : PersonaModel = {peridentificacion: "", pernombre1:"", pernombre2:"", perapellido1: "", perapellido2:"", percorreo:"", pertelefono:"", ciuid:""}
  title : string ="Este va a ser el titulo"
  public formInfo: FormGroup = new FormGroup({});
  peridentificacion : FormControl = new FormControl({}); 
  pernombre1 : FormControl = new FormControl({}); 
  pernombre2 : FormControl = new FormControl({}); 
  perapellido1 : FormControl = new FormControl({}); 
  perapellido2 : FormControl = new FormControl({}); 
  percorreo : FormControl = new FormControl({}); 
  pertelefono : FormControl = new FormControl({}); 
  departamento : FormControl = new FormControl({}); 
  ciuid : FormControl = new FormControl({});
  modo : string = this.data.mode; 

  constructor(private dialogRef: MatDialogRef<ModalbodyComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any, private depService :DepartmentserviceService,
    private ciuService: CityService, private createPerson: SavepersonService,
    private notification : MatSnackBar, private gridService: TablepersonService,
    private updatePerson: UpdatepersonService){
    
  }

  close(): boolean{
    this.dialogRef.close();
    return false;
  }

  ngOnInit(): void {
    this.title = this.data.title;
    console.log(this.data);
    this.createFormControls();
    this.createForm();

    this.depService.getDepartments$().subscribe({
      next: (response) => {
        this.departamentos = response
      },
      error: (error) => {
        this.notification.open(error.message, "Ok", {
          direction: 'ltr',
          duration: 3000,
          panelClass: ["red-snackbar"],
          verticalPosition:"top",
          horizontalPosition: "center"
        });
      },
    })

    this.departamento.valueChanges.subscribe(depId =>{
      this.ciuService.getCities$(depId).subscribe({
        next: (response) =>{
          this.ciudades = response;
          this.ciuid.setValue(-1);
        },
        error: (error) => {
          this.notification.open(error.message, "Ok", {
            direction: 'ltr',
            duration: 3000,
            panelClass: ["red-snackbar"],
            verticalPosition:"top",
            horizontalPosition: "center"
          });
        }
      })
    })
  }
  

  createForm(){
    this.formInfo = new FormGroup({
      peridentificacion : this.peridentificacion,
      pernombre1: this.pernombre1,
      pernombre2: this.pernombre2,
      perapellido1: this.perapellido1,
      perapellido2: this.perapellido2,
      percorreo: this.percorreo,
      pertelefono: this.pertelefono,
      departamento: this.departamento,
      ciuid: this.ciuid,
    })
  }

  createFormControls(){
        if(this.data.mode === "update"){
          const {persona} = this.data
          // console.log("ciuid recibido",persona.ciuid);
          this.peridentificacion =  new FormControl(persona.peridentificacion,[Validators.required,Validators.maxLength(15),
            Validators.minLength(6),
          ]);
  
          this.pernombre1 = new FormControl(persona.pernombre1,[Validators.required, Validators.maxLength(20)]);
          this.pernombre2 = new FormControl(persona.pernombre2);
          this.perapellido1 = new FormControl(persona.perapellido1,[Validators.required, Validators.maxLength(25)]);
          this.perapellido2 = new FormControl(persona.perapellido2,[Validators.required, Validators.maxLength(25)]);
          this.percorreo = new FormControl(persona.percorreo,[Validators.required, Validators.maxLength(60),
            Validators.email,
          ]);
          this.pertelefono = new FormControl(persona.pertelefono,[Validators.required, Validators.maxLength(20)]);
          this.departamento = new FormControl(persona.depid,[Validators.required]);
          this.departamento.setValue(persona.depid);
          this.ciuService.getCities$(persona.depid).subscribe({
            next: (response) => {
              this.ciudades = response;  
              this.ciuid.setValue(persona.ciuid);
              this.ciuid.addValidators(Validators.required);
            }
          });
          // this.ciuid = new FormControl(persona.ciuid,[Validators.required]);
        
        }else{
          this.peridentificacion =  new FormControl("",[Validators.required,Validators.maxLength(15),
            Validators.minLength(6),
          ]);
  
          this.pernombre1 = new FormControl("",[Validators.required, Validators.maxLength(20)]);
          this.pernombre2 = new FormControl("");
          this.perapellido1= new FormControl("",[Validators.required, Validators.maxLength(25)]);
          this.perapellido2 = new FormControl("",[Validators.required, Validators.maxLength(25)]);
          this.percorreo= new FormControl("",[Validators.required, Validators.maxLength(60),
            Validators.email,
          ]);
          this.pertelefono= new FormControl("",[Validators.required, Validators.maxLength(20)]);
          this.departamento= new FormControl(-1,[Validators.required]);
          this.ciuid= new FormControl(-1,[Validators.required]);
        }
  }

  sendInfo(): void{
    this.persona =  this.formInfo.value;
    console.log("ciuid", this.persona.ciuid)
    console.log("departamento.value", Number(this.departamento.value))
    if(this.formInfo.valid && (Number(this.persona.ciuid) !== -1 && Number(this.departamento.value) !== -1)){
      // console.table(this.persona);
      if (this.modo === "insert"){
        this.createPerson.savePerson$(this.persona).subscribe({
          next: (response) => {
            console.log(response);
            this.notification.open(response.message, "Ok",{
              direction: 'ltr',
              duration: 3000,
              panelClass: ["red-snackbar"],
              verticalPosition: "top",
              horizontalPosition: "center"
            });
            this.dialogRef.close();
            this.gridService.filter("Register click", "");
          },
          error: (error) => {
            this.notification.open("Ocurrio el siguente error insertando una persona", "Ok",{
              direction: 'ltr',
              duration: 3000,
              panelClass: ["red-snackbar"],
              verticalPosition: "top",
              horizontalPosition: "center"
            });
            setTimeout( () =>{
              this.notification.open(error.error, "Ok", {
                direction: 'ltr',
                duration: 3000,
                panelClass: ["red-snackbar"],
                verticalPosition:"top",
                horizontalPosition: "center"
              });
            }, 4000)
          },
        })
      }else{
        // console.log("ciuid a enviar",this.persona.ciuid);
        this.updatePerson.updatePerson$(this.persona).subscribe({
          next: (response) => {
            console.log(response);
            this.notification.open(response.message, "Ok",{
              direction: 'ltr',
              duration: 3000,
              panelClass: ["red-snackbar"],
              verticalPosition: "top",
              horizontalPosition: "center"
            });
            this.dialogRef.close();
            this.gridService.filter("Register click", "");
          },
          error: (error) => {
            this.notification.open("Ocurrio el siguente error insertando una persona", "Ok",{
              direction: 'ltr',
              duration: 3000,
              panelClass: ["red-snackbar"],
              verticalPosition: "top",
              horizontalPosition: "center"
            });
            setTimeout( () =>{
              this.notification.open(error.error, "Ok", {
                direction: 'ltr',
                duration: 3000,
                panelClass: ["red-snackbar"],
                verticalPosition:"top",
                horizontalPosition: "center"
              });
            }, 4000)
          },
        })
      }

    }else{
      this.notification.open("Formulario no valido", "ok",{
        announcementMessage:"as",
                direction: 'ltr',
                duration: 3000,
                panelClass: ["red-snackbar"],
                verticalPosition:"top",
                horizontalPosition: "center"
      });
      
    }
    
  }

}
