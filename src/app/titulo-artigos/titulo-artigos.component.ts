import { Component } from '@angular/core';

@Component({
  selector: 'app-titulo-artigos',
  templateUrl: './titulo-artigos.component.html',
  styleUrls: ['./titulo-artigos.component.css']
})
export class TituloArtigosComponent {

  artigos = [
    {titulo:'DevOps', link:'https://medium.com/@caiocobacho/devops-o-impacto-os-riscos-e-seus-benef%C3%ADcios-220abe4ca341'}
  ]

  abrirArtigos(artigo:any){
    window.open(artigo.link, "")
  }

}
