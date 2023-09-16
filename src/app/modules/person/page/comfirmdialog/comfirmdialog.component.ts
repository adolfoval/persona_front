import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DeletepersonService } from "@person/services/deleteperson.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TablepersonService } from "@person/services/tableperson.service";

@Component({
  selector: 'app-comfirmdialog',
  templateUrl: './comfirmdialog.component.html',
  styleUrls: ['./comfirmdialog.component.css']
})
export class ComfirmdialogComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any, 
  private dialogRef: MatDialogRef<ComfirmdialogComponent>,
  private deletePerson: DeletepersonService, private notification : MatSnackBar,
  private gridService: TablepersonService){}

  persona: any = this.data.persona;
  message : string = `¿Está seguro que desea eliminar a ${this.persona.pernombre1} ${this.persona?.pernombre2} ${this.persona.perapellido1}?`;

  close(): boolean{
    
    this.dialogRef.close();
    return false;
  }

  delete(peridentificacion : string):void{
    
    this.deletePerson.deletePerson$(peridentificacion).subscribe({
      next: (response) => {
        this.notification.open(response.message, "Ok", {
          direction: 'ltr',
          duration: 3000,
          panelClass: ["red-snackbar"],
          verticalPosition:"top",
          horizontalPosition: "center"
        });
        this.dialogRef.close();
        this.gridService.SetPersonaObs = ["Register click", ""];
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
    });
  }
}
