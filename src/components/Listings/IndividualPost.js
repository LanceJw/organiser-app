import React from "react";
import styled from 'styled-components'
import { useState, Fragment, useEffect } from 'react'

import { DevelopersData } from "../Developers/DevelopersData";

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 70%;
margin: auto;
height: 300px;
box-shadow: 0px 5px 10px 0px #cccccc;
margin-bottom: 1.5rem;
border-radius: 10px;
max-width: 1300px;
`

const Developer = styled.div`
width: 250px;
padding: 20px 15px 15px 15px;
display: flex;
flex-direction: column;
`

const Information = styled.div`
display: flex;
flex-direction: column;
width: 40%;
padding: 20px 15px 15px 25px;
gap: 0.8rem;
`

const Address = styled.div`
display: flex;
flex-direction: column;
`

const Size = styled.div`

`

const Price = styled.div`

`

const Image = styled.div`
width: 40%;
`

const Features = styled.div`
width: 40%;
display: flex;
justify-content: space-between;
`

const MobileContainer = styled.div`
width: 80%;
margin: auto;
box-shadow: 0px 5px 10px 0px #cccccc;
margin-bottom: 2rem;
`

const MobileImage = styled.div`
width: 100%;
`

const MobileInformation = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 0.8rem;
margin-top: 0.5rem;
`

const MobileAddress = styled.div`
display: flex;
flex-direction: column;
`

const MobileDeveloper = styled.div`
width: 80%;
display: flex;
flex-direction: row;
align-items: center;
`



const IndividualPost = (props) => {

    const currencyFormat = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    });

    const numberFormat = Intl.NumberFormat()

    const [state, setState] = useState({
        mobileView: false,
    });

    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1100
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    const displayDesktop = () => {
        return (
            <Container>
                <Image>
                    <img style={{ width: '100%', height: '100%', borderRadius: '10px' }} src={props.data.imageUrl} alt="Log" />
                </Image>
                {/* <Image src={require('../../assets/1C_Mayfield_Avenue.jpg')} /> */}

                <Information>
                    <Address>
                        <span style={{ marginRight: '1rem', fontSize: '20px' }}>{props.data.address}</span>
                        <span style={{ fontWeight: 'bold', color: '#e30536', fontSize: '14px', margin: '0.3rem 0rem 0.3rem' }}>{props.data.district}</span>
                    </Address>

                    <Size>
                        <span style={{ marginRight: '1rem' }}>Land Size: <strong>{numberFormat.format(props.data.landSize)}</strong> sqft</span>
                        <span>Built Up: <strong>{numberFormat.format(props.data.builtUp)}</strong> sqft</span>
                    </Size>

                    <Price>
                        <span style={{ marginRight: '1rem' }}>Asking Price: <strong>{currencyFormat.format(props.data.askingPrice)}</strong></span>
                        <span>({currencyFormat.format((props.data.askingPrice / props.data.landSize).toFixed(0))} psf)</span>
                    </Price>

                    <Features>


                        {(props.data.features).length !== 0 &&
                            props.data.features.map((item) => {
                                return (
                                    <span>{item}</span>
                                )
                            })
                        }
                    </Features>
                    {/* <Value>{data.lift}</Value>
                <Value>{data.pool}</Value> */}
                </Information>

                <Developer>
                    <span>{props.data.developer}</span>
                    {DevelopersData.map((data) => {
                        if (data.developer === props.data.developer) {
                            return (
                                <span style={{ color: '#e30536', fontWeight: 'bold', marginTop: '0.3rem' }}>{data.number}</span>
                            )
                        }
                    })}
                </Developer>
                {/* {DevelopersData.filter(e => e.developer === props.data.developer)} */}


            </Container>
        )
    }


    const displayMobile = () => {
        return (
            <MobileContainer>
                <MobileImage>
                    <img style={{ width: '100%', height: '100%', borderRadius: '10px' }} src={props.data.imageUrl} alt="Log" />
                </MobileImage>
                {/* <Image src={require('../../assets/1C_Mayfield_Avenue.jpg')} /> */}

                <MobileInformation>
                    <MobileAddress>
                        <span style={{ marginRight: '1rem', fontSize: '22px' }}>{props.data.address}</span>
                        <span style={{ fontWeight: 'bold', color: '#e30536', fontSize: '14px', margin: '0.3rem 0rem 0.3rem' }}>{props.data.district}</span>
                    </MobileAddress>

                    <Size>
                        <span style={{ marginRight: '1rem' }}>Land Size: <strong>{numberFormat.format(props.data.landSize)}</strong> sqft</span>
                        <span>Built Up: <strong>{numberFormat.format(props.data.builtUp)}</strong> sqft</span>
                    </Size>

                    <Price>
                        <span style={{ marginRight: '1rem' }}>Asking Price: <strong>{currencyFormat.format(props.data.askingPrice)}</strong></span>
                        <span>({currencyFormat.format((props.data.askingPrice / props.data.landSize).toFixed(0))} psf)</span>
                    </Price>

                    <Features>


                    {(props.data.features).length !== 0 &&
                        props.data.features.map((item) => {
                            return (
                                <span>{item}</span>
                            )
                        })
                    }
                    </Features>
                    {/* <Value>{data.lift}</Value>
                    <Value>{data.pool}</Value> */}
                </MobileInformation>

                <MobileDeveloper>
                    <span>{props.data.developer}</span>
                    {DevelopersData.map((data) => {
                        if (data.developer === props.data.developer) {
                            return (
                                <span style={{ color: '#e30536', fontWeight: 'bold'}}>{data.number}</span>
                            )
                        }
                    })}
                </MobileDeveloper>
                {/* {DevelopersData.filter(e => e.developer === props.data.developer)} */}


            </MobileContainer>
        )
    }

    return (
        <Fragment>
            {mobileView ? displayMobile() : displayDesktop()}
        </Fragment>
    )
}

export default IndividualPost