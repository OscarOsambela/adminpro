import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component implements OnInit {
  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
  public data1 = [10, 15, 40];

  public labels2: string[] = ['Pan', 'Refresco', 'Tacos'];
  public data2 = [35, 80, 170];

  public labels3: string[] = ['Pan', 'Refresco', 'Tacos'];
  public data3 = [20, 15, 140];

  public labels4: string[] = ['Pan', 'Refresco', 'Tacos'];
  public data4 = [60, 45, 40];

  constructor() {}

  ngOnInit(): void {}
}
