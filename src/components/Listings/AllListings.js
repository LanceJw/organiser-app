// import styled from 'styled-components';
import { ListingsData } from './ListingsData';
import IndividualPost from './IndividualPost';
// import { DevelopersData } from './components/Developers/DevelopersData';
import { useState, Fragment, useEffect } from 'react'
import styled from 'styled-components'

const FilterContainer = styled.div`
width: 70%;
margin: 2rem auto 1.5rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

const Button = styled.span`
border: 1px solid black;
height: 25px;
border-radius: 5px;
cursor: pointer;
display: inline-flex;
align-items: center;
justify-content: center;
padding: 4px 10px;
`

const FilterModal = styled.div`
position: absolute;
width: 48%;
left: 26%;
top: 12%;
height: 650px;
background-color: white;
z-index: 1;
border-radius: 10px;
border: 1px solid black;
padding-top: 1rem;
`

const ApplyButton = styled.span`
padding: 8px 6px;
background-color: #d1291d;
color: white;
width: 15%;
text-align: center;
border-radius: 10px;
cursor: pointer;
`

const DistrictList = styled.div`
width: 90%;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 1.3rem;
margin: 0.8rem auto 0.6rem;
padding-bottom: 1rem;
align-items: center;
`

const ClearButton = styled.span`
color: #e03c31;
font-weight: 500;
cursor: pointer;
`

const ModalFeatures = styled.div`
width: 90%;
margin: auto;
display: flex;
flex-direction: row;
gap: 1rem;
margin: 1rem auto 1rem;
font-size: 18px;
`

const ButtonContainer = styled.div`
width: 100%;
border-top: 1px solid #b5b5b5;
height: 70px;
`

const SearchFilter = styled.input`
width: 80%;
height: 25px;
padding: 4px 0px 4px 10px;
border: 1px solid black;
border-radius: 5px;
`

const MobileFilterContainer = styled.div`
width: 80%;
margin: 2rem auto 1.5rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

const MobileSearchFilter = styled.input`
width: 80%;
height: 25px;
padding: 4px 0px 4px 10px;
border: 1px solid black;
border-radius: 5px;
margin-bottom: 1rem;
`

const MobileFilterModal = styled.div`
position: absolute;
width: 90%;
left: 5%;
top: 10%;
height: 650px;
background-color: white;
z-index: 1;
border-radius: 10px;
border: 1px solid black;
padding-top: 1rem;
`

const MobileApplyButton = styled.span`
padding: 8px 6px;
background-color: #d1291d;
color: white;
width: 22%;
text-align: center;
border-radius: 10px;
cursor: pointer;
`



