// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import AvatarComponent from './avatar.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Avatar',
  component: AvatarComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<AvatarComponent> = (args: AvatarComponent) => ({
  props: args,
});

export const WithName = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
WithName.args = {
  withName: true,
  name: "Hello1",
  withIcon: false
};

export const Secondary = Template.bind({});
Secondary.args = {
    withName: true,
    name: "Hello2",
    withIcon: false
};

export const Large = Template.bind({});
Large.args = {
    withName: true,
    name: "Hello3",
    withIcon: false
};

export const Small = Template.bind({});
Small.args = {
    withName: true,
    name: "Hello4",
    withIcon: false
};
