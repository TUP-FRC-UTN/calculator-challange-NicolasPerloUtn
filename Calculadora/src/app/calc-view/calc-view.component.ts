import { Component, EventEmitter, Output } from '@angular/core';
import { CalcActionsComponent } from "../calc-actions/calc-actions.component";

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalcActionsComponent],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css'
})
export class CalcViewComponent {
  resultado : number = 0;
  valorPrimerInput : number = 0;
  valorsegundoInput : number = 0;
  valores : Array<number> = [];

  @Output() selected = new EventEmitter<Array<number>>();

  primerValor(event : any) {
    this.valorPrimerInput = event.target.value;
  }

  segundoValor(event : any) {
    this.valorsegundoInput = event.target.value
  }
  
  // el mandar se estaria ejecutando cuando escucha al select, es decir cuando se hace click en algun boton de las operaciones
  mandar(selected : number) {
    this.valores.push(this.valorPrimerInput) // meto en la lista los valores de los input y los mando
    this.valores.push(this.valorsegundoInput)
    this.selected.emit(this.valores) // los mando
    this.resultado = selected // los vuelvo a recibir
    if (selected == 0 ) {
      this.valorPrimerInput = 0
      this.valorPrimerInput = 0
    }
    console.log(this.valores)
  }
}
