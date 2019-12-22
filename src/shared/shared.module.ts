import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule,
  MatDividerModule, MatSelectModule, MatFormFieldModule, MatTableModule, MatInputModule,
  MatTabsModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatTabsModule
  ],
  exports: [
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule]
})
export class SharedModule { }
