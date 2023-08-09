import React from "react";
import styled from 'styled-components'
import { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

const Container = styled.div`
background-color: #912f45;
height: 80px;
color: white;
`

const NavigationBar = styled.div`
display: flex;
justify-content: space-between;
height: 100%;
align-items: center;
width: 40%;
margin: auto;
max-width: 1300px;
`

const ListingButton = styled.span`
padding: 6px 12px;
background-color: white;
border: none;
border-radius: 5px;
color: black;
cursor: pointer;
`

const AddListingModal = styled.div`
position: absolute;
width: 50%;availableFeatures
left: 25%;
top: 250%;
height: 650px;
background-color: lightblue;
z-index: 1;
border-radius: 10px;
`

const Navbar = ({openFilter, openListingModal}) => {

    const [addListingModal, setAddListingModal] = useState(false)

    return (
        <div style={{position: 'relative'}}>

            {addListingModal && 
                <AddListingModal>
                    
                </AddListingModal>
            }

            <Container style={{opacity: openFilter ? '0.5' : '1', opacity: addListingModal ? '0.5' : '1'}}>
                <NavigationBar>
                    {/* <ListingButton onClick={() => {
                        openListingModal}}
                    >Add Listing</ListingButton> */}
                    <Link style={{textDecoration: 'none', color: 'white'}} to='/'>Listings</Link>
                    <Link style={{textDecoration: 'none', color: 'white'}} to='/developers'>Developers</Link>
                </NavigationBar>
            </Container>
        </div>
    )
}

export default Navbar