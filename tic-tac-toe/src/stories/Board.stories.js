import React from 'react';
import Board from '../Components/Board';
export default {
  title: 'Board',
  component: Board,
};

const Template = (args) => <Board {...args} />;

export const BoardRed = Template.bind({});

BoardRed.args = {
  backgroundColor: 'red',
};
