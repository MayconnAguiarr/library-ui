import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.component.html',
  styleUrls: ['./cadastro-livro.component.css']
})
export class CadastroLivroComponent implements OnInit {

  itensConsulta = [
    {autor:'Oliveira Lima', titulo: ' O Movimento da Independência - 1821- 1822', categoria: '5'},
    {autor:'Oliveira Lima', titulo: ' O Movimento da Independência - 1821- 1822', categoria: '5'},
    {autor:'Oliveira Lima', titulo: ' O Movimento da Independência - 1821- 1822', categoria: '5'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
