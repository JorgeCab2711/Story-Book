import React from 'react';
import Square from '../Components/Square';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: 'Square',
  component: Square,
  argTypes: { onClick: { action: 'Clicked' } },
};

const Template = (args) => (
  <Square onClickEvent={action('Its been Clicked')} {...args} />
);

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const Red = Template.bind({});

Red.args = {
  backgroundColor: 'red',
  height: '100%',
  width: '100%',
};
