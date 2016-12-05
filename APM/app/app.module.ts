import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent }  from './home/welcome.component';
import { ProductModule }  from './products/product.module';

@NgModule({
  // Imports: array pulling in external modules.
  imports: [ 
    BrowserModule,
    HttpModule,
    // For HTML 5 styled routes - routing must be enabled on your server.
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent },
      {path: '', redirectTo: 'welcome', pathMatch: 'full' },
      {path: '**', redirectTo: 'welcome', pathMatch: 'full' }
      //{path: '**', component: PageNotFoundComponent }
    ]),
    // For Hash styled routes.
    //RouterModule.forRoot([], { useHash: true })
    ProductModule
  ],
  // Declarations array: directives, componets & pipes that belong to this module.
  declarations: [ 
    AppComponent,
    WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
