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
  readonly customUrl = 'http://auto.arysoft.es/velneo/vERP_2_dat_dat';
  public reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': "GET, POST, PUT, DELETE, OPTIONS" });


  constructor(private http: HttpClient) { }

  public getFamilias()  {
  return this.http.get(this.rootUrl+'/fam_m?filter%5Bes_modelo%5D=false&api_key=fam');
  }

  public getModelos()  {
  return this.http.get(this.rootUrl+'/fam_m?filter%5Bes_modelo%5D=true&api_key=fam');
  }

  public getModelosPorMarca(marca)  {
  return this.http.get(this.customUrl+'/VAPI_MODELO_POR_MARCA?MARCA='+marca );//, { headers: this.reqHeader }
  }

  public getArticuloFamiliaNum(FamNum)  {
  return this.http.get(this.rootUrl+'/art_m?filter%5Bfam%5D='+FamNum+'&api_key=art');
  }

  public getArticuloNum(artNum)  {
  return this.http.get(this.rootUrl+'/art_m/'+artNum+'?api_key=art');
  }

  public buscadorVehiculos(datos) {
    return this.http.get(this.customUrl+'/VAPI_BUSQUEDA?'+datos );
  }


}
