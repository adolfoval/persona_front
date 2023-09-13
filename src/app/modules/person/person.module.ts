import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { PersonpageComponent } from './page/personpage/personpage.component';
import { FormcreateComponent } from './page/formcreate/formcreate.component';
import { BusquedaComponent } from './page/busqueda/busqueda.component';
import { NgbCollapseModule, NgbDatepicker, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalbodyComponent } from './page/modalbody/modalbody.component';
import { MatDialogModule, MatDialogActions }  from "@angular/material/dialog";
import { ReactiveFormsModule } from '@angular/forms';
import { OnlynumberDirective } from './directives/onlynumber.directive';
import { OnlylettersDirective } from './directives/onlyletters.directive';
import { UpdatebuttonComponent } from './page/updatebutton/updatebutton.component';
import { DeletebuttonComponent } from './page/deletebutton/deletebutton.component';
import { ComfirmdialogComponent } from './page/comfirmdialog/comfirmdialog.component';



@NgModule({
  declarations: [
    PersonpageComponent,
    FormcreateComponent,
    BusquedaComponent,
    ModalbodyComponent,
    OnlynumberDirective,
    OnlylettersDirective,
    UpdatebuttonComponent,
    DeletebuttonComponent,
    ComfirmdialogComponent,
    
  ],
  imports: [
    CommonModule,
    NgbCollapseModule,
    NgbModalModule,
    NgbDatepicker,
    ReactiveFormsModule,
    
  ],
  exports:[
    PersonpageComponent,
    FormcreateComponent,
    BusquedaComponent,
    OnlynumberDirective,
    OnlylettersDirective
  ]
})
export class PersonModule { }
