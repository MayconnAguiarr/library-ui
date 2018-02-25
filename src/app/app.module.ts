import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{DataTableModule} from 'primeng/primeng';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';
import { LivroService } from './livro.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CadastroLivroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTableModule
  ],
  providers: [
    LivroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
