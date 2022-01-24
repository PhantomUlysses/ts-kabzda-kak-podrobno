import React from "react";

type ItemType = {
    title: string;
    value: any;
}

export type Accordion2PropsType = {
    titleValue: string;
    collapsed: boolean;
    onChange: () => void;
    items: ItemType[];
    onClick: (value: any) => void;
}

export function Accordion2(props: Accordion2PropsType) {
    console.log("Accordion2 rendering");

    return <div>
        <Accordion2Title title={props.titleValue}
                        onChange={props.onChange} />
        { !props.collapsed && <Accordion2Body items={props.items} onClick={props.onClick} /> }
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

type Accordion2TitlePropsType = {
    title: string;
    onChange: () => void;
    color?: string;
}

function Accordion2Title(props: Accordion2TitlePropsType) {
    console.log("Accordion2Title rendering");
    return (
        <h3 style={{color: props.color ? props.color : 'black'}}
            onClick={(e) => props.onChange()}>-- {props.title} --</h3>
    );
}

export type Accordion2BodyPropsType = {
    items: ItemType[];
    onClick: (value: any) => void;
}

function Accordion2Body(props: Accordion2BodyPropsType) {
    console.log("Accordion2Body rendering");
    return (
        <ul>
            { props.items.map( (i, index) => <li onClick={() => {
                props.onClick(i.value)
            }} key={index}>{i.title}</li> ) }
        </ul>
    );
}