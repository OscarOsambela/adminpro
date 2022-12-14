import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription

  constructor() {
    this.retornaObservable()
      .pipe(retry())
      .subscribe(
        (valor) => console.log('subs', valor),
        (err) => console.warn('Error', err),
        () => console.info('Obs terminado')
      );
    this.intervalSubs = this.retornaIntervalo().subscribe((valor) => console.log(valor));
  }


  retornaIntervalo(): Observable<number> {
    const intervals = interval(500).pipe(
      take(10),
      map((valor) => {
        return valor + 1;
      }),
      filter((valor)=> valor % 2 === 0 ? true : false)
    );
    return intervals;
  }

  retornaObservable() {
    let i = -1;
    const obs$ = new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        // if(i === 2){
        //   clearInterval(intervalo)
        //   observer.error('llego al valor de 2')
        // }
      }, 1000);
    });
    return obs$;
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe()
  }
}
