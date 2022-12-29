// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, Parameters } from '@storybook/angular/types-6-0';
import { LabelComponent } from './label.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Label',
  component: LabelComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes,
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<LabelComponent> = (args: LabelComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  type: 'primary',
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
};
