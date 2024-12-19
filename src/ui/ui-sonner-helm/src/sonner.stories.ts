import { Component } from '@angular/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { toast } from 'ngx-sonner';
import {HlmToasterComponent} from './lib/hlm-toaster.component';
import {HlmButtonDirective} from '@spartan-ng/ui-button-helm';

const meta: Meta<HlmToasterComponent> = {
	title: 'Sonner',
	component: HlmToasterComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [HlmToasterComponent, HlmButtonDirective],
		}),
	],
};

export default meta;
type Story = StoryObj<HlmToasterComponent>;

@Component({
	selector: 'sonner-story',
	imports: [HlmToasterComponent, HlmButtonDirective],
	template: `
		<hlm-toaster />
		<button hlmBtn (click)="showToast()">Show Toast</button>
	`,
})
export class SonnerStory {
	showToast() {
		toast('Event has been created', {
			description: 'Sunday, December 03, 2023 at 9:00 AM',
			action: {
				label: 'Undo',
				onClick: () => console.log('Undo'),
			},
		});
	}
}

export const Default: Story = {
	render: () => ({
		template: '<sonner-story />',
	}),
};