import { NgModule } from '@angular/core';

import { WidgetModule } from '@elipse/portal/widget';

import { Display } from './display.element';

@NgModule({
  imports: [WidgetModule],
  declarations: [Display],
  exports: [Display],
  bootstrap: [Display],
})
export class DisplayModule {
}