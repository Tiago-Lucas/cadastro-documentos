import { CadastroService } from 'src/client/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Posts} from '../usuario'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  posts: Posts ={
    numero:0,
    data:'',
    text:''
  }

  constructor(private cadastroService:CadastroService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.cadastroService.readById(parseInt(id)).subscribe(posts => {
        this.posts = posts;
      })

  }
  }
  deletePosts():void{
    if(this.posts.id)
    this.cadastroService.delete(this.posts.id).subscribe(()=>{
      this.cadastroService.showMessage('Veículo Excluido com Sucesso')
      this.router.navigate(['/products'])
    })
  }
}
