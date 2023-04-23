 
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ExcluirComponent>) { }

  ngOnInit(): void {
  }

}
