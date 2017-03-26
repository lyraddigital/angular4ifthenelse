import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SimpleIfComponent } from './simple-if/simple-if.component';
import { SimpleIfThenComponent } from './simple-if-then/simple-if-then.component';
import { SimpleIfThenNonInlinedComponent } from './simple-if-then-non-inlined/simple-if-then-non-inlined.component';

@NgModule({
  declarations: [
    AppComponent, 
    SimpleIfComponent,
    SimpleIfThenComponent,
    SimpleIfThenNonInlinedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot([
      {
        path: 'simple-if',
        component: SimpleIfComponent
      },
      {
        path: 'simple-if-then',
        component: SimpleIfThenComponent
      },
      {
        path: 'simple-if-then-inlined', 
        component: SimpleIfThenNonInlinedComponent
      },
      {
        path: '**',
        component: SimpleIfComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
