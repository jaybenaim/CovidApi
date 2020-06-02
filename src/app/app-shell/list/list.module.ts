﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { FormComponent } from './form/form.component';
import { ListItemComponent } from './list-item/list-item.component';
import { WarningMessageModule } from '../../shared/warning-message/warning-message.module';

@NgModule({
  declarations: [ListComponent, FormComponent, ListItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAlertModule,
    WarningMessageModule,
    ListRoutingModule
  ]
})
export class ListModule { }
