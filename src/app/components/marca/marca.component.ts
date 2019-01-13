import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css'],
  providers:[ApiService]
})
export class MarcaComponent implements OnInit {


  public familias: any = [];
  public articulos: any = "";
  public articulo: any = null;
  public array: any =[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log("Busco familias");
    this.showFamilias();
  }

  public showFamilias(){

      console.log(this.apiService.getFamilias());

      this.apiService.getFamilias()
          .subscribe(
            result => {
              this.familias = result;
              console.log("Resultado lista familias", result)
            },
            error => {
              console.log("Error")
            }
          );
  }

  public showArticulo (numArt){

        console.log("Busco articulos de Familia ", numArt);

        this.apiService.getArticuloNum(numArt)
            .subscribe(
              result => {
                this.array = result;
                for (let i= 0; i <1; i++){
                  this.articulo = this.array.art_m[i];
                }
                console.log("Resultado de articulo", this.articulo)
              },
              error => {
                console.log("Error")
              }
            );


  }

  public showArticulosFamilia (numFam){

        console.log("Busco articulos de Familia ", numFam);

        this.apiService.getArticuloFamiliaNum(numFam)
            .subscribe(
              result => {
                this.articulos = result;
                console.log("Resultado lista articulos", this.articulos)
              },
              error => {
                console.log("Error")
              }
            );


  }
}
