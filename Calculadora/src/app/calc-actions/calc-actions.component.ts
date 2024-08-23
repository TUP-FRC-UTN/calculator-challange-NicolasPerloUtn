import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalcViewComponent } from "../calc-view/calc-view.component";

@Component({
  selector: 'app-calc-actions',
  standalone: true,
  imports: [CalcViewComponent],
  templateUrl: './calc-actions.component.html',
  styleUrl: './calc-actions.component.css'
})
export class CalcActionsComponent {
  @Input() valorRecibido : Array<number> = [];
  @Input() operacion : string = "";
  @Output() selected = new EventEmitter<number>();

  resultado : number = 0;

  calcular(operacion : string) { // el calcular reacciona al click
    this.selected.emit() //con esto emito y recibo los resultados
    
    if (operacion == "+") {
      this.resultado = Number(this.valorRecibido[0]) + Number(this.valorRecibido[1])
    }
    else if (operacion == "-") {
      this.resultado = Number(this.valorRecibido[0]) - Number(this.valorRecibido[1])
    }
    else if (operacion == "X") {
      this.resultado = Number(this.valorRecibido[0]) * Number(this.valorRecibido[1])
    }
    else if (operacion == "%") {
      this.resultado = Number(this.valorRecibido[0]) / Number(this.valorRecibido[1])
    }
    else if (operacion == "^") {
      this.resultado = Math.pow(Number(this.valorRecibido[0]), Number(this.valorRecibido[1]))
    }
    // else if (operacion == "raiz") {
    //   this.resultado = Math.pow(Number(this.valorRecibido[0]), 1 / Number(this.valorRecibido[1]))
    // }
    else if (operacion == "CE") {
      this.resultado == 0
    }
    console.log(this.resultado)
    
    this.selected.emit(this.resultado) // mando el resultado
  }
}
