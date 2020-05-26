import { NgModule, PipeTransform }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { ProductComponent } from './product.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './service/http.service';


@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule ],
    declarations: [ AppComponent, ProductComponent ],
    providers:    [ HttpService ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }