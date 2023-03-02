import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/model/categoria.model';

@Component({
  selector: 'app-tabela-artigos',
  templateUrl: './tabela-artigos.component.html',
  styleUrls: ['./tabela-artigos.component.css'],

})
export class TabelaArtigosComponent implements OnInit{
  @Input() categorias: Categoria[] = [];
  @Output() artigoSelecionado = new EventEmitter<string>();
  @Input() exibirTabela: boolean =false;

  constructor(private router: Router){
  
  }
  
abrirLink(link:string){
  window.open(link, '_blank')

}
selecionarArtigo(link: string){
  this.artigoSelecionado.emit(link)
}

  ngOnInit(){
    console.log("LOGG"+this.categorias)
  }


}
