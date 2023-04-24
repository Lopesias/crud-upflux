
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CriarComponent } from './modals/criar/criar.component';
import { DetalhesComponent } from './modals/detalhes/detalhes.component';
import { ExcluirComponent } from './modals/excluir/excluir.component';
import { Paciente } from './models/paciente';
import { PacienteService } from './services/Api/paciente.service';


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