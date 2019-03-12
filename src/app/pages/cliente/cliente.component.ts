import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  public personForm = this._fb.group({
    nombre: ['', Validators.pattern('^[0-9a-zA-Z]+$')],
    direccion: ['', Validators.pattern('^[0-9a-zA-Z]+$')],
    telefono: ['', Validators.pattern('^[0-9a-zA-Z]+$')],
    ciudad: ['', Validators.pattern('^[0-9a-zA-Z]+$')],
    id: ['']
  });

  public listClientes;
  public createOrUpdate = ['Registar', 'fa fa-plus fa-lg', 'btn btn-success btn-block'];

  constructor(
    private _fb: FormBuilder,
    private _clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.getCliente()
  }
  public getCliente(){
    this._clienteService.listClentes()
    .subscribe(response => {
      this.listClientes = response;
      console.log(response)
    });
  }
  public onSubmit(createOrUpdate) {
    if(createOrUpdate=='Registar'){
    if (this.personForm.status === 'VALID') {
      this._clienteService.createClient(this.personForm.value).subscribe(data => {
        this.getCliente()
      },
      err => {
        let messages: string = "";
        let keys = Object.keys(err.error)
      })
    }else {
      console.log('not valid...');
    }
  }
  if (this.personForm.status === 'VALID') {
    this._clienteService.updateClient(this.personForm.value).subscribe(data => {
      this.createOrUpdate = ['Registar', 'fa fa-plus fa-lg', 'btn btn-success btn-block'];
      this.getCliente()
    },
    err => {
      let messages: string = "";
      let keys = Object.keys(err.error)
    })
  }else {
    console.log('not valid...');
  }
  }
  public Delete($eve, id) {
    this._clienteService.deleteClient(id).subscribe(data => {
      this.getCliente()
    },
    err => {
      let messages: string = "";
      let keys = Object.keys(err.error)
    })
  }
  public Edit($e, id) {
    let currentCliente = this.listClientes.find(p => p.id === id);
    console.log(currentCliente);
    if (!currentCliente) return;
    this.createOrUpdate = ['Actualizar', 'fa fa-refresh fa-lg', 'btn btn-warning btn-block witheLetters'];
    Object.keys(currentCliente).map(vehicleKey => {
      if (!this.personForm.controls[vehicleKey]) return;
      this.personForm.controls[vehicleKey].setValue(currentCliente[vehicleKey]);
    });
  }  

}
