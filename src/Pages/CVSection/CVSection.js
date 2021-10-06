import './CVSection.css'

const CVSection =()=>{

    //red dress pic

    return(
        <div id='CV'>
            <div class='CVHeader'>
                Magamról
            </div>
            <div class='CVContent'>
                <table id="table">
                    <tr>
                        <td id="left">
                            <img id="red_dress" src="red_dress.jpg" alt="red_dress_img"/>
                        </td>
                        <td id="right">
                        2014 májusában végeztem a Szegedi Tudományegyetem Állam -és Jogtudományi Kar, nappali tagozatán jogászként cum laude (4,5) minősítéssel.
                        <br/><br/>
                        Egyetemi éveim alatt lehetőségem nyílt arra, hogy a hagyományos jogász képzés mellett átfogó, mélyebb ismeretekre tehessek szert egyes szakágak vonatkozásában, így az általános jogász modul mellett sikeresen teljesítettem a büntető tudományok modult. 
                        <br/><br/>
                        A jogi pálya iránt érzett elhivatottságom jeléül a Bécsi Jogi Egyetemen megkezdtem a jogi diplomám honosítását is.
                        <br/><br/>
                        Ügyvédi szakvizsgáim 2018-ban teljesítettem, s még ebben az évben ügyvédi esküt tettem. 
                        <br/><br/>
                        Munkáim során elengedhetetlennek tartom az Ügyfelekkel való helyes bánásmód, az empátia tanúsítását. 
                        <br/><br/>
                        Ügyvédi tevékenységem végzése során fontosnak tartom a gyors és hatékony munkavégzést, a rám bízott feladatok legnagyobb gondossággal történő ellátását és megoldását. Mindezt az ügyek lényegi feltérképezésével, jó kommunikációs, kapcsolatteremtési és problémamegoldó képességemmel biztosítom Ügyfeleim részére.
                        </td>
                    </tr>
                </table>
                <img id="red_dress_mobile" src="red_dress.jpg" alt="red_dress_img"/>
            </div>
        </div>
    )
}

export default CVSection