import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
})
export class PromesasComponent implements OnInit{

  ngOnInit(): void {

    this.getUsuraios().then( usuarios => {
      console.log(usuarios);
    })

  }

  getUsuraios() {

    return new Promise( resolve => {

      fetch('https://reqres.in/api/users')
      .then( resp => resp.json() )
      .then( body => console.log( body.data ))

    });

  }


}
