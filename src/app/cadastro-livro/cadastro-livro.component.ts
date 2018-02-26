import { Component, OnInit } from '@angular/core';
import{FormControl} from '@angular/forms';

import { LivroService } from '../livro.service';

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.component.html',
  styleUrls: ['./cadastro-livro.component.css']
})
export class CadastroLivroComponent implements OnInit {

  itens =[];

  constructor(private livroService: LivroService) {
    
  } 

  ngOnInit() {
    this.consultar();
  }

  consultar(){
    this.livroService.listar().subscribe(dados => this.itens = dados);
  }

  adiconar(frm: FormControl){
    console.log(frm.value);

    this.livroService.adicionar(frm.value).subscribe(() =>{
      frm.reset();
      this.consultar();

    });
  }

}
