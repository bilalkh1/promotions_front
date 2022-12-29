// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import NotificationComponent from './notification.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Notification',
  component: NotificationComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<NotificationComponent> = (args: NotificationComponent) => ({
  props: args,
});

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Success.args = {
    status: 'success',
    label: 'Successful Operation'
};

export const Warning = Template.bind({});
Warning.args = {
    status: 'warning'
};

export const Error = Template.bind({});
Error.args = {
    status: 'error'
};

export const Small = Template.bind({});
Small.args = {
    size: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium'
};

export const Large = Template.bind({});
Large.args = {
    size: 'large'
};
