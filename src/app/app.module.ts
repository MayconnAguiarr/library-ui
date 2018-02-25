import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{DataTableModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CadastroLivroComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
