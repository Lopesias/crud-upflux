import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    private pacienteService: PacienteService,
    @Inject(MAT_DIALOG_DATA) public data: Paciente,
  ) { }

  ngOnInit(): void {
    if (this.data)
      this.pacienteForm = this.data;
  }

  create() {
    this.pacienteService.create(this.pacienteForm).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  update() {
    this.pacienteService.update(this.pacienteForm).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  cancel() {
    this.dialogRef.close();
  }
}
