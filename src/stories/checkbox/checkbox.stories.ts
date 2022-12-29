// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CheckboxComponent } from './checkbox.component';



export default {
  title: 'Example/Checkbox',
  component: CheckboxComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
    props: args,
});

export const DefaultCheckbox = Template.bind({});

DefaultCheckbox.args = {
    label: "Yes",
    labelColor: "#07074D",
    withLabel: true,
    size: "base",
    type: "checkbox",
};

