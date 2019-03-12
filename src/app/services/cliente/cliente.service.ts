import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { ICliente } from 'src/app/interfaces/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private apiService: ApiService
  ) { }

  public listClentes(): Observable<any> {
    return this.apiService.get<any>('clientes');
  }
  public createClient(clientes: ICliente): Observable<any> {
    return this.apiService.post('clientes', clientes)
  }
  public deleteClient(id): Observable<any>{
    return this.apiService.delete('clientes/', id)
  }
  public updateClient(clientes: ICliente): Observable<any> {
    return this.apiService.update('clientes', clientes)
  }
}
