import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { CriarComponent } from './criar/criar.component';
import { ListagemComponent } from './listagem/listagem.component';

const routes: Routes = [
  {
    path:'', component: ListagemComponent
  },
  {
    path:'criar', component: CriarComponent
  },
  {
    path:'editar/:id', component: AtualizarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
