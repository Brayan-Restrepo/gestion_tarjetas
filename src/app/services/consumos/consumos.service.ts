import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumosService {

  constructor(
    private apiService: ApiService
  ) { }

  public listConsumos(id): Observable<any> {
    return this.apiService.get<any>('clientes/'+id);
  }
}
