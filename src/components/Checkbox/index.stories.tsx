import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from "."
import { Text } from '../Text';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    children : "Lembra-me por 3 dias"
  },
  argTypes: {
    
  },
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
