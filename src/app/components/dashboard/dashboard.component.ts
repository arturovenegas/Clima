import { ClimaService } from './../../services/clima.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  urlImagen = 'https://play-lh.googleusercontent.com/27zin053qNNaRGnnUtoR2EtX1Iw1ti6RrqgMilDYDBLbxjE3cyf61X9n9Gzg3_r7DSs'
  ciudad ='';
  temperatura = 0;
  humedad = 0;
  clima = '';
  query = false;
  loading = false;
  mostrarError = false;
 
  constructor(private _climaService: ClimaService) {
   }

  ngOnInit(): void {
  }

  obtenerClima(){
    this.query=false;
    this.loading = true;

    this._climaService.getClima(this.ciudad).subscribe(data => {
      this.loading = false;
      this.query = true;
      this.temperatura = data.main.temp - 273
      this.humedad = data.main.humidity
      this.clima = data.weather[0].main
    }, error =>{
      this.loading = false;
      this.error();
    })
    
  }
  error(){
    this.mostrarError = true;
    setTimeout(() => {
      this.mostrarError = false;
      this.ciudad = '';
    }, 3000);
  }

}
