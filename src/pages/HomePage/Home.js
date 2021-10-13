import React from 'react'
import { Info } from '../../components'
import { homeObjOne } from './Data'

const Home = () => {
    return (
        <>
            <Info {...homeObjOne}/>
        </>
    )
}

export default Home
