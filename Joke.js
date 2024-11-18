import React, {useState} from "react"

export default function Joke(props) {

    const [isShown, setShown] = useState(false);
    function toogle(){
        setShown(prevValue => !prevValue)
    }
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toogle}> {isShown ? "Hide punchline" : "Show punchline"}</button>          
            <hr />
        </div>
    )
    console.log(isShown);
}