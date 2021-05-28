import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {CadastroService} from '../cadastro.service'
import {Posts} from '../usuario'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  posts: Posts ={
    numero:0,
    data:'',
    text:''
  }

  constructor(private cadastroService:CadastroService, private router:Router) { }

  ngOnInit(): void {
  }
  createPosts(): void{
    this.cadastroService.create(this.posts).subscribe(()=> this.cadastroService.showMessage('Produto Criado'))
    this.router.navigate(['list'])
  }
}
