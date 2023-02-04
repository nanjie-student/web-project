import {useRef} from 'react';
import './About.css';
function About(){
    const subscribeRef = useRef(null);
    return(
        <div className="about">
            <h2 className="about__title">Lama's infomation</h2>
            <dialog className="subscribe__modal" ref= {subscribeRef}>
                <span className="subscribe__text">
                    Subscribe to my newsletter!
                </span>
                <div className="subscribe__controls">
                    <button 
                    onClick={() =>{
                    }}
                    className="subscribe__confirm"
                    >Confirm
                    </button>
                    <button 
                    onClick ={() =>{
                    subscribeRef.current.close();
                    }}
                    className="subscribe__cancel"
                    >Cancel</button>
                </div>
            </dialog>
            <div className="subscribe__controls">
                <img className="subscribe__logo" src="/images/LonelyLama.jpg" alt="a lonely lama"/>
                <span className="subscribe__content">The alpaca (Lama pacos) is a species of South American camelid mammal. 
            It is similar to, and often confused with, the llama. However, alpacas 
            are often noticeably smaller than llamas. The two animals are closely 
            related and can successfully crossbreed. Both species are believed to 
            have been domesticated from their wild relatives, the vicuña and guanaco. 
            There are two breeds of alpaca: the Suri alpaca and the Huacaya alpaca.
            Alpacas are kept in herds that graze on the level heights of the Andes of
            Southern Peru, Western Bolivia, Ecuador, and Northern Chile at an 
            altitude of 3,500 to 5,000 metres (11,000 to 16,000 feet) above sea level.
            Alpacas are considerably smaller than llamas, and unlike llamas, they were
            not bred to be working animals, but were bred specifically for their 
            fiber. Alpaca fiber is used for making knitted and woven items, similar 
            to sheep's wool. These items include blankets, sweaters, hats, gloves, 
            scarves, a wide variety of textiles, and ponchos, in South America, as 
            well as sweaters, socks, coats, and bedding in other parts of the world. 
            The fiber comes in more than 52 natural colors as classified in Peru, 12 
            as classified in Australia, and 16 as classified in the United States.
            Alpacas communicate through body language. The most common is spitting to 
            show dominance when they are in distress, fearful, or feel agitated. Male 
            alpacas are more aggressive than females, and tend to establish dominance 
            within their herd group. In some cases, alpha males will immobilize the 
            head and neck of a weaker or challenging male in order to show their strength 
            and dominance.In the textile industry, "alpaca" primarily refers to the 
            hair of Peruvian alpacas, but more broadly it refers to a style of fabric
            originally made from alpaca hair, such as mohair, Icelandic sheep wool, 
            or even high-quality wool from other breeds of sheep. In trade, distinctions 
            are made between alpacas and the several styles of mohair and luster.An adult
            alpaca generally is between 81 and 99 centimetres (32 and 39 inches) in 
            height at the shoulders (withers). They usually weigh between 48 and 90 
            kilograms (106 and 198 pounds).Raised in the same conditions, the difference 
            in weight can be small with males weighting around 22.3 kilograms (49 lb 3 oz) 
            and females 21.3 kilograms (46 lb 15 oz).
            </span>
            </div>
            <div className="subscribe__controls">
                <img className="subscribe__logo" src="/images/BrownLama.jpg" alt="Brown Lama"/>
                <p className="subscribe__content">The relationship between alpacas and vicuñas was disputed for many years. In the 
                18th and 19th centuries, the four South American lamoid species were assigned 
                scientific names. At that time, the alpaca was assumed to be descended from the 
                llama, ignoring similarities in size, fleece and dentition between the alpaca and 
                the vicuña. Classification was complicated by the fact that all four species of 
                South American camelid can interbreed and produce fertile offspring.The advent of 
                DNA technology made a more accurate classification possible.In 2001, the alpaca 
                genus classification changed from Lama pacos to Vicugna pacos, following the presentation 
                of a paper on work by Miranda Kadwell et al. on alpaca DNA to the Royal Society 
                showing the alpaca is descended from the vicuña, not the guanaco.</p>
            </div>
            
            <div className="about__button">
            <button 
            className="subscribe__open"
            onClick ={() => {
            subscribeRef.current.showModal();
            }}
            >Subscribe</button>
            </div>
            
    </div>
    );
    
}
export default About;