import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Accordion2} from "./Accordion2";

export default {
    title: 'Accordion2',
    component: Accordion2,
}

const callback = action('accordiond2 mode change event fired');
const onClickCallback = action('some item was clicked');

export const MenuCollapsedMode = () => <Accordion2 titleValue={'Menu'} collapsed={true} onChange={callback} items={[]}
                                                   onClick={onClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion2 titleValue={'Users'} collapsed={false} onChange={callback}
                                                      onClick={onClickCallback}
                                                      items={[{title: 'Nikitos', value: 1} , {title: 'Dimych', value: 2},
                                                          {title: 'Valera', value: 3}, {title: 'Artem', value: 4},
                                                          {title: 'Viktor', value: 5}]} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion2 titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)}
                       onClick={(value) => {alert(`user with ID ${value} should be happy`)}}
                       items={[
                           {title: 'Nikitos', value: 1},
                           {title: 'Dimych', value: 2},
                           {title: 'Valera', value: 3},
                           {title: 'Artem', value: 4},
                           {title: 'Viktor', value: 5}]} />
}