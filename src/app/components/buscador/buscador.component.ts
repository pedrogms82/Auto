import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup,  Validators  } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
  providers:[ApiService]
})
export class BuscadorComponent implements OnInit {

  public familias: any = [];
  public modelos: any = [];
  public articulos: any = false;
  public formBusca: FormGroup;
  public marcaSeleccionada: string ="";
  public modeloSeleccionado: string ="";


  constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("Inicio formulario de Busqueda");

    this.formBusca = this.formBuilder.group({
          Marca:['', Validators.required],
          Modelo:['', Validators.required],
          Precio:['', Validators.required],
          Kilometraje:['', Validators.required]
    });
    console.log("Busco Marcas");
    this.showFamilias();
    console.log("Busco Modelos");
    this.showModelos();
  }

  public showFamilias(){
      this.apiService.getFamilias()
          .subscribe(
            result => {
              this.familias = result;
              console.log("Resultado lista Marcas", result)
            },
            error => {
              console.log("Error ", error);
            }
          );
  }

  public showModelos(){
      this.apiService.getModelos()
          .subscribe(
            result => {
              this.modelos = result;
              console.log("Resultado lista Modelos", result);

              console.log(this.modelos.fam_m.length);
              for(let i=0; i<this.modelos.fam_m.length;i++){
                console.log("ID ",this.modelos.fam_m[i].id);
                console.log("Substring ",this.modelos.fam_m[i].id.substr(0,3));
                // this.formBusca.controls.Marca.value
                if(this.formBusca.controls.Marca.value != this.modelos.fam_m[i].id.substr(0,3)){
                  console.log("Elimino ", this.modelos.fam_m[i].id);
                  this.modelos.fam_m.splice(i, 1);
                  i--;
                }
              }
              console.log("Resultado lista Modelos por Marca", this.modelos);
            },
            error => {
              console.log("Error ", error);
            }
          );
}


public onChangeMarca(marca) {
    console.log("Selecciono ", marca);
    this.marcaSeleccionada = marca;

    this.apiService.getModelosPorMarca(marca)
        .subscribe(
          result => {
            this.modelos = result;
            console.log("Resultado lista Modelos", result);

          },
          error => {
            console.log("Error ", error);
          }
        );
}

public onChangeModelo(modelo) {
    console.log("Selecciono ", modelo);
    this.modeloSeleccionado = modelo;
}

  public showArticulosFamilia (numFam){

        console.log("Busco articulos de Familia ", numFam);

        this.apiService.getArticuloFamiliaNum(numFam)
            .subscribe(
              result => {
                this.articulos = result;
                console.log("Resultado lista articulos", this.articulos);
              },
              error => {
                console.log("Error ", error);
              }
            );
}

  public buscaVehiculos (value){
    console.log("busco vehiculos", value);
    console.log("modelo", this.modeloSeleccionado);
    console.log("marca", this.marcaSeleccionada);
    let datos ;

    if (this.modeloSeleccionado) { datos = 'modelo='+this.modeloSeleccionado }
    else if (this.marcaSeleccionada) { datos = 'marca='+this.marcaSeleccionada }
    // else 

    this.apiService.buscadorVehiculos(datos)
        .subscribe(
          result => {
            this.articulos = result;
            console.log("Resultado Busqueda", this.articulos);
          },
          error => {
            console.log("Error ", error);
          }
        );
 }
}//export
