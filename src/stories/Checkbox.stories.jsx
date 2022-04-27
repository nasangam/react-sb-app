import React from 'react';
import Checkbox from '../components/Checkbox';

export default {
    title: 'Example/Checkbox',
    component: Checkbox
};

const Template = (args) => <Checkbox {...args} />;

export const Labled = Template.bind({});
Labled.args = {
    label: "terms & condition",
    onChange: ()=>console.log("onChnage() from Story Book"),
    bgcolor: "lightGray",
    color: "blue"
}

export const Empty = Template.bind({});
Empty.args = {
    label: "",
    onChange: ()=>console.log("onChnage() from Story Book"),
    bgcolor: "lightGray",
    color: "blue"
}