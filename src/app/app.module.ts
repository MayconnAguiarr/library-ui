import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
