
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CadastroComponent } from '../client/cadastro/cadastro.component';
import { ListaComponent } from 'src/client/lista/lista.component';
import { CadastroService } from 'src/client/cadastro.service';
import {AppRoutingModule} from 'src/app/app-routing.module'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule} from '@angular/material/card';
import {FormsModule}from'@angular/forms'
import { MatFormFieldModule}from'@angular/material/form-field'
import {MatInputModule}from'@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { CreateComponent } from '../client/create/create.component';
import { UpdateComponent } from '../client/update/update.component';
import { DeleteComponent } from '../client/delete/delete.component'
import {MatTableModule}from '@angular/material/table'



@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListaComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
