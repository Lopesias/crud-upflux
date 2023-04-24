import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/Api/paciente.service';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.scss']
})
export class CriarComponent {

  pacienteForm: Paciente = {
    id: 0,
    nome: '',
    email: ''
  };

  constructor(
    public dialogRef: MatDialogRef<CriarComponent>,
    private pacienteService: PacienteService
  ) { }

  create() {
    this.pacienteService.create(this.pacienteForm).subscribe(() => {
      this.dialogRef.close();
    });
  }

  cancel() {
    this.dialogRef.close();
  }
}
