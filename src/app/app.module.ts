import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppServiceService } from './app-service.service';
import { CardService } from './cards/card.service';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { StatusComponent } from './status/status.component';
import { CardsComponent } from './cards/cards.component';
@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PdfViewerModule,
    NgCircleProgressModule.forRoot(),
    RouterModule.forRoot([{
      path: "",
      redirectTo: "cards",
      pathMatch: 'full' 
    },
    {
      path: 'status',
      component: StatusComponent
    },
    {
      path: 'cards',
      component: CardsComponent
    },
    {
      path: '**',
      redirectTo: '',
      pathMatch: 'full' 
    }
  ])
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy,}, AppServiceService, CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
