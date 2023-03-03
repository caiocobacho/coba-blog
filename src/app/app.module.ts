import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BotaoArtigosComponent } from './botao-artigos/botao-artigos.component';
import { TituloArtigosComponent } from './titulo-artigos/titulo-artigos.component';
import { TabelaArtigosComponent } from './tabela-artigos/tabela-artigos.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoArtigosComponent,
    TituloArtigosComponent,
    TabelaArtigosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
