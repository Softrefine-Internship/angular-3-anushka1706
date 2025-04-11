import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { TrimDirective } from './directives/trim/trim.directive';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TrimDirective,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
