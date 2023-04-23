
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CriarComponent } from './modals/criar/criar.component';
import { DetalhesComponent } from './modals/detalhes/detalhes.component';
import { ExcluirComponent } from './modals/excluir/excluir.component';
import { PacienteService } from './services/Api/paciente.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public Pacientes: any; 

  constructor(
    public dialog: MatDialog,
    public pacienteService: PacienteService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.pacienteService.getAll()
      .subscribe((result) => {
        this.Pacientes = result.Pacientes;
      }, (error) => {
        console.log(error);
      });
  }

  filter(value: string) { 
    return value ? this.Pacientes.filter((item: any) => item === value) : this.Pacientes;
  }

  openDialogCriar() {
    const dialogRef = this.dialog.open(CriarComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }

  openDialogDetalhes(): void {
    this.dialog.open(DetalhesComponent);
  }

  openDialogEditar(): void {
    this.dialog.open(CriarComponent, {
      data: {},
    });
  }

  openDialogExluir(): void {
    const dialogRef = this.dialog.open(ExcluirComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}