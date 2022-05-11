import { ComponentMeta } from '@storybook/react';

const BigIntComp = (arg: { num: string }) => {
  return <div>
    <p>number</p>
    <p>{ arg.num }</p>

    <p>you can use <b>12345678912345678911</b>, and then refresh, you will get <b>12345678912345680000</b></p>
  </div>
}

export default {
  title: 'BigInt',
  component: BigIntComp,
  args: {
    num: '1234567891234567891'
  }
}  as ComponentMeta<typeof BigIntComp>;

export const Template = BigIntComp.bind({});