import { useState, useEffect } from "react";

function NComp(props) {
    const [c, setC] = useState(true);
    const [t, setT] = useState('');
    const [l, setL] = useState('');
    //In order to simulate the life cycle events we use useEffect
    useEffect(() => {
        console.log('Mounting Event');
        setL('Ganapathi Satchidananda')
    })
    return (
        <>
            <button onClick={() => setC(!c)}>{props.a}</button>
            <br />
            {
                c ? <label>Welcome</label> : <label>Thanks</label>
            }
            Enter your name:<input type="text" name="ttt" onChange={(e) => setT(e.target.value)} />
            <br />
            {t}
            <br />The value of L is {l}
        </>
    );
}

export default NComp;