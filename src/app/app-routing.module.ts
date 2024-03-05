import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductcreationComponent } from './productcreation/productcreation.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddcategoryComponent } from './components/addCategory/addcategory/addcategory.component';
import { AddbrandComponent } from './components/addbrand/addbrand/addbrand.component';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent},//canActivate:[AuthGuard]},
  {path:'details/:productlist', component: ProductDetailsComponent},
  {path:'productcreation', component: ProductcreationComponent},
  {path:'productdetaillist', component: ProductlistComponent},
  {path:'AddCategory', component: AddcategoryComponent},
  {path:'AddBrand', component: AddbrandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
