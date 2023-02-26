import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "João";
  dataNascimento = "1981-01-01";
  urlImagem = "/assets/Caramell Dog.PNG";

  mostrarDataNascimento(){
    alert(`A data de nascimento do ${this.nome} é: ${this.dataNascimento}`);
  }
}
