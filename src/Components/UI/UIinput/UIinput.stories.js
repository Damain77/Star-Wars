import { useState } from "react";
import UIinput from "./UIinput";

export default {
    title: 'Ui-Kit/UIinput',
    component: UIinput
}

const props = {
    handleInputChange: () => console.log('Input Change'),
    value: '',
    placeholder: 'Placeholder',
    classes: '',
}

const Template = (args) => {
    const [value,setValue] = useState(null)
    const handleInputChange = value => {
        setValue(value)
    }
    return (
        <UIinput
            value={value}
            handleInputChange={handleInputChange}
            {...args}
        />
    )
}

export const Default = Template.bind({})

Default.args = {...props}