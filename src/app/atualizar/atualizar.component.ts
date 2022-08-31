import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crud } from '../crud';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.sass']
})
export class AtualizarComponent implements OnInit {

  constructor(private rota:Router, private pegaRota: ActivatedRoute, private servico: CrudService) { }
  
  id!: string
  requisicao!: Crud 
  ngOnInit(): void {
    this.id = this.pegaRota.snapshot.paramMap.get("id")!
    this.servico.getPorID(this.id!).subscribe( res=>{
     this.requisicao = res
      
    })
  }
  cancelar(){
    this.rota.navigate([""])
  }
  editar(){
    this.servico.update(this.id, this.requisicao).subscribe(()=>{
      alert("Produto alterado com sucesso!")
      this.rota.navigate([''])
    })
  }

}
