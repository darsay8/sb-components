import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    color: { control: 'select' },
    fontColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = args => <MyLabel {...args} />;

export const Basic = Template.bind({});

Basic.args = { size: 'default', allCaps: false };

export const AllCaps = Template.bind({});
AllCaps.args = { size: 'default', allCaps: true };

export const Secondary = Template.bind({});
Secondary.args = { size: 'default', color: 'secondary' };

export const Tertiary = Template.bind({});
Tertiary.args = { size: 'default', color: 'tertiary' };

export const CustomFontColor = Template.bind({});
CustomFontColor.args = { size: 'h1', fontColor: '#5517ac' };

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = { size: 'h1', fontColor: '#f1f1f1', backgroundColor: '#282828' };
