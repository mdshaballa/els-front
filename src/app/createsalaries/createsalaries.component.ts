import { SalarieService } from '../service/salarie.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Salarie } from '../model/salarie.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-createsalaries',
  templateUrl: './createsalaries.component.html',
  styleUrls: ['./createsalaries.component.css']
})
export class CreateSalariesComponent implements OnInit {

  salarieForm: FormGroup;
  isEditionMode = false;
  constructor(public salarieService:SalarieService, public dialogRef: MatDialogRef<CreateSalariesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Salarie, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initalizeForm();
    this.getMode();
  }

  initalizeForm()
  {
    this.salarieForm = new FormGroup({
      prenom: new FormControl('',Validators.required),
      fonction: new FormControl(''),
      anneesExperience: new FormControl(''),
      adresse: new FormControl(''),
      salaire: new FormControl(''),
      dateNaissance: new FormControl(''),
    });
  }

  onRegisterSubmit(){
    const salarie: Salarie = this.salarieForm.getRawValue();
    if(this.isEditionMode) {
      salarie.id = this.data.id;
      this.salarieService.update(salarie).pipe(
        catchError(() => {
          this.toastr.success('Un problème est survenu lors de la modification', 'Opération complète');
          throw Error;
        })
      ).subscribe(res => {
        this.toastr.success('Salarie a été modifié avec success', 'Opération complète');
        this.dialogRef.close();
      });

    } else {
      this.salarieService.store(salarie).pipe(
        catchError(() => {
          this.toastr.success('Un problème est survenu lors de la création', 'Opération complète');
          throw Error;
        })
      ).subscribe(res => {
        this.toastr.success('Salarie a été crée avec success', 'Opération complète');
        this.dialogRef.close();
      });
    }
  }

  /**
   * Permet de detcter le mode: création ou modification
   */
  getMode() {
    if(this.data) {
      this.isEditionMode = true;
      this.salarieForm.patchValue(this.data);
    }
  }

}
