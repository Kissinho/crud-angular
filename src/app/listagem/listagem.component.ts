import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Crud } from '../crud';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.sass']
})
export class ListagemComponent implements OnInit {
  resposta!: Crud[]

  constructor(private servico: CrudService, private rota:Router) { }

  ngOnInit(): void {
    this.get()
  }

  get(){
    this.servico.get().subscribe(res=>{
       this.resposta= res
      
      }
    )
}

excluir(id:number){
  let confirma =confirm("Tem certeza que deseja excluir este item?")
  if(confirma==true){

    this.servico.delete(id).subscribe(resultado =>{
      this.get()
    })
  }
}
}
