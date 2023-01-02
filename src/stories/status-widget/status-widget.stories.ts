// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { StatusWidgetComponent } from './status-widget.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Status Widget',
  component: StatusWidgetComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {},
} as Meta;

const Template: Story<StatusWidgetComponent> = (
  args: StatusWidgetComponent
) => ({
  props: args,
});

export const Growing = Template.bind({});
Growing.args = {
  value: 256,
  percentageValue: 12.5,
};

export const Descending = Template.bind({});
Descending.args = {
  value: 256,
  percentageValue: -12.5,
};
