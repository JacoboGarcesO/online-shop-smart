import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateGuard } from './private.guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ],
  providers: [PrivateGuard]
})
export class PrivateModule { }
