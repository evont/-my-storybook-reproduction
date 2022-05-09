import { ComponentMeta } from '@storybook/react';
import { ObjStr } from './ObjStr';

export default {
  title: 'ObjStr/str',
  component: ObjStr,
  args: {
    normal: '+123444',
    createData: {
      phoneNumber: '+1234356'
    }
  }
}  as ComponentMeta<typeof ObjStr>;

export const Template = ObjStr.bind({});