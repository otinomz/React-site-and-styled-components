import styled from "styled-components";

export const InfoSec = styled.div`
    /* color: #fff; */
    color: white;
    padding: 160px 0;
    background: ${({lightBg}) => (lightBg ? '#101522' : '#101522')};

`

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media (max-width: 768px) {
        width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }  

`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    
    @media (max-width: 768px) {
        padding-bottom: 65px;
    
    } 

`
