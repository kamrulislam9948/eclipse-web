import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/eclipse/webpage/common/navbar/navbar.component';
import { HomeComponent } from './components/eclipse/webpage/common/home/home.component';
import { ProductListComponent } from './components/eclipse/webpages/product/product-list/product-list.component';
import { ProductDetailsComponent } from './components/eclipse/webpages/product/product-details/product-details.component';
import { ShopListComponent } from './components/eclipse/webpages/shop/shop-list/shop-list.component';
import { ContactListComponent } from './components/eclipse/webpages/contact/contact-list/contact-list.component';
import { BlogListComponent } from './components/eclipse/webpages/blog/blog-list/blog-list.component';
import { AboutListComponent } from './components/eclipse/webpages/about/about-list/about-list.component';
import { BlogDetailComponent } from './components/eclipse/webpages/blog/blog-detail/blog-detail.component';
import { ShoppingCartComponent } from './components/eclipse/webpages/cart/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ShopListComponent,
    ContactListComponent,
    BlogListComponent,
    AboutListComponent,
    BlogDetailComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
