import { Component, Inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import * as common from '@elipse/portal/common';
import * as core from '@elipse/portal/core';

@core.Element({
})
@Component({
  selector: 'website-viewer',
  templateUrl: './website-viewer.element.html',
  styleUrls: ['./website-viewer.element.scss'],
})
export class WebsiteViewer extends core.WidgetElement {

  @core.Property({
    displayName: 'Url', defaultValue: '', groupName: core.PropertyGroupNames.Behavior
  })
  url: string;

  constructor(private m_sanitizer: DomSanitizer, @Inject(common.ElementManagerToken) manager: any) {
    super(manager);
  }

  get sanitizedUrl(): SafeResourceUrl {
    return this.m_sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}