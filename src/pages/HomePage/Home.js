import React from 'react'
import { Info } from '../../components'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'

const Home = () => {
    return (
        <>
            <Info {...homeObjOne} />
            <Info {...homeObjTwo} />
            <Info {...homeObjThree}/>
        </>
    )
}

export default Home
