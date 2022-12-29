// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import TabsComponent from './tabs.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Tabs',
  component: TabsComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    activeColor: { control: 'color' },
    inactiveColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<TabsComponent> = (args: TabsComponent) => ({
  props: args,
});

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Normal.args = {
    size: 'medium'
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
