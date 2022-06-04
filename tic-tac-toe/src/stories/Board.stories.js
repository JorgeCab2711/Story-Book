import React from 'react';
import Board from '../Components/Board';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: 'Board',
  component: Board,
  argTypes: { onClick: { action: 'Clicked' } },
};

const Template = (args) => (
  <Board onClick={action('Its been Clicked')} {...args} />
);

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const BoardRed = Template.bind({});

BoardRed.args = {
  height: 100,
  width: 100,
  backgroundColor: 'red',
};
