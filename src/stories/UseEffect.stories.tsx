import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
}


export const SimpleExample = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    console.log("SimpleExample");

    useEffect(() => {
        console.log("useEffect every render");
        document.title = counter.toString();
    });
    useEffect(() => {
        console.log("useEffect only first render (like componentDidMount)");
        document.title = counter.toString();
    }, []);
    useEffect(() => {
        console.log("useEffect first render and every counter change");
        document.title = counter.toString();
    }, [counter]);


    return <>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        {counter} {fake}
    </>
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState('00:00:00');
    const [fake, setFake] = useState(1);

    console.log("SetTimeoutExample");

    useEffect(() => {

        setInterval(() => {
            setCounter((state) => {
                let date = new Date();
                return date.toLocaleTimeString();
            });
        }, 1000);

    }, []);


    return <>
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        counter: {counter} fake: {fake}
    </>
}