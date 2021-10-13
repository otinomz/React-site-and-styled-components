import React from 'react'
import { Container } from '../../globalStyles'
import {
    InfoRow,
    InfoColumn,
    InfoSec,
    TextWrapper
} from './Info.elements'

const Info = ({ lightBg, imgStart }) => {
    return (
        <>
            <InfoSec lightBg = {lightBg}>
                <Container>
                    <InfoRow imgStart = {imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Heading>
                                <Link to="/sign-up">
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default Info
