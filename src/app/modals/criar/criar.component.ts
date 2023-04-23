import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.scss']
})
export class CriarComponent implements OnInit {

  nome: string = "";
  sobrenome: string = "";
  
  constructor(public dialogRef: MatDialogRef<CriarComponent>) { }

  ngOnInit(): void { 
  } 

  cancelarClick() { 
    this.dialogRef.close();
  }

  criarClick() { 
    console.log(this.nome);
    console.log(this.sobrenome);
  } 
}
