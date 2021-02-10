import { Component, ElementRef, Renderer2, ViewChild, Inject } from '@angular/core';

import { AttributeId } from '@elipse/webapi-common';

import * as matCommon from '@elipse/material/common';

import * as common from '@elipse/portal/common';
import * as core from '@elipse/portal/core';
import * as widget from '@elipse/portal/widget';

@core.Element({
  icon: 'display.svg',
  themeUrls: ['./_display.element-theme.etc']
})
@Component({
  selector: 'elipse-display',
  templateUrl: './display.element.html',
  styleUrls: ['./display.element.scss'],
})
export class Display extends widget.WidgetElement  {

  isNullOrEmpty = matCommon.isNullOrEmpty;

  @core.Property({
    displayName: 'Title', groupName: core.PropertyGroupNames.Behavior,
    initialValue: new common.BindingNotation({ relativeSource: new common.OpcUaSubNotation({ attribute: AttributeId.DisplayName }), path: 'value' }),
  })
  title: string;

  @core.Property({
    displayName: 'Subtitle', groupName: core.PropertyGroupNames.Behavior,
    initialValue: new common.BindingNotation({ relativeSource: new common.OpcUaSubNotation({ attribute: AttributeId.Description }), path: 'value' }),
  })
  subtitle: string;

  @core.Property({
    displayName: 'Text', defaultValue: 'text', groupName: core.PropertyGroupNames.Behavior,
    initialValue: new common.BindingNotation({ relativeSource: new common.OpcUaSubNotation({ attribute: AttributeId.Value }), fallback: '?', path: 'value' }),
  })
  text: string;

  @core.Property({ displayName: 'Description', groupName: core.PropertyGroupNames.Behavior })
  description: string;
  
  @core.Property({
    displayName: 'Engineering Unit', groupName: core.PropertyGroupNames.Format,
    initialValue: new common.BindingNotation({ relativeSource: new common.OpcUaSubNotation({ path: '/EngineeringUnits', attribute: AttributeId.Value }), path: 'value.displayName' }),
  })
  unit: string;

  @core.Property({ displayName: 'Drill Down', groupName: core.PropertyGroupNames.Behavior, })
  drillDown: common.Link;

  private TitleHeight: number = 22;
  private SubtitleHeight: number = 21;
  private DescriptionHeight: number = 20;
  private Margin: number = 13;
  private UnitPadding: number = 10;

  private m_textFontSize: number = 20;
  private m_unitFontSize: number = this.m_textFontSize / 2;
  formatText: string;

  @ViewChild('textContent')
  m_textContent: ElementRef; 

  constructor(@Inject(core.ElementManagerToken) manager: any, private m_renderer: Renderer2) {
    super(manager);
  }

  protected on_loaded(): void {
    this.updateText();
  }

  protected on_initialize(data: widget.WidgetInitData): void {
    if (data.sources.length < 1)
      return;

    this.on_dropped(data.sources[0]);
  }

  protected on_dropped(data: any): boolean {
    this.datacontext = data;
    return true;
  }

  @core.PropertyChanged()
  private sizePropertyChanged(): void {
    this.updateText();
  }
  
  @core.PropertyChanged()
  private textPropertyChanged(): void {
    this.updateText();
  }

  @core.PropertyChanged()
  private titlePropertyChanged(): void {
    this.updateText();
  }

  @core.PropertyChanged()
  private subtitlePropertyChanged(): void {
    this.updateText();
  }

  @core.PropertyChanged()
  private descriptionPropertyChanged(): void {
    this.updateText();
  }

  private updateText(): void {

    if (typeof this.text === 'number' || <any>this.text instanceof Number)
      this.formatText = this.text.toLocaleString();
    else
      this.formatText = this.text;

    this.manager.detectChanges();
    this.fitFontSize();
  }

  private fitFontSize(): number {
    if (this.m_textContent.nativeElement.offsetWidth == 0)
      return;

    let headerAndFooter =
      (this.isNullOrEmpty(this.title) ? 0 : this.TitleHeight) + (this.isNullOrEmpty(this.subtitle) ? 0 : this.SubtitleHeight) + (this.isNullOrEmpty(this.description) ? 0 : this.DescriptionHeight) + this.Margin;

    this.m_textFontSize = 20;

    this.m_renderer.setStyle(this.m_textContent.nativeElement, 'text-overflow', 'unset');
    this.m_renderer.setStyle(this.m_textContent.nativeElement, 'overflow', 'unset');

    this.m_renderer.setStyle(this.m_textContent.nativeElement, 'font-size', this.m_textFontSize + 'pt');

    let unitWidth = this.isNullOrEmpty(this.unit) ? 0 : this.UnitPadding + (this.m_textContent.nativeElement.offsetWidth / 3);
    let totalWidth = this.m_textContent.nativeElement.offsetWidth + unitWidth;
    let totalHeight = this.m_textContent.nativeElement.offsetHeight;

    while (totalWidth < (this.size.width - this.Margin) * 0.98 && totalHeight < (this.size.height - headerAndFooter) * 0.98) {
      this.m_renderer.setStyle(this.m_textContent.nativeElement, 'font-size', this.m_textFontSize + 'pt');

      unitWidth = this.isNullOrEmpty(this.unit) ? 0 : this.UnitPadding + (this.m_textContent.nativeElement.offsetWidth / 3);
      totalWidth = this.m_textContent.nativeElement.offsetWidth + unitWidth;
      totalHeight = this.m_textContent.nativeElement.offsetHeight;

      this.m_textFontSize++;
    }

    if (totalWidth > (this.size.width - this.Margin)) {
      this.m_renderer.setStyle(this.m_textContent.nativeElement, 'text-overflow', 'ellipsis');
      this.m_renderer.setStyle(this.m_textContent.nativeElement, 'overflow', 'hidden');
    }
  }

  private get unitFontSize(): string {
    return this.m_textFontSize / 3 + 'pt';
  }
}