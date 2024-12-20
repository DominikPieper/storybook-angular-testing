import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {BrnAccordionDirective, BrnAccordionImports} from '@spartan-ng/ui-accordion-brain';
import { HlmAccordionImports } from './ui-accordion-helm.module';
import { HlmIconComponent } from '../ui-icon-helm/lib/hlm-icon.component';
import { HlmInputDirective } from '../ui-input-helm/lib/hlm-input.directive';

const meta: Meta<BrnAccordionDirective> = {
  title: 'Accordion',
  component: BrnAccordionDirective,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [BrnAccordionImports, HlmAccordionImports, HlmIconComponent, HlmInputDirective],
    }),
  ],
};

export default meta;
type Story = StoryObj<BrnAccordionDirective>;

export const Default: Story = {
  render: () => ({
    template: /* HTML */ `
			<hlm-accordion>
				<hlm-accordion-item>
					<button hlmAccordionTrigger>
						Is it accessible?
						<hlm-icon hlmAccIcon />
					</button>
					<hlm-accordion-content>Yes. It adheres to the WAI-ARIA design pattern.</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item>
					<button hlmAccordionTrigger>
						Is it styled?
						<hlm-icon hlmAccIcon />
					</button>
					<hlm-accordion-content>
						Yes. It comes with default styles that match the other components' aesthetics.
					</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item>
					<button hlmAccordionTrigger>
						Is it animated?
						<hlm-icon hlmAccIcon />
					</button>
					<hlm-accordion-content>
						Yes. It's animated by default, but you can disable it if you prefer.
					</hlm-accordion-content>
				</hlm-accordion-item>
			</hlm-accordion>
		`,
  }),
};

export const TwoAccordions: Story = {
  render: () => ({
    template: /* HTML */ `
			<hlm-accordion>
				<hlm-accordion-item>
					<button hlmAccordionTrigger>
						Is it accessible?
						<hlm-icon hlmAccIcon />
					</button>
					<hlm-accordion-content>Yes. It adheres to the WAI-ARIA design pattern.</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item>
					<button hlmAccordionTrigger>
						Is it styled?
						<hlm-icon hlmAccIcon />
					</button>
					<hlm-accordion-content>
						Yes. It comes with default styles that match the other components' aesthetics.
					</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item>
					<button hlmAccordionTrigger>
						Is it animated?
						<hlm-icon hlmAccIcon />
					</button>
					<hlm-accordion-content>
						Yes. It's animated by default, but you can disable it if you prefer.
					</hlm-accordion-content>
				</hlm-accordion-item>
			</hlm-accordion>

			<hlm-accordion>
				<hlm-accordion-item>
					<button hlmAccordionTrigger>
						Is it accessible?
						<hlm-icon hlmAccIcon />
					</button>
					<hlm-accordion-content>Yes. It adheres to the WAI-ARIA design pattern.</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item>
					<button hlmAccordionTrigger>
						Is it styled?
						<hlm-icon hlmAccIcon />
					</button>
					<hlm-accordion-content>
						Yes. It comes with default styles that match the other components' aesthetics.
					</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item>
					<button hlmAccordionTrigger>
						Is it styled?
						<hlm-icon hlmAccIcon />
					</button>
					<hlm-accordion-content>
						Yes. It comes with default styles that match the other components' aesthetics.
					</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item>
					<button hlmAccordionTrigger>
						Is it styled?
						<hlm-icon hlmAccIcon />
					</button>
					<hlm-accordion-content>
						Yes. It comes with default styles that match the other components' aesthetics.
					</hlm-accordion-content>
				</hlm-accordion-item>
			</hlm-accordion>
		`,
  }),
};
export const SetOpenState: Story = {
  render: () => ({
    template: /* HTML */ `
			<hlm-accordion [type]="multiple">
				<hlm-accordion-item isOpened>
					<button hlmAccordionTrigger>
						Is it accessible?
						<hlm-icon hlmAccIcon />
					</button>
					<hlm-accordion-content>Yes. It adheres to the WAI-ARIA design pattern.</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item>
					<button hlmAccordionTrigger>
						Is it styled?
						<hlm-icon hlmAccIcon />
					</button>
					<hlm-accordion-content>
						Yes. It comes with default styles that match the other components' aesthetics.
					</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item isOpened>
					<button hlmAccordionTrigger>
						Is it animated?
						<hlm-icon hlmAccIcon />
					</button>
					<hlm-accordion-content>
						Yes. It's animated by default, but you can disable it if you prefer.
					</hlm-accordion-content>
				</hlm-accordion-item>
			</hlm-accordion>
		`,
  }),
};
export const WithTapable: Story = {
  render: () => ({
    template: /* HTML */ `
			<hlm-accordion>
				<hlm-accordion-item>
					<button hlmAccordionTrigger>
						Is the button tapable when closed?
						<hlm-icon hlmAccIcon />
					</button>
					<hlm-accordion-content>
						<button data-testid="not-tapable-when-closed">It should not be when closed</button>
					</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item>
					<button hlmAccordionTrigger>
						Is the button tapable when open?
						<hlm-icon hlmAccIcon />
					</button>
					<hlm-accordion-content>
						<button data-testid="tapable-when-open">It should be when open</button>
					</hlm-accordion-content>
				</hlm-accordion-item>
			</hlm-accordion>
		`,
  }),
};

export const AccordionWithInput: Story = {
  render: () => ({
    template: /* HTML */ `
			<hlm-accordion>
				<hlm-accordion-item>
					<button hlmAccordionTrigger>
						Enter your name
						<hlm-icon hlmAccIcon />
					</button>
					<hlm-accordion-content>
						<div class="px-1">
							<input type="text" placeholder="Type your name here" hlmInput />
						</div>
					</hlm-accordion-content>
				</hlm-accordion-item>
			</hlm-accordion>
		`,
  }),
};