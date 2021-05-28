import { CadastroService } from 'src/client/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Posts} from '../usuario'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  posts: Posts ={
    numero:0,
    data:'',
    text:''
  }

  constructor(private cadastroService:CadastroService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(id){
    this.cadastroService.readById(parseInt(id)).subscribe(posts =>{
      this.posts = posts;
    })
  }
  }
  updatePosts():void{
    this.cadastroService.update(this.posts).subscribe(()=>{
      this.cadastroService.showMessage('Veículo Atualizado com Sucesso')
      this.router.navigate(["list"])
    })
  }

}
