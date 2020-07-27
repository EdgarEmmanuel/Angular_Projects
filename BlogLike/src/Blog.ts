import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

export class Blog{
    Nom : String ;
    Date : String ;
    Country : String ;

    constructor(_nom:String , _Date:String , _country:String){
        this.Nom=_nom;
        this.Date=_Date;
        this.Country=_country;
    }
}