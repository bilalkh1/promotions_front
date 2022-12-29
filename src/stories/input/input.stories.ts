// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputComponent } from './input.component';



export default {
  title: 'Example/Input',
  component: InputComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;


const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const WithLabel = Template.bind({});

WithLabel.args = {
  withLabel: true,
  label: "Email",
  type: "text",
  backgroundColor: "blue-200",
};

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  withLabel: false,
  label: "Email",
  type: "text",
  placeholder: "email",
  backgroundColor: "white",
  textColor: "black",
  size: "base",
};