import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Paciente } from "src/app/models/paciente";
import { PacienteService } from "src/app/services/Api/paciente.service";

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  paciente: Paciente = {
    id: 0,
    nome: '',
    email: ''
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public id: string,
    public dialogRef: MatDialogRef<DetalhesComponent>,
    private pacienteService: PacienteService
  ) { }

  ngOnInit(): void {
    this.getById();
  }

  getById() {
    this.pacienteService.get(this.id).subscribe((result) => {
      this.paciente = result;
    });
  }
}
