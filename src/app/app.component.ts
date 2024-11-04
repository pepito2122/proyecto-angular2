import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  
//ngAfterViewInit(): void {
  //console.log ("han sido inicializadas las vistas del componente y las vistas de los hijos")
//}
  
isDestroyed: boolean = true 

countDown : number;
intervaliD: any

constructor() {
  this.countDown = 10;
  this.intervaliD = setInterval(()=>{
   this.countDown--;
   if(this.countDown ===0){
     clearInterval(this.intervaliD)
     this.isDestroyed = false
   }
  },1000) 
} 
 


}
