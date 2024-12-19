import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import {HlmAlertDialogComponent, HlmAlertDialogImports} from '@spartan-ng/ui-alertdialog-helm';
import {BrnAlertDialogImports} from '@spartan-ng/ui-alertdialog-brain';
import {HlmButtonDirective} from '@spartan-ng/ui-button-helm';

const meta: Meta<HlmAlertDialogComponent> = {
	title: 'Alert Dialog',
	component: HlmAlertDialogComponent,
	tags: ['autodocs'],
	args: {},
	argTypes: {},
	decorators: [
		moduleMetadata({
			imports: [BrnAlertDialogImports, HlmAlertDialogImports, HlmButtonDirective],
		}),
	],
};

export default meta;
type Story = StoryObj<HlmAlertDialogComponent>;

export const Default: Story = {
	render: () => ({
		template: `
    <hlm-alert-dialog>
      <button id='delete-account' variant='outline' brnAlertDialogTrigger hlmBtn>Delete Account</button>
      <hlm-alert-dialog-content *brnAlertDialogContent='let ctx'>
           <hlm-alert-dialog-header>
            <h3 hlmAlertDialogTitle>Are you absolutely sure?</h3>
            <p hlmAlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
            </p>
          </hlm-alert-dialog-header>
          <hlm-alert-dialog-footer>
            <button hlmAlertDialogCancel (click)='ctx.close()'>Cancel</button>
            <button hlmAlertDialogAction type='submit'>Delete account</button>
          </hlm-alert-dialog-footer>
      </hlm-alert-dialog-content>
    </hlm-alert-dialog>
    `,
	}),
};
