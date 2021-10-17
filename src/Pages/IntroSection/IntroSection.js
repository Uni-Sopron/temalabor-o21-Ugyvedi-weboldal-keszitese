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
                {lang ==="hun"?<div>dr. Keserű Klaudia</div>:<div>dr. Klaudia Keserű</div>}
                {lang ==="hun"?<div><div id="citation">"Bona causa triumphat." <br/> - A jó ügy diadalmaskodik.</div></div>:<div id="citation">"Bona causa triumphat." <br/> - Gute Sache triumphiert</div>}
                
            </div>
        </div>
    )
}

export default IntroSection