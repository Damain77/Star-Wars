import UIloading from "./UIloading";

export default {
    title: 'Ui-Kit/UIloading',
    component: UIloading
}

const props = {
    theme: 'black',
    isShadow: true,
    classes: ''
}

const Template = (args) => <UIloading {...args} />

export const Light = Template.bind({})

Light.args = {
    ...props,
    theme: 'white',
}
export const Dark = Template.bind({})

Dark.args = {
    ...props,
    theme: 'black',
}
export const Blue = Template.bind({})

Blue.args = {
    ...props,
    theme: 'blue',
}