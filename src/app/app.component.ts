import { Component } from '@angular/core';
import { Categoria } from 'src/model/categoria.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coba-blog';
  exibirTabela = false;



categorias: Categoria[]= [
  {
    id:1,
    nome:'DevOps',
    artigos: [
      {nome: 'Pilares do Devops', link: 'https://medium.com/@caiocobacho/devops-o-impacto-os-riscos-e-seus-benef%C3%ADcios-220abe4ca341'}
    ]
  },
  {
    id:2,
    nome:'Backend',
    artigos: [
      {nome: 'Java', link: ''}
    ]
  },

]

toggleTabela(){
  this.exibirTabela = !this.exibirTabela;
}

  mostrarTabela(event:boolean){
    this.exibirTabela = event;
  }

}
