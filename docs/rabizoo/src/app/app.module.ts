import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"


import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/general/header/header.component';
import { NavigationComponent } from './comps/general/navigation/navigation.component';
import { PaginatorComponent } from './comps/general/paginator/paginator.component';
import { FooterComponent } from './comps/general/footer/footer.component';
import { FishPanelComponent } from './comps/panels/fish-panel/fish-panel.component';
import { BirdPanelComponent } from './comps/panels/bird-panel/bird-panel.component';
import { BeastPanelComponent } from './comps/panels/beast-panel/beast-panel.component';
import { FishCardComponent } from './comps/cards/fish-card/fish-card.component';
import { BeastCardComponent } from './comps/cards/beast-card/beast-card.component';
import { BirdCardComponent } from './comps/cards/bird-card/bird-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    PaginatorComponent,
    FooterComponent,
    FishPanelComponent,
    BirdPanelComponent,
    BeastPanelComponent,
    FishCardComponent,
    BeastCardComponent,
    BirdCardComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
