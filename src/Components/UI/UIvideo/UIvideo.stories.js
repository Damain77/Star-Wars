import UIvideo from "./UIvideo";
import video from './video/han-solo.mp4'

export default {
    title: 'Ui-Kit/UIvideo',
    component: UIvideo
}

const props = {
    src: video ,
    playbackRate: 1.0,
    classes: '',
}

const Template = (args) => <UIvideo {...args} />


export const Default = Template.bind({})

Default.args = {
    ...props
}
