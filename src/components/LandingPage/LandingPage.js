import React from 'react'
import styled from 'styled-components'
import { useState, Fragment } from 'react'

import Navbar from '../Navbar/Navbar'
import AllListings from '../Listings/AllListings'


const LandingPage = () => {

    const [openFilter, setOpenFilter] = useState(false)
    const [listingModal, setListingModal] = useState(false)

    const openFilterHandler = () => {
      setOpenFilter(true)
    }
  
    const closeFilterHandler = () => {
      setOpenFilter(false)
    }

    const openListingModal = () => {
        setListingModal(true)
    }

    return (
        <Fragment>
            <div>
                <Navbar openFilter={openFilter} openListingModal={openListingModal}/>
                <AllListings openFilterHandler={openFilterHandler} closeFilterHandler={closeFilterHandler} />
            </div>
        </Fragment>
    )
}

export default LandingPage