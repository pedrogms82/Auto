import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
  providers:[ApiService]
})
export class BuscadorComponent implements OnInit {

  public familias: any = [];

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

}
