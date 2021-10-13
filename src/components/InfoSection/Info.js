import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from '../../globalStyles'
// import Imgs from '../../../src/images/bg.svg'
import {
    InfoRow,
    InfoColumn,
    InfoSec,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './Info.elements'

const Info = ({
    lightBg,
    imgStart,
    lightTopLine,
    lightTextDesc,
    buttonLabel,
    description,
    headline,
    topLine,
    primary,
    lightText,
    img,
    alt,
    start }) => {
    
    return (
        <>
            <InfoSec lightBg = {lightBg}>
                <Container>
                    <InfoRow imgStart = {imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine} </TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to="/sign-up">
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default Info
