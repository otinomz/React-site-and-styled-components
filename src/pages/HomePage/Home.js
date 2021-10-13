import React from 'react'
import { InfoSec } from '../../components/InfoSection/Info.elements'
import { homeObjectOne } from './Data'

const Home = () => {
    return (
        <>
            <InfoSec {...homeObjectOne}/>
        </>
    )
}

export default Home
