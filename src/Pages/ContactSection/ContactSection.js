import './ContactSection.css'
import {useState} from 'react'
import axios from 'axios'

const ContactSection = () =>{

    //Google Maps API --> Dynamic Search version

    const [sendTitle, setSendTitle] =useState("Küldés")

    const [name, setName]=useState()
    const [isMailCorrect, setMailCorrect]=useState(false)

    const NameSet=(enteredName)=>{
        setName(enteredName)
    }

    const [email, setEmail]=useState()

    const EmailSet=(enteredEmail)=>{
        setEmail(enteredEmail)
    }

    const [Case, setCase]=useState()

    const CaseSet=(enteredCase)=>{
        setCase(enteredCase)
    }

    const [phone, setPhone]=useState()

    const PhoneSet=(enteredPhone)=>{
        setPhone(enteredPhone)
    }

    const CheckMail=()=>{
        if(email&&email.includes("@") && email.includes(".")&& email.indexOf("@")<email.indexOf("."))
            setMailCorrect(true)
    }

    //https://fast-beyond-73098.herokuapp.com/

    const Send = async ()=>{
        //CheckMail()
        //if(isMailCorrect){
            
            if(phone&& name&& Case){
                            try{
                        let dataString = name+" "+phone+" "+Case+" "+email
                        setSendTitle("Küldés...")
                        await axios.post('https://fast-beyond-73098.herokuapp.com/https://gentle-dusk-91583.herokuapp.com/sendmail', {
                            name:name,
                            phone:phone,
                            Case: Case,
                            email:email
                        })
                        .then(response =>{
                            setSendTitle(response.data.answer)
                        })
                    } catch(Error){
                        setSendTitle("Hiba! Kérem jelezze a jkbbenedek@gmail.com címen!")
                    } 
                    }
                    else{
                        setSendTitle("Kérem minden mezőt töltsön ki!")
                    }
        //} else{
          //  setSendTitle("Érvényes email címet adjon meg!")
        //}
        
    }



    return(
        <div id="Contact">
            <table id="ContactTable">
                <tr>
                    <td id="ContactTD">
                        <div id="ContactTitle">
                            Kapcsolat
                        </div>
                        <div class="ContactText">
                            <span class="ContactSubTitle">Dr. Keserű Klaudia egyéni ügyvéd</span>
                        </div>
                        <div class="ContactText">
                            <span class="ContactSubTitle">Cím: </span>9400 Sopron, Színház utca 21. 1. em.
                        </div>
                        <div class="ContactText">
                            <span class="ContactSubTitle">Telefon: </span>0699/338-250; +3630/683-8822
                        </div>
                        <div class="ContactText">
                            <span class="ContactSubTitle">E-mail: </span>dr.keseru.klaudia@gmail.com
                        </div>
                    </td>
                    <td  id="formTD">
                        <div id="formDiv">
                            <div id="FormTitle">
                            Ügyvédre van szüksége?
                            </div>
                            <input type="text" class="input" placeholder="Adja meg a teljes nevét!" onChange={(e)=>NameSet(e.target.value)}/>
                            <br/>
                            <input type="text" class="input" placeholder="Adja meg a telefonszámát!" onChange={(e)=>PhoneSet(e.target.value)} />
                            <br/>
                            <input type="text" class="input" placeholder="Adja meg az e-mail címét!" onChange={(e)=>EmailSet(e.target.value)}/>
                            <br/>
                            <textarea class="input" id="description" placeholder="Írja le röviden az esetét! (max. 200 karakter)" maxLength="200" rows="8" onChange={(e)=>CaseSet(e.target.value)}/>
                            <div id="btn-pos">
                                <button id="button" onClick={Send}>{sendTitle}</button>
                            </div>
                        </div>
                    </td>

                </tr>
            </table>
            <div id="formDivMobile">
                            <div id="FormTitle">
                            Ügyvédre van szüksége?
                            </div>
                            <input type="text" class="input" placeholder="Adja meg a teljes nevét!" onChange={(e)=>NameSet(e.target.value)}/>
                            <br/>
                            <input type="text" class="input" placeholder="Adja meg a telefonszámát!" onChange={(e)=>PhoneSet(e.target.value)} />
                            <br/>
                            <input type="text" class="input" placeholder="Adja meg az e-mail címét!" onChange={(e)=>EmailSet(e.target.value)}/>
                            <br/>
                            <textarea class="input" id="description" placeholder="Írja le röviden az esetét! (max. 200 karakter)" maxLength="200" rows="8" onChange={(e)=>CaseSet(e.target.value)}/>
                            <div id="btn-pos">
                                <button id="button" onClick={Send}>Küldés</button>
                            </div>
                        </div>
        </div>
    )
}

export default ContactSection