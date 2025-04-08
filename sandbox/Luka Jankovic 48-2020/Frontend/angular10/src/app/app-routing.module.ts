import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZaposleniComponent } from './zaposleni/zaposleni.component';
import { OdeljenjeComponent } from './odeljenje/odeljenje.component';

const routes: Routes = [
  {path:'zaposleni',component:ZaposleniComponent},
  {path:'odeljenja',component:OdeljenjeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
