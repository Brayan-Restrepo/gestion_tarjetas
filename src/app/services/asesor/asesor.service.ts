import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { IAsesor } from 'src/app/interfaces/asesor';

@Injectable({
  providedIn: 'root'
})
export class AsesorService {

  constructor(
    private apiService: ApiService
  ) { }

  public listAsesor(): Observable<any> {
    return this.apiService.get<any>('asesores');
  }
  public createAsesor(asesor: IAsesor): Observable<any> {
    return this.apiService.post('asesores', asesor)
  }
  public deleteAsesor(id): Observable<any>{
    return this.apiService.delete('asesores/', id)
  }
  public updateAsesor(asesor: IAsesor): Observable<any> {
    return this.apiService.update('asesores', asesor)
  }
}
