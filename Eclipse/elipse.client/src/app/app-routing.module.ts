import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/eclipse/webpage/common/home/home.component';
import { NavbarComponent } from './components/eclipse/webpage/common/navbar/navbar.component';
import { AboutListComponent } from './components/eclipse/webpages/about/about-list/about-list.component';
import { BlogListComponent } from './components/eclipse/webpages/blog/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/eclipse/webpages/blog/blog-detail/blog-detail.component';
import { ContactListComponent } from './components/eclipse/webpages/contact/contact-list/contact-list.component';
import { ShopListComponent } from './components/eclipse/webpages/shop/shop-list/shop-list.component';
import { ShoppingCartComponent } from './components/eclipse/webpages/cart/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './components/eclipse/webpages/product/product-list/product-list.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'eclipse'},

  {path: 'eclipse',component: NavbarComponent, children: [

    {path: '',component: HomeComponent},
    {path: 'home',component: HomeComponent},
    {path: 'about',component: AboutListComponent},
    {path: 'blog-list',component: BlogListComponent},
    {path: 'blog-details',component: BlogDetailComponent},
    {path: 'contact',component: ContactListComponent},
    {path: 'product',component: ProductListComponent},
    {path: 'product-details',component: ProductListComponent},
    {path: 'cart',component: ShoppingCartComponent},

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
