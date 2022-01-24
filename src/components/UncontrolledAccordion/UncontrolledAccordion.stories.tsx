import React, {useState} from "react";
import { action } from '@storybook/addon-actions';
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'components/UncontrolledAccordion',
    component: UncontrolledAccordion,
};

const callback = action('accordion mode change event fired')

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <UncontrolledAccordion titleValue={'Users'}/>
};