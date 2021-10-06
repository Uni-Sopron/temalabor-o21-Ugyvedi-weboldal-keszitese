import './IntroSection.css'
import { useEffect, useState, useContext } from 'react'
import { LangContext, useLang } from '../../Contexts/LangContext'

var rerender=true

const IntroSection =()=>{

    const[rerenderTrigger, setRerender]=useState("true")

    const Lang = useContext(LangContext)

    const [lang] = useLang(useLang);

    useEffect(()=>{
        setRerender(!rerender)
    },[])

    return(
        <div class='IntroWrapper'>
            <div class='Intro'>
                dr. Keserű Klaudia
                <br/>
                <div id="citation">"Bona causa triumphat." <br/> - A jó ügy diadalmaskodik.</div>
            </div>
        </div>
    )
}

export default IntroSection