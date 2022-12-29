// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SelectComponent } from './select.component';


export default {
    title: 'Example/Select',
    component: SelectComponent,
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

    const Template: Story<SelectComponent> = (args: SelectComponent) => ({
        props: args,
    });

    export const DefaultSelect = Template.bind({});
    DefaultSelect.args = {
        label: "Select",
        labelColor: "#07074D",
        size: "sm",
    }