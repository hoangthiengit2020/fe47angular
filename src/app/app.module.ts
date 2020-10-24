import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//để sử dụng  two way binding[()] có thể ko cần import nhưng using riêng lẻ ()  []
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Baitap1Module } from './baitap1/baitap1.module';
import { Baitap2Module } from './baitap2/baitap2.module';

import { DemocomponentComponent } from './democomponent/democomponent.component';

import { StructuralDirectivesModule } from './structural-directives/structural-directives.module';
import { AttributeDirectivesModule } from './attribute-directives/attribute-directives.module';
import { Baitap6Module } from './baitap6/baitap6.module';
import { InteractionModule } from './interaction/interaction.module';
import { Baitap8Module } from './baitap8/baitap8.module';
// import { Baitap8Component } from './baitap8/baitap8.component';
// import { Baitap1Component } from './baitap1/baitap1.component';
// import { Baitap2Component } from './baitap2/baitap2.component';
//có nhiều loai module
//Module do angular cung cấp: FormModule,RouterModule,HttpModule
//Module do dev tự định nghĩa
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './main/main.module';
import { AdminModule } from './admin/admin.module';

import { AdminGuard } from './core/guard/admin.guard';
//method dùng cho backend import xong gắn vào import
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from 'src/app/core/interceptors/authentication.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//khi dùng RouteModule không cần phải export component thành phần
const routes: Routes = [
  // { path: 'baitap1', component: Baitap1Component },
  // { path: 'baitap2', component: Baitap2Component },
  // { path: 'baitap8', component: Baitap8Component },

  //khi dùng router load module, ko cần khai báo module dưới phần import
  //và vào từng module bài tạp 1,2, 8 khai báo

  { path: 'baitap1', loadChildren: () => Baitap1Module },
  { path: 'baitap2', loadChildren: () => Baitap2Module },
  { path: 'baitap8', loadChildren: () => Baitap8Module },
  // { path: '', loadChildren: () => MainModule },
  // { path: 'admin', loadChildren: () => AdminModule },
  //sử dụng lazyload
  {
    path: 'admin',
    //có thể kết hợp nhiều canActivate
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];

@NgModule({
  //Khai báo component sẽ được module quản lý
  declarations: [AppComponent],
  //Là nơi mình gắn các module khác vào
  //Khai báo các module sẽ được sử dụng
  //Ngoại trừ AppModule đã được import ở main.ts thì các module khác đều phải được import
  imports: [
    BrowserModule,
    //import routerModule để sử dụng route
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    // Baitap1Module,
    // Baitap2Module,
    // Baitap8Module,
    FormsModule,
    StructuralDirectivesModule,
    AttributeDirectivesModule,
    Baitap6Module,
    InteractionModule,
    BrowserAnimationsModule,
  ],
  //là nơi gắn các services vào
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
  //Khai báo để AppComponent là Component Chạy đầu tiên của module(chỉ gắn ở appmodule này, nơi khác không gắn)
  bootstrap: [AppComponent],
})
export class AppModule {}

// Tạo component, tạo module cùng tên
//1. import module được tạo vào app.module.ts
//2.export components ở  module đã tạo để
//3.gắn vào html là tên selector trong componnet.ts
