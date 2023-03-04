import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-sevicos1',
  templateUrl: './exemplo-sevicos1.component.html',
  styleUrls: ['./exemplo-sevicos1.component.css']
})
export class ExemploSevicos1Component {
  nome="";


  constructor(private logger: LoggerService){}

  adicionarNome(){
    this.logger.logar(`O nome ${this.nome} foi adicionado!`);
  }
}
