import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map, filter } from 'rxjs/operators';
// import { Response } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly rootUrl = 'http://auto.arysoft.es/velneo/vERP_2_dat_dat/v1';
  public reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True','Access-Control-Allow-Origin': '*' });


  constructor(private http: HttpClient) { }

  public getFamilias()  {
  return this.http.get(this.rootUrl+'/fam_m?api_key=fam');
  }

  public getArticuloFamiliaNum(FamNum)  {
  return this.http.get(this.rootUrl+'/art_m?filter%5Bfam%5D='+FamNum+'&api_key=art');
  }

  public getArticuloNum(artNum)  {
  return this.http.get(this.rootUrl+'/art_m/'+artNum+'?api_key=art');
  }
}
