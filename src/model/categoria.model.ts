import { Artigo } from "./artigo.model";

export interface Categoria{
    id:number;
    nome:string;
    artigos: {nome:string;link:string} []
}