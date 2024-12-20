import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import type { ClassValue } from 'clsx';
import { provideHlmIconConfig } from '../../ui-icon-helm/lib/hlm-icon.token';

@Directive({
	selector: '[hlmCmdIcon]',
	providers: [provideHlmIconConfig({ size: 'none' })],
	host: {
		'[class]': '_computedClass()',
	},
})
export class HlmCommandItemIconDirective {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() => hlm('mr-2 h-4 w-4', this.userClass()));
}
