import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonmaterialComponent } from "./buttonmaterial/buttonmaterial.component";
import { MaterialModule } from "../app/material/material.module";
import { TypographyComponent } from './typography/typography.component';

@NgModule({
  declarations: [AppComponent, ButtonmaterialComponent, TypographyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
