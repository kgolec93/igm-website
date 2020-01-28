import React from 'react'
import bgOffer from '../../assets/sections/bg-offer.jpg'
import Jumbo from '../Jumbo/Jumbo'

export const index = () => {
    return (
        <div id='offerPageContainer'>
            <Jumbo
                bgImage={bgOffer}
                alt={'Oferta'}
                header={'Oferta'}
            />
        </div>
    )
}

export default index
