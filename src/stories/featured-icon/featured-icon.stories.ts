// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator } from '@storybook/angular';
import { Story, Meta, Parameters } from '@storybook/angular/types-6-0';
import { FeaturedIconComponent } from './featured-icon.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Featured Icon',
  component: FeaturedIconComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes,
  decorators: [
    componentWrapperDecorator(
      (story) =>
        `<div style="margin: 5rem; width: 15rem; height: 5rem; background-color: red; position: relative">${story}</div>`
    ),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<FeaturedIconComponent> = (
  args: FeaturedIconComponent
) => ({
  props: args,
});

export const Person = Template.bind({});
Person.args = {
  iconName: 'person',
};
// More on args: https://storybook.js.org/docs/angular/writing-stories/args

export const Image = Template.bind({});
Image.args = {
  iconName: 'image',
};
