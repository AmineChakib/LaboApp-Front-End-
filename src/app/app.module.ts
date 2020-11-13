import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { RapportComponent } from './rapports/rapport/rapport.component';
import { CreateRapportComponent } from './rapports/create-rapport/create-rapport.component';
import { TheseSoutenuComponent } from './these-soutenu/these-soutenu.component';
import { TheseComponent } from './these/these.component';
import { CreateTheseComponent } from './these/create-these/create-these.component';
import { UpdateTheseComponent } from './these/update-these/update-these.component';
import { CreateTheseSoutenuComponent } from './these-soutenu/create-these-soutenu/create-these-soutenu.component';
import { UpdateTheseSoutenuComponent } from './these-soutenu/update-these-soutenu/update-these-soutenu.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CreateUserComponent,
    UpdateUserComponent,
    RapportComponent,
    CreateRapportComponent,
    TheseSoutenuComponent,
    TheseComponent,
    CreateTheseComponent,
    UpdateTheseComponent,
    CreateTheseSoutenuComponent,
    UpdateTheseSoutenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
