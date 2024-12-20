import { Directive } from '@angular/core';
import { provideHlmIconConfig } from '../../ui-icon-helm/lib/hlm-icon.token';

@Directive({
	selector: '[hlmAlertIcon]',
	providers: [provideHlmIconConfig({ size: 'sm' })],
})
export class HlmAlertIconDirective {}
