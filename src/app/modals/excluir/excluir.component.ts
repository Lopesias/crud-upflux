
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PacienteService } from 'src/app/services/Api/paciente.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent {

  constructor(
    public dialogRef: MatDialogRef<ExcluirComponent>,
    private pacienteService: PacienteService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  confirmDelete() {
    this.pacienteService.delete(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }

}
