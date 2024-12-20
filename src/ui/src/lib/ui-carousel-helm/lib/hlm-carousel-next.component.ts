import {
	ChangeDetectionStrategy,
	Component,
	ViewEncapsulation,
	computed,
	effect,
	inject,
	input,
	untracked,
} from '@angular/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { hlm } from '@spartan-ng/ui-core';
import type { ClassValue } from 'clsx';
import { HlmCarouselComponent } from './hlm-carousel.component';
import { HlmButtonDirective } from '../../ui-button-helm/lib/hlm-button.directive';
import { HlmIconComponent, provideIcons } from '../../ui-icon-helm/ui-icon-helm.module';
import { provideBrnButtonConfig } from '../../ui-button-helm/lib/hlm-button.token';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'button[hlm-carousel-next], button[hlmCarouselNext]',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'[disabled]': 'isDisabled()',
		'(click)': '_carousel.scrollNext()',
	},
	hostDirectives: [{ directive: HlmButtonDirective, inputs: ['variant', 'size'] }],
	providers: [provideIcons({ lucideArrowRight }), provideBrnButtonConfig({ variant: 'outline', size: 'icon' })],
	imports: [HlmIconComponent],
	template: `
		<hlm-icon size="sm" name="lucideArrowRight" />
		<span class="sr-only">Next slide</span>
	`,
})
export class HlmCarouselNextComponent {
	private readonly _button = inject(HlmButtonDirective);
	private readonly _carousel = inject(HlmCarouselComponent);
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	private readonly _computedClass = computed(() =>
		hlm(
			'absolute h-8 w-8 rounded-full',
			this._carousel.orientation() === 'horizontal'
				? '-right-12 top-1/2 -translate-y-1/2'
				: '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
			this.userClass(),
		),
	);
	protected readonly isDisabled = () => !this._carousel.canScrollNext();

	constructor() {
		effect(() => {
			const computedClass = this._computedClass();

			untracked(() => this._button.setClass(computedClass));
		});
	}
}