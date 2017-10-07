import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { BuscarComponent } from './buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    CadastrarComponent,
    BuscarComponent,

  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
