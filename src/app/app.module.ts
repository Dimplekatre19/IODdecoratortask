import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TododasboardComponent } from './shared/component/tododasboard/tododasboard.component';
import { TodolistComponent } from './shared/component/todolist/todolist.component';
import { TodoformComponent } from './shared/component/todoform/todoform.component';
import { FormsModule } from '@angular/forms';
import { StdDashboardComponent } from './shared/component/std-dashboard/std-dashboard.component';
import { StdtableComponent } from './shared/component/stdtable/stdtable.component';
import { StdformComponent } from './shared/component/stdform/stdform.component';

@NgModule({
  declarations: [
    AppComponent,
    TododasboardComponent,
    TodolistComponent,
    TodoformComponent,
    StdDashboardComponent,
    StdtableComponent,
    StdformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
