
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CriarComponent } from './modals/criar/criar.component';
import { DetalhesComponent } from './modals/detalhes/detalhes.component';
import { ExcluirComponent } from './modals/excluir/excluir.component';
import { Paciente } from './models/paciente';
import { PacienteService } from './services/Api/paciente.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  Allpacientes: Paciente[] = [];
  displayedColumns: string[] = ['id', 'nome', 'email', 'acoes'];
  dataSource = new MatTableDataSource(this.Allpacientes);

  constructor(
    public dialog: MatDialog,
    public pacienteService: PacienteService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.pacienteService.getAll().subscribe((data) => {
      this.dataSource.data = data;
    });
  }


  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogCriar() {
    const dialogRef = this.dialog.open(CriarComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.openSnackBar("Operação realizada com sucesso!", "", "success-snackbar");
    });
  }

  openDialogDetalhes(id: string): void {
    this.dialog.open(DetalhesComponent, {
      data: id,
    });
  }

  openDialogEditar(paciente: Paciente): void {
    const dialogRef = this.dialog.open(CriarComponent, {
      data: paciente,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.openSnackBar("Operação realizada com sucesso!", "", "success-snackbar");
    });
  }

  openDialogExluir(paciente: Paciente): void {
    debugger
    const dialogRef = this.dialog.open(ExcluirComponent, {
      width: '250px',
      data: paciente,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.openSnackBar("Operação realizada com sucesso!", "", "success-snackbar");
    });
  }

  openSnackBar(message: string, action: string, className: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: "end",
      verticalPosition: "bottom",
      duration: 1000,
      panelClass: [className]
    });
    this.getData();
  }

}