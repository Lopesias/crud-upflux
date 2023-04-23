
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalhesComponent } from './modals/detalhes/detalhes.component';
import { ExcluirComponent } from './modals/excluir/excluir.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CriarComponent } from './modals/criar/criar.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalhesComponent,
    ExcluirComponent,
    CriarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatDialogModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
