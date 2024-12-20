import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import type { ClassValue } from 'clsx';
import { HlmButtonDirective } from '../../ui-button-helm/lib/hlm-button.directive';
import { provideBrnButtonConfig } from '../../ui-button-helm/lib/hlm-button.token';

@Directive({
	selector: 'button[hlmAlertDialogCancel]',
	hostDirectives: [HlmButtonDirective],
	providers: [provideBrnButtonConfig({ variant: 'outline' })],
	host: {
		'[class]': '_computedClass()',
	},
})
export class HlmAlertDialogCancelButtonDirective {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected readonly _computedClass = computed(() => hlm('mt-2 sm:mt-0', this.userClass()));
}
