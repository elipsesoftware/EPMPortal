import { NgModule } from '@angular/core';

import { WidgetModule } from '@elipse/portal/widget';

import { WebsiteViewer } from './website-viewer.element';

@NgModule({
  imports: [WidgetModule],
  declarations: [WebsiteViewer],
  bootstrap: [WebsiteViewer],
})
export class ElementModule {
}