import React from "react";

type ItemType = {
    title: string;
    value: number;
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * Elements that are showed when is opened. Each item should be [[ItemType]]
     */
    items: ItemType[]
    /**
     * Callback that is called when any item clicked
     * @param value is value of clicked item
     */
    onClick: (value: any) => void
    /**
     * optional color of header text
     */
    color: string
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering");


    return <div>
        <AccordionTitle title={props.titleValue} color={props.color}
                        onChange={props.onChange} />
        { !props.collapsed && <AccordionBody/> }
    </div>
}

// function Accordion2(props: AccordionPropsType) {
//     console.log("Accordion2 rendering");
//     if (props.collapsed) {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//                 <AccordionBody/>
//             </div>
//         );
//     }
//
// }

type AccordionTitlePropsType = {
    title: string;
    onChange: () => void;
    color?: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return (
        <h3 style={{color: props.color ? props.color : 'black'}}
            onClick={(e) => props.onChange()}>-- {props.title} --</h3>
    );
}

function AccordionBody() {
    console.log("AccordionBody rendering");
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}