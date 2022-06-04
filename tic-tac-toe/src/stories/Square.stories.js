import React from 'react';
import Square from '../Components/Square';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Square',
  component: Square,
  argTypes: { onClick: { action: 'Clicked' } },
};

const Template = (args) => (
  <Square onClick={action('Its been Clicked')} {...args} />
);

export const Red = Template.bind({});

Red.args = {
  backgroundColor: 'red',
  height: '100%',
  width: '100%',
};
