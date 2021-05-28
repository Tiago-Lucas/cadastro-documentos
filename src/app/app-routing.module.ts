import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from 'src/client/cadastro/cadastro.component';
import { ListaComponent } from 'src/client/lista/lista.component';
import {CreateComponent} from 'src/client/create/create.component'
import {UpdateComponent} from 'src/client/update/update.component'
import {DeleteComponent} from 'src/client/delete/delete.component'



const routes: Routes = [
  {path:'', component:CadastroComponent},
  {path:'list',component:ListaComponent},
  {path:'list/create',component:CreateComponent},
  {path:'list/update',component:UpdateComponent},
  {path:'list/delete',component:DeleteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
