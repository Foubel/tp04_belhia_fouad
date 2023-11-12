import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { RechercheProduitsComponent } from './recherche-produits/recherche-produits.component';
import { NgxsModule } from '@ngxs/store';
import { CartState } from './panier/panier.state';
import { TetiereComponent } from './tetiere/tetiere.component';
import { PanierModule } from './panier/panier.module';


@NgModule({
  declarations: [
    AppComponent,
    ListeProduitsComponent,
    RechercheProduitsComponent,
    TetiereComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([CartState]),
    PanierModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
