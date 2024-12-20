import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import type { ClassValue } from 'clsx';
import { HlmButtonDirective } from '../../ui-button-helm/lib/hlm-button.directive';
import { provideBrnButtonConfig } from '../../ui-button-helm/lib/hlm-button.token';

@Directive({
	selector: '[hlmCmdDialogCloseBtn]',
	hostDirectives: [HlmButtonDirective],
	providers: [provideBrnButtonConfig({ variant: 'ghost' })],
	host: {
		'[class]': 'computedClass()',
	},
})
export class HlmCommandDialogCloseButtonDirective {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected readonly computedClass = computed(() => hlm('!p-1 !h-5 !w-5', this.userClass()));
}
