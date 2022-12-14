import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  progreso0: number = 15
  progreso1: number = 25
  progreso2: number = 35

  getProgreso0(){
    return `${this.progreso0}%`
  }

  getProgreso1(){
    return `${this.progreso1}%`
  }

  getProgreso2(){
    return `${this.progreso2}%`
  }


}
