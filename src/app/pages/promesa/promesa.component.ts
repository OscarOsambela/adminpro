import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styles: [],
})
export class PromesaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getUsuarios().then(usuarios =>{
      console.log(usuarios);

    });
  }
  getUsuarios() {
    return new Promise(resolve=>{
      fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then(body => resolve(body.data))
    })
  }
}
