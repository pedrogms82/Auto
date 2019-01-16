import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { environment } from '../../constants';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css'],
  providers:[ApiService]
})
export class CocheComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  public articulo: any = "";
  public mobile = false;


  public cocheId
  constructor(private apiService: ApiService,
              private rutaActiva: ActivatedRoute) { }

  ngOnInit() {

          if (window.screen.width <= 420) { // 768px portrait
            this.mobile = true;
          }
        // this.mobile = true;

    this.cocheId =  this.rutaActiva.snapshot.params.id;
    // this.rutaActiva.params.subscribe( params => this.cocheId = params.id );
    this.getDatosCoche();



    //galleryImages
    this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];



        this.galleryImages = [

        ];
  }

  public getDatosCoche(){
      this.apiService.getArticuloNum(this.cocheId)
          .subscribe(
            result => {
              this.articulo = result;
              console.log("Resultado Coche", result);
              for(let i=0; i<1; i++){

                  if(this.articulo.art_m[i].img_name_1!=""){
                      let imagen = {
                        small: environment.Imagenes +""+ this.articulo.art_m[i].img_name_1,
                        medium: environment.Imagenes +""+ this.articulo.art_m[i].img_name_1,
                        big: environment.Imagenes +""+ this.articulo.art_m[i].img_name_1
                      };
                      this.galleryImages.push(imagen);
                  }
                  if(this.articulo.art_m[i].img_name_2!=""){
                    let imagen = {
                      small: environment.Imagenes +""+ this.articulo.art_m[i].img_name_2,
                      medium: environment.Imagenes +""+ this.articulo.art_m[i].img_name_2,
                      big: environment.Imagenes +""+ this.articulo.art_m[i].img_name_2
                    };
                    this.galleryImages.push(imagen);
                  }
                  if(this.articulo.art_m[i].img_name_3!=""){
                    let imagen = {
                      small: environment.Imagenes +""+ this.articulo.art_m[i].img_name_3,
                      medium: environment.Imagenes +""+ this.articulo.art_m[i].img_name_3,
                      big: environment.Imagenes +""+ this.articulo.art_m[i].img_name_3
                    };
                    this.galleryImages.push(imagen);
                  }
                  if(this.articulo.art_m[i].img_name_4!=""){
                    let imagen = {
                      small: environment.Imagenes +""+ this.articulo.art_m[i].img_name_4,
                      medium: environment.Imagenes +""+ this.articulo.art_m[i].img_name_4,
                      big: environment.Imagenes +""+ this.articulo.art_m[i].img_name_4
                    };
                    this.galleryImages.push(imagen);
                  }
                  if(this.articulo.art_m[i].img_name_5!=""){
                    let imagen = {
                      small: environment.Imagenes +""+ this.articulo.art_m[i].img_name_5,
                      medium: environment.Imagenes +""+ this.articulo.art_m[i].img_name_5,
                      big: environment.Imagenes +""+ this.articulo.art_m[i].img_name_5
                    };
                    this.galleryImages.push(imagen);
                  }
                  if(this.articulo.art_m[i].img_name_6!=""){
                    let imagen = {
                      small: environment.Imagenes +""+ this.articulo.art_m[i].img_name_6,
                      medium: environment.Imagenes +""+ this.articulo.art_m[i].img_name_6,
                      big: environment.Imagenes +""+ this.articulo.art_m[i].img_name_6
                    };
                    this.galleryImages.push(imagen);
                  }
                  if(this.articulo.art_m[i].img_name_7!=""){
                    let imagen = {
                      small: environment.Imagenes +""+ this.articulo.art_m[i].img_name_7,
                      medium: environment.Imagenes +""+ this.articulo.art_m[i].img_name_7,
                      big: environment.Imagenes +""+ this.articulo.art_m[i].img_name_7
                    };
                    this.galleryImages.push(imagen);
                  }
                  if(this.articulo.art_m[i].img_name_8!=""){
                    let imagen = {
                      small: environment.Imagenes +""+ this.articulo.art_m[i].img_name_8,
                      medium: environment.Imagenes +""+ this.articulo.art_m[i].img_name_8,
                      big: environment.Imagenes +""+ this.articulo.art_m[i].img_name_8
                    };
                    this.galleryImages.push(imagen);
                  }
                  if(this.articulo.art_m[i].img_name_9!=""){
                    let imagen = {
                      small: environment.Imagenes +""+ this.articulo.art_m[i].img_name_9,
                      medium: environment.Imagenes +""+ this.articulo.art_m[i].img_name_9,
                      big: environment.Imagenes +""+ this.articulo.art_m[i].img_name_9
                    };
                    this.galleryImages.push(imagen);
                  }
                  if(this.articulo.art_m[i].img_name_10!=""){
                    let imagen = {
                      small: environment.Imagenes +""+ this.articulo.art_m[i].img_name_10,
                      medium: environment.Imagenes +""+ this.articulo.art_m[i].img_name_10,
                      big: environment.Imagenes +""+ this.articulo.art_m[i].img_name_10
                    };
                    this.galleryImages.push(imagen);
                  }

              }
            },
            error => {
              console.log("Error ", error);
            }
          );
      // if(this.coche.cmbs === 1){this.coche.cmbsName = environment.Combustible.id[1]}
  }


}
