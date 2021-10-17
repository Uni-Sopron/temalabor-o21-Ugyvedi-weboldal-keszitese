import './HIW.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const HIW = () => {

    return (
        <div id="HIW">
            <div id="title">
                Hogyan dolgozom?
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<div class="number">1</div>}
                >
                    <h3 className="vertical-timeline-element-title">Időpont egyeztetés:</h3>
                    <p>
                        Amennyiben úgy érzi jogi segítségre van szüksége, Gyors, hatékony és megbízható képviseletet keres, úgy Sopron belvárosában található irodámban állok rendelkezésére.
                        Kérdéseivel keressen bizalommal telefonon a +3630/6838822-es telefonszámon vagy egyeztetés céljából foglaljon időpontot akár e-mailen is: (dr.keseru.klaudia@gmail.com).
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<div class="number">2</div>}
                >
                    <h3 className="vertical-timeline-element-title">Az ügy áttekintése:</h3>
                    <p>
                        Az esetek sokszínűsége indukálja az ügyvédi tevékenység sokrétűségét. A jogszabályok folyamatosan módosulnak, ezért az adott ügytípus sajátosságaira, jellegére is figyelemmel - az Ön által előadott, rendelkezésre bocsátott információkat alapul véve - kiemelkedő hangsúlyt fektetek a naprakészségre a tényállás tisztázása során.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<div class="number">3</div>}
                >
                    <h3 className="vertical-timeline-element-title">Stratégia:</h3>
                    <p>
                        Az ügy lényegi feltérképezését, a tényállási elemek rögzítését követően felvázolom a jogi megoldási lehetőségeket, azok kivitelezési módját, majd kiválasztjuk az Ön által is elfogadott, legmegfelelőbb javaslatot.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<div class="number">4</div>}
                >
                    <h3 className="vertical-timeline-element-title">Kivitelezés: </h3>
                    <p>
                        Amennyiben Önnek is megfelel az általam felvázolt megoldás a jogi problémájára, úgy megkezdjük közös munkánkat.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default HIW

/*

should be at contacts
{
    title:'F',
    url:'#',
    cName:'nav-links'
},
{
    title:'E',
    url:'#',
    cName:'nav-links'
},
{
    title:'S',
    url:'#',
    cName:'nav-links'
}*/