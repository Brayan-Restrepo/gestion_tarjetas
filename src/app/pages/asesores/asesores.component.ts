import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AsesorService } from 'src/app/services/asesor/asesor.service';

@Component({
  selector: 'app-asesores',
  templateUrl: './asesores.component.html',
  styleUrls: ['./asesores.component.scss']
})
export class AsesoresComponent implements OnInit {

  public personForm = this._fb.group({
    nombre: ['', Validators.pattern('^[0-9a-zA-Z ]+$')],
    especialidad: ['', Validators.required],
    id: ['']
  });

  public listAsesores;
  public createOrUpdate = ['Registar', 'fa fa-plus fa-lg', 'btn btn-success btn-block'];

  constructor(
    private _fb: FormBuilder,
    private _asesorService: AsesorService
  ) { }

  ngOnInit() {
    this.getCliente()
  }
  public getCliente() {
    this._asesorService.listAsesor()
      .subscribe(response => {
        this.listAsesores = response;
        console.log(response)
      });
  }
  public onSubmit(createOrUpdate) {
    if (createOrUpdate == 'Registar') {
      if (this.personForm.status === 'VALID') {
        this._asesorService.createAsesor(this.personForm.value).subscribe(data => {
          this.personForm.reset();
          this.getCliente()
        },
          err => {
            let messages: string = "";
            let keys = Object.keys(err.error)
          })
      } else {
        console.log('not valid...');
      }
    } else if (createOrUpdate === 'Actualizar') {
      this._asesorService.updateAsesor(this.personForm.value).subscribe(data => {
        this.createOrUpdate = ['Registar', 'fa fa-plus fa-lg', 'btn btn-success btn-block'];
        this.personForm.reset();
        this.getCliente()
      },
        err => {
          let messages: string = "";
          let keys = Object.keys(err.error)
        })
    } else {
      console.log('not valid...');
    }
  }
  public Delete($eve, id) {
    this._asesorService.deleteAsesor(id).subscribe(data => {
      this.getCliente()
    },
      err => {
        let messages: string = "";
        let keys = Object.keys(err.error)
      })
  }
  public Edit($e, id) {
    let currentCliente = this.listAsesores.find(p => p.id === id);
    console.log(currentCliente);
    if (!currentCliente) return;
    this.createOrUpdate = ['Actualizar', 'fa fa-refresh fa-lg', 'btn btn-warning btn-block witheLetters'];
    Object.keys(currentCliente).map(vehicleKey => {
      if (!this.personForm.controls[vehicleKey]) {
        return;
      }
      this.personForm.controls[vehicleKey].setValue(currentCliente[vehicleKey]);
    });
  }
}
