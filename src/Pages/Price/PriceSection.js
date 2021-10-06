import "./PriceSection.css"

const Price = () =>{
    return(
        <div id="Price">
            <div id="PriceTitle">
                Munkadíj
            </div>
            <div>
                <table>
                    <tr>
                        <td>
                        <div id="PriceText">
                            Az ügyvédi munkadíj szabad megállapodás tárgya, mely függ az ügy jellegétől,  súlyától, bonyolultságától, valamint a munka mennyiségétől. A munkadíj minden esetben óradíjas alapon, fix összegben, meghatározott ügyekben - így pl. adásvételi szerződések szerkesztése, cégalapítás, tartós jogi képviselet ellátása során) százalékban vagy fix összegben kerül meghatározásra.
                         </div>
                        </td>
                        <td>
                            <img id="PriceImg" src="PriceImg.jpg" alt="PriceImg"/>
                        </td>
                    </tr>
                </table>
                <img id="PriceImgMobile" src="PriceImg.jpg" alt="PriceImg"/>
            </div>
        </div>
    )
}

export default Price