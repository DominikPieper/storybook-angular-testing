import { Directive, computed, input } from '@angular/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { hlm } from '@spartan-ng/ui-core';
import type { ClassValue } from 'clsx';
import { provideHlmIconConfig, provideIcons } from '../../ui-icon-helm/ui-icon-helm.module';

@Directive({
	selector: 'hlm-icon[hlmAccordionIcon], hlm-icon[hlmAccIcon]',
	providers: [provideIcons({ lucideChevronDown }), provideHlmIconConfig({ name: 'lucideChevronDown', size: 'none' })],
	host: {
		'[class]': '_computedClass()',
	},
})
export class HlmAccordionIconDirective {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() =>
		hlm('inline-block h-4 w-4 transition-transform [animation-duration:200]', this.userClass()),
	);
}
