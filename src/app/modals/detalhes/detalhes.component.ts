import { Component, OnInit } from "@angular/core"; 
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DetalhesComponent>) { }

  ngOnInit(): void {
  }

}
