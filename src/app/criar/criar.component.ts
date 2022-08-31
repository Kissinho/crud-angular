import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Crud } from '../crud';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.sass']
})
export class CriarComponent implements OnInit {

  requisicao: Crud = {
    "fabricante": '',
    "modelo": '',
    "id": 0,
    "preco": 0
  }

  constructor(private rota:Router, private servico: CrudService) { }

  ngOnInit(): void {
    
  }
  cancelar(){
    this.rota.navigate([""])
  }
  post(){
    this.servico.post(this.requisicao).subscribe(()=>{
      alert("Produto criado com sucesso!")
      this.rota.navigate([""])
    })
  }
  
}
