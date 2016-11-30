import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent }  from './home/welcome.component';

import { ProductListComponent }  from './products/product-list.component';
import { ProductDetailGuard }  from './products/product-guard.service';
import { ProductDetailComponent }  from './products/product-detail.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  // Imports: array pulling in external modules.
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    // For HTML 5 styled routes - routing must be enabled on your server.
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent },
      {path: 'product/:id', 
        canActivate: [ ProductDetailGuard ], 
        component: ProductDetailComponent },
      {path: 'welcome', component: WelcomeComponent },
      {path: '', redirectTo: 'welcome', pathMatch: 'full' },
      {path: '**', redirectTo: 'welcome', pathMatch: 'full' }
      //{path: '**', component: PageNotFoundComponent }
    ])
    // For Hash styled routes.
    //RouterModule.forRoot([], { useHash: true })
  ],
  // Declarations array: directives, componets & pipes that belong to this module.
  declarations: [ 
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,
    StarComponent
  ],
  // Providers array...
  providers: [
    ProductDetailGuard
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
