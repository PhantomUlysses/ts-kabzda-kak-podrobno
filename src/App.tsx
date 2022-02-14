import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion, UncontrolledAccordionWithMemo} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";


function App(props: any) {
    console.log("App rendering");

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);


    return (
        <div className={'App'}>
            {/*<Accordion2 titleValue={'Menu'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={ () => setAccordionCollapsed(!accordionCollapsed)} />*/}
            <UncontrolledAccordionWithMemo titleValue={"Menu"} />

            {/*<UncontrolledRating />*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>


            <OnOff on={switchOn} onChange={ setSwitchOn } />
            <OnOff on={switchOn} onChange={ setSwitchOn }  />

            <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
            
            <UncontrolledAccordion titleValue={'Blabla'} />
        </div>

    );
}

type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    console.log("PageTitle rendering");
    return <h1>{ props.title }</h1>
}



export default App;
