import UIbutton from "./UIbutton";

export default {
    title: 'Ui-Kit/UIbutton',
    component: UIbutton
}

const props = {
    children: 'Hello!',
    theme: 'dark',
    toPage: 'http://',
    classes: ''
}

const Template = (args) => <UIbutton {...args} />

export const Light = Template.bind({})

Light.args = {
    ...props,
    theme: 'light',
}
export const Dark = Template.bind({})

Dark.args = {
    ...props,
    theme: 'dark',
}
export const Disabled = Template.bind({})

Disabled.args = {
    ...props,
    toPage: null,
}