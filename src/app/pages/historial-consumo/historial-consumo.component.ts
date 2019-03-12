import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ConsumosService } from 'src/app/services/consumos/consumos.service';

@Component({
  selector: 'app-historial-consumo',
  templateUrl: './historial-consumo.component.html',
  styleUrls: ['./historial-consumo.component.scss']
})
export class HistorialConsumoComponent implements OnInit {

  public hitoricoConsumo: any;
  private idClietne: Number;

  constructor(private rutaActiva: ActivatedRoute,
    private _consumosService: ConsumosService) {
      this.idClietne = this.rutaActiva.snapshot.params.id;
    console.log(this.rutaActiva.snapshot.params.id);
  }

  ngOnInit() {
    this.getConsumos()
  }

  public getConsumos() {
    this._consumosService.listConsumos(this.idClietne)
      .subscribe(response => {
        this.hitoricoConsumo = response;
        console.log(response)
      });
  }

}
