import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { NgToastModule } from 'ng-angular-popup'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ProductDetailsComponent } from './product-details/product-details.component';
//import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { MatListModule } from '@angular/material/list';
// import { MatMenuModule, MatToolbarModule } from '@angular/material';
import { ProductcreationComponent } from './productcreation/productcreation.component';
import { MaterialExampleModule } from 'src/materialmodel';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddcategoryComponent } from './components/addCategory/addcategory/addcategory.component';
import { AddbrandComponent } from './components/addbrand/addbrand/addbrand.component';
import { MatSidenavModule } from '@angular/material';
//import { MatTableModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,

    DashboardComponent,
    ProductDetailsComponent,
   
    ProductcreationComponent,
    ProductlistComponent,
    AddcategoryComponent,
    AddbrandComponent,
   

  ],
  imports: [
    NgToastModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialExampleModule,
    BrowserAnimationsModule,
    MatSidenavModule,

    FormsModule
    // MatToolbarModule,
    // MatMenuModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  // entryComponents: [ProductcreationComponent]
})
export class AppModule { }
