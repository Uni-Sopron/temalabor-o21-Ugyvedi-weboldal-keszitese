import "./PriceSection.css"
import { useLang } from '../../Contexts/LangContext'

const Price = () => {

    const [lang] = useLang(useLang);

    return (
        <div id="Price">
            {lang === "hun" ?
                <div id="PriceTitle">
                    Munkadíj
                </div> :
                <div id="PriceTitle">
                    Anwaltshonorar
                </div>}
            <div>
                <table>
                    <tr>
                        <td>
                            {lang==="hun"?
                            <div id="PriceText">
                                Az ügyvédi munkadíj szabad megállapodás tárgya, mely függ az ügy jellegétől,  súlyától, bonyolultságától, valamint a munka mennyiségétől. A munkadíj minden esetben óradíjas alapon, fix összegben, meghatározott ügyekben - így pl. adásvételi szerződések szerkesztése, cégalapítás, tartós jogi képviselet ellátása során) százalékban vagy fix összegben kerül meghatározásra.
                            </div>:
                            <div id="PriceText">
                                Das Anwaltshonorar wird frei vereinbart, es hängt von der Art, der Schwere, der Kompliziertheit der Sache und der Arbeitsmenge ab. Das Anwaltshonorar wird jedenfalls auf Grundlage von Stundengeld entweder als fixes Pauschalhonorar oder in bestimmten Sachen – wie zum Beispiel Verfassung von Kaufverträgen, Firmengründung, Ausübung von dauerhafter rechtlicher Vertretung – als fixes Pauschalhonorar oder in Höhe eines bestimmten Prozentsatzes des Streitwerts vereinbart.
                            </div>}
                        </td>
                        <td>
                            <img id="PriceImg" src="PriceImg.jpg" alt="PriceImg" />
                        </td>
                    </tr>
                </table>
                <img id="PriceImgMobile" src="PriceImg.jpg" alt="PriceImg" />
            </div>
        </div>
    )
}

export default Price