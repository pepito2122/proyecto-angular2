import { Component, OnDestroy, OnInit } from "@angular/core";


@Component({
    selector: 'app-addTask',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'] 
})


export class Addcomponent implements OnDestroy{


//constructor (){
    //console.log("creandose desde el comtructor")
// }

//ngOnInit(): void {
    //console.log("creandose desde el ng on Init")  
//}
    

    
//}

ngOnDestroy(): void {
    console.log("el componente add ha sido destruido")
}



}