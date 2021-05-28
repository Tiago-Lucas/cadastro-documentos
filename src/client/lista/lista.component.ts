import { Router } from '@angular/router';
import { CadastroService } from 'src/client/cadastro.service';
import { Component, OnInit } from '@angular/core';
import {Posts} from '../usuario'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  posts: Posts[] = [];
  displayedColumns=['id','numero','data','text','action']

  constructor(private cadastroService:CadastroService, private router:Router) { }

  ngOnInit(): void {
    this.cadastroService.read().subscribe(posts => {
      this.posts = posts
      console.log(posts)
    })
}
navigatorToPostCreate():void{
  this.router.navigate(['/list/create'])
}

}


