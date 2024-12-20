import { Component } from '@angular/core';
import { BrnMenuGroupDirective } from '@spartan-ng/ui-menu-brain';

@Component({
	selector: 'hlm-menu-group',
	host: {
		class: 'block',
	},
	hostDirectives: [BrnMenuGroupDirective],
	template: `
		<ng-content />
	`,
})
export class HlmMenuGroupComponent {}
