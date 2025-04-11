import {
  Directive,
  Input,
  HostListener,
  ViewContainerRef,
  TemplateRef,
  EmbeddedViewRef,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input() originalText!: string 
  @Input() colorInput!: string
  @Input() fontSize!: string
  @Input() position!: string 
  @Input('appTooltip') tooltipTemplate!: TemplateRef<any>;

  private viewRef: EmbeddedViewRef<any> | null = null;

  constructor(private vcr: ViewContainerRef, private el: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.viewRef || !this.tooltipTemplate) return;
    this.viewRef = this.vcr.createEmbeddedView(this.tooltipTemplate);
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.viewRef) {
      this.viewRef.destroy();
      this.viewRef = null;
    }
  }
}
