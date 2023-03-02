import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botao-artigos',
  templateUrl: './botao-artigos.component.html',
  styleUrls: ['./botao-artigos.component.css']
})
export class BotaoArtigosComponent {


 
  exibirTabela =false;

  @Output() exibirTabelaEvent = new EventEmitter<boolean>();

  categorias = [  {    nome: 'DevOps',    artigos: [      {nome: 'Artigo 1', link: 'https://medium.com/@caiocobacho/devops-o-impacto-os-riscos-e-seus-benef%C3%ADcios-220abe4ca341'},      {nome: 'Artigo 2', link: 'https://medium.com/@caiocobacho/devops-o-impacto-os-riscos-e-seus-benef%C3%ADcios-220abe4ca341'}    ]
  },
  {
    nome: 'Frontend',
    artigos: [
      {nome: 'Artigo 1', link: ''}
    ]
  },
  {
    nome: 'Backend',
    artigos: [
      {nome: 'Artigo 1', link: ''}
    ]
  }
];




  mostrarTabela(){
    
    this.exibirTabelaEvent.emit(this.exibirTabela)
  }

}
