import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:55503/api";
  readonly PhotoUrl = "http://localhost:55503/Photos/";

  constructor(private http:HttpClient) { }

  getOdeljenja():Observable<any[]>{
      return this.http.get<any>(this.APIUrl+"/Odeljenje");
  }

  addOdeljenje(val:any){
    return this.http.post(this.APIUrl+'/Odeljenje',val);
  }

  updateOdeljenje(val:any){
    return this.http.put(this.APIUrl+'/Odeljenje',val);
  }

  deleteOdeljenje(val:any){
    return this.http.delete(this.APIUrl+'/Odeljenje/'+val);
  }

  getZaposlene():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+"/Zaposleni");
  }

  addZaposlenog(val:any){
  return this.http.post(this.APIUrl+'/Zaposleni',val);
  }

  updateZaposlenog(val:any){
  return this.http.put(this.APIUrl+'/Zaposleni',val);
  }

  deleteZaposlenog(val:any){
  return this.http.delete(this.APIUrl+'/Zaposleni/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Zaposleni/SaveFile',val);
  }

  getAllOdeljenjaImena():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Zaposleni/GetAllOdeljenja');
  }

}
