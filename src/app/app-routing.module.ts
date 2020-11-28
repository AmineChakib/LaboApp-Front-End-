import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipesComponent } from './equipes/equipes.component';
import { LoginComponent } from './login/login.component';
import { CreateRapportComponent } from './rapports/create-rapport/create-rapport.component';
import { RapportComponent } from './rapports/rapport/rapport.component';
import { UpdateRapportComponent } from './rapports/update-rapport/update-rapport.component';
import { CreateTheseSoutenuComponent } from './these-soutenu/create-these-soutenu/create-these-soutenu.component';
import { TheseSoutenuComponent } from './these-soutenu/these-soutenu.component';
import { UpdateTheseSoutenuComponent } from './these-soutenu/update-these-soutenu/update-these-soutenu.component';
import { CreateTheseComponent } from './these/create-these/create-these.component';
import { TheseComponent } from './these/these.component';
import { UpdateTheseComponent } from './these/update-these/update-these.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "", component: LoginComponent},

  {path: "users", component: UsersComponent},
  {path: "create-user", component: CreateUserComponent},
  {path: "update-user/:id", component: UpdateUserComponent},

  {path: "equipes", component: EquipesComponent},

  {path: "rapports", component: RapportComponent},
  {path: "create-rapport", component: CreateRapportComponent},
  {path: "update-rapport/:id", component: UpdateRapportComponent},

  {path: "theses", component: TheseComponent},
  {path: "create-these", component: CreateTheseComponent},
  {path: "update-these/:id", component: UpdateTheseComponent},

  {path: "theseSoutenus", component: TheseSoutenuComponent},
  {path: "create-theseSoutenu", component: CreateTheseSoutenuComponent},
  {path: "update-theseSoutenu/:id", component: UpdateTheseSoutenuComponent},

  /*{ path: '',   redirectTo: '/first-component', pathMatch: 'full' },*/
  /*{ path: "**", component: PageNotFoundCompo }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UsersComponent, EquipesComponent]
