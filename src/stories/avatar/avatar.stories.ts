// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import AvatarComponent from './avatar.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Avatar',
  component: AvatarComponent,
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<AvatarComponent> = (args: AvatarComponent) => ({
  props: args,
});

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Normal.args = {
  withName: false,
  withIcon: false
};

export const AvatarWithName = Template.bind({});
AvatarWithName.args = {
    withName: true,
    name: "Bilal EL Khatab",
    withIcon: false
};

export const AvatarIconName = Template.bind({});
AvatarIconName.args = {
    withName: true,
    name: "Bilal EL Khatab",
    withIcon: true
};

export const FullAvatar = Template.bind({});
FullAvatar.args = {
    withName: true,
    name: "Bilal EL Khatab",
    withIcon: true,
    withText: true,
    text: 'bilal.khatab@outlook.fr'

};