const AllListings = ({ openFilterHandler, closeFilterHandler }) => {

    const District = [
        "D01 Boat Quay / Raffles Place / Marina",
        "D02 Chinatown / Tanjong Pagar",
        "D03 Alexandra / Commonwealth",
        "D04 Harbourfront / Telok Blangah",
        "D05 Buona Vista / West Coast / Clementi New Town",
        "D06 City Hall / Clarke Quay",
        "D07 Beach Road / Bugis / Rochor",
        "D08 Farrer Park / Serangoon Rd",
        "D09 Orchard / River Valley",
        "D10 Tanglin / Holland / Bukit Timah",
        "D11 Newton / Novena",
        "D12 Balestier / Toa Payoh",
        "D13 Macpherson / Potong Pasir",
        "D14 Eunos / Geylang / Paya Lebar",
        "D15 East Coast / Marine Parade",
        "D16 Bedok / Upper East Coast",
        "D17 Changi Airport / Changi Village",
        "D18 Pasir Ris / Tampines",
        "D19 Hougang / Punggol / Sengkang",
        "D20 Ang Mo Kio / Bishan / Thomson",
        "D21 Clementi Park / Upper Bukit Timah",
        "D22 Boon Lay / Jurong / Tuas",
        "D23 Dairy Farm / Bukit Panjang / Choa Chu Kang",
        "D24 Lim Chu Kang / Tengah",
        "D25 Admiralty / Woodlands",
        "D26 Mandai / Upper Thomson",
        "D27 Sembawang / Yishun",
        "D28 Seletar / Yio Chu Kang"
    ]

    const Features = [
        "Lift",
        "Pool"
    ]

    const [listing, setListing] = useState(ListingsData)
    const [openFilter, setOpenFilter] = useState(false)

    const [selectedDistrict, setSelectedDistrict] = useState([])


    const [tempSelectedDistrict, setTempSelectedDistrict] = useState([])

    const handleFilter = (district) => {
        // if(selectedDistrict.includes(district)) {
        //     let filters = selectedDistrict.filter((el) => el !== district)
        //     setSelectedDistrict(filters)
        // } else {
        //     setSelectedDistrict([...selectedDistrict, district])
        // }

        if (tempSelectedDistrict.includes(district)) {
            let filters = tempSelectedDistrict.filter((el) => el !== district)
            setTempSelectedDistrict(filters)
        } else {
            setTempSelectedDistrict([...tempSelectedDistrict, district])
        }
    }

    const [filterFeatures, setFilterFeatures] = useState([])
    const [tempSelectedFeature, setTempSelectedFeature] = useState([])

    const handleFeatureFilter = (feature) => {
        if (tempSelectedFeature.includes(feature)) {
            let featureFilter = tempSelectedFeature.filter((el) => el !== feature)
            setTempSelectedFeature(featureFilter)
            console.log(tempSelectedFeature)
        } else {
            setTempSelectedFeature([...tempSelectedFeature, feature])
        }
    }

    useEffect(() => {
        filterItems()
    }, [selectedDistrict])

    const filterItems = () => {
        if (selectedDistrict.length > 0) {
            let tempItems = selectedDistrict.map((selectDistrict) => {
                let temp = ListingsData.filter((item) => item.district === selectDistrict)
                return temp;
            })
            // if (filterFeatures.length > 0) {
            //     console.log(tempItems)
            //     let tempStorage = filterFeatures.map((selectedFeature) => {
            //         let temp = tempItems.filter((tempItems.features).includes(selectedFeature))
            //         console.log(temp)
            //         return temp;
            //     })
            //     console.log(tempStorage)
            //     setListing(tempStorage.flat())
            //     console.log("feature")
            // }

            setListing(tempItems.flat())
        }


        // if (filterLift) {
        //     tempItems = tempItems.map((data) => {
        //         let temp = data.filter((item) => item.lift === filteredLift)
        //         return temp;
        //     })
        //     setListing(tempItems.flat())
        // }

        // if (filterPool) {
        //     tempItems = tempItems.map((data) => {
        //         let temp = data.filter((item) => item.pool === filteredPool)
        //         return temp;
        //     })
        //     setListing(tempItems.flat())
        // }
        else {
            setListing([...ListingsData])
        }
    }

    const openFilterButton = () => {
        openFilterHandler()
        setOpenFilter(true)
    }

    const closeFilterButton = () => {
        closeFilterHandler()
        setOpenFilter(false)
    }

    // const [filterLift, setFilterLift] = useState(false)
    // const [filterPool, setFilterPool] = useState(false)

    // const [filteredLift, setFilteredLift] = useState("")
    // const [filteredPool, setFilteredPool] = useState("")

    const [checkedStatus, setCheckedStatus] = useState(
        new Array(District.length).fill(false)
    )

    const handleCheckboxStatus = (position) => {
        const updatedCheckedStatus = checkedStatus.map((item, index) =>
            index === position ? !item : item
        )
        setCheckedStatus(updatedCheckedStatus)
    }

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
            <Fragment>

                {openFilter &&
                    <FilterModal>
                        <div style={{ overflowY: 'auto', height: '580px' }}>
                            <p style={{ fontWeight: 'bold', fontSize: '18px', width: '90%', margin: 'auto' }}>District</p>
                            <DistrictList>
                                {District.map((district, index) => {
                                    return (
                                        <div style={{ display: 'flex', flexDirection: 'row', gap: '0.4rem' }}>
                                            <input type="checkbox" id={district}
                                                onClick={() => {
                                                    handleFilter(district)
                                                    handleCheckboxStatus(index)
                                                }}
                                                checked={checkedStatus[index]}
                                            />
                                            <div>
                                                <label htmlFor={district}>{district}</label>
                                            </div>
                                        </div>
                                    )
                                })}
                            </DistrictList>

                            {/* <div style={{ width: '90%', borderTop: '1px solid #b5b5b5', margin: 'auto' }} /> */}

                            {/* <ModalFeatures>
                            {Features.map((feature) => {
                                return (
                                    <Fragment>
                                        <input type="checkbox" id={feature} 
                                            onClick={(e) => {
                                                if (e.target.checked) {
                                                    handleFeatureFilter(feature)
                                                } else {
                                                    console.log("error")
                                                }
                                            }}
                                        />
                                        <label htmlFor={feature}>{feature}</label>
                                    </Fragment>
                                )
                            })}
                            <div>
                            <input type="checkbox" value="Lift"
                                onClick={(e) => {
                                    if (e.target.checked) {
                                        setFilterLift(true)
                                        setFilteredLift("True")
                                    } else {
                                        setFilterLift(false)
                                    }
                                }}
                            /><label for="Lift">Lift</label>
                            </div>
                            <div>
                            <input type="checkbox" value="Pool"
                                onClick={(e) => {
                                    if (e.target.checked) {
                                        setFilterPool(true)
                                        setFilteredPool("True")
                                    } else {
                                        setFilterPool(false)
                                    }
                                }}
                            /><label for="Pool">Pool</label>
                            </div>
                        </ModalFeatures> */}
                        </div>

                        {/* <div style={{width: '90%', margin: 'auto', height: '50px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem', position: 'aboslute'}}> */}
                        <ButtonContainer>
                            <div style={{ width: '90%', margin: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                                <ClearButton onClick={() => {
                                    setListing(ListingsData)
                                    closeFilterButton()
                                    setCheckedStatus(new Array(District.length).fill(false))
                                }}>
                                    Clear Filter</ClearButton>
                                <ApplyButton onClick={() => {
                                    closeFilterButton()
                                    setSelectedDistrict(tempSelectedDistrict)
                                    setFilterFeatures(tempSelectedFeature)
                                }}>Apply Filter</ApplyButton>
                            </div>
                            {/* </div> */}

                        </ButtonContainer>
                    </FilterModal>
                }

                <div style={{ position: "relative", opacity: openFilter ? '0.3' : '1' }}>
                    {/* <span onClick={() => { setListing(ListingsData) }}>Reset</span> */}

                    <FilterContainer>
                        <SearchFilter type="search-box" placeholder='Search Location' />
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '14%', justifyContent: 'space-between' }}>
                            <Button onClick={(openFilterButton)}>Filter</Button>
                            <Button style={{ color: '#e03c31' }} onClick={() => { setListing(ListingsData) }}>Clear Filter</Button>
                        </div>
                    </FilterContainer>


                    {listing.map((data) => {
                        return (
                            <IndividualPost
                                data={data}
                            />
                        )
                    })}
                </div>
            </Fragment>
        )
    }

    const displayMobile = () => {
        return (
            <Fragment>

                {openFilter &&
                    <MobileFilterModal>
                        <div style={{ overflowY: 'auto', height: '580px' }}>
                            <p style={{ fontWeight: 'bold', fontSize: '18px', width: '90%', margin: 'auto' }}>District</p>
                            <DistrictList>
                                {District.map((district, index) => {
                                    return (
                                        <div style={{ display: 'flex', flexDirection: 'row', gap: '0.4rem' }}>
                                            <input type="checkbox" id={district}
                                                onClick={() => {
                                                    handleFilter(district)
                                                    handleCheckboxStatus(index)
                                                }}
                                                checked={checkedStatus[index]}
                                            />
                                            <div>
                                                <label htmlFor={district}>{district}</label>
                                            </div>
                                        </div>
                                    )
                                })}
                            </DistrictList>

                            {/* <div style={{ width: '90%', borderTop: '1px solid #b5b5b5', margin: 'auto' }} /> */}

                            {/* <ModalFeatures>
                        {Features.map((feature) => {
                            return (
                                <Fragment>
                                    <input type="checkbox" id={feature} 
                                        onClick={(e) => {
                                            if (e.target.checked) {
                                                handleFeatureFilter(feature)
                                            } else {
                                                console.log("error")
                                            }
                                        }}
                                    />
                                    <label htmlFor={feature}>{feature}</label>
                                </Fragment>
                            )
                        })}
                        <div>
                        <input type="checkbox" value="Lift"
                            onClick={(e) => {
                                if (e.target.checked) {
                                    setFilterLift(true)
                                    setFilteredLift("True")
                                } else {
                                    setFilterLift(false)
                                }
                            }}
                        /><label for="Lift">Lift</label>
                        </div>
                        <div>
                        <input type="checkbox" value="Pool"
                            onClick={(e) => {
                                if (e.target.checked) {
                                    setFilterPool(true)
                                    setFilteredPool("True")
                                } else {
                                    setFilterPool(false)
                                }
                            }}
                        /><label for="Pool">Pool</label>
                        </div>
                    </ModalFeatures> */}
                        </div>

                        {/* <div style={{width: '90%', margin: 'auto', height: '50px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem', position: 'aboslute'}}> */}
                        <ButtonContainer>
                            <div style={{ width: '90%', margin: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                                <ClearButton onClick={() => {
                                    setListing(ListingsData)
                                    closeFilterButton()
                                    setCheckedStatus(new Array(District.length).fill(false))
                                }}>
                                    Clear Filter</ClearButton>
                                <MobileApplyButton onClick={() => {
                                    closeFilterButton()
                                    setSelectedDistrict(tempSelectedDistrict)
                                    setFilterFeatures(tempSelectedFeature)
                                }}>Apply Filter</MobileApplyButton>
                            </div>
                            {/* </div> */}

                        </ButtonContainer>
                    </MobileFilterModal>
                }

                <div style={{ position: "relative", opacity: openFilter ? '0.3' : '1' }}>
                    {/* <span onClick={() => { setListing(ListingsData) }}>Reset</span> */}

                    <MobileFilterContainer>
                        <MobileSearchFilter type="search-box" placeholder='Search Location' />
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '40%', justifyContent: 'space-between' }}>
                            <Button onClick={(openFilterButton)}>Filter</Button>
                            <Button style={{ color: '#e03c31' }} onClick={() => { setListing(ListingsData) }}>Clear Filter</Button>
                        </div>
                    </MobileFilterContainer>


                    {listing.map((data) => {
                        return (
                            <IndividualPost
                                data={data}
                            />
                        )
                    })}
                </div>
            </Fragment>
        )
    }


    return (
        <Fragment>
            {mobileView ? displayMobile() : displayDesktop()}
        </Fragment>
    )
}

export default AllListings