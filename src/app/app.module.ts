import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogInterceptor } from './interceptors/log.interceptor';
import { HeaderInterceptor } from './interceptors/header.interceptor';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true }, // ilk çalışacak olan interceptor
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true } // ikinci olarak çalışacak olan interceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
