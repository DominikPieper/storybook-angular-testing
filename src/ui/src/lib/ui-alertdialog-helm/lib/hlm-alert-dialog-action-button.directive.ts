import { Directive } from '@angular/core';
import { HlmButtonDirective } from '../../ui-button-helm/lib/hlm-button.directive';

@Directive({
	selector: 'button[hlmAlertDialogAction]',
	hostDirectives: [HlmButtonDirective],
})
export class HlmAlertDialogActionButtonDirective {}
