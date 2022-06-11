// import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import TrendingCard from './TrendingCard'
import Carousel from "react-simply-carousel";
import { useState, useMemo } from 'react';

const Trending = () => {
    const data = useSelector(store => store.data.array)

    const [activeSlide, setActiveSlide] = useState(0);

    const trending = useMemo(() => {
        const isTrue = () => {
            return data.filter(aux => aux.isTrending === true)
        }
        return isTrue()
    }, [data])

    return (
        <div className='trending-container'>
            <h2>Trending</h2>
            <div className='card-trending-container'>
                <Carousel
                    updateOnItemClick
                    activeSlideIndex={activeSlide}
                    onRequestChange={setActiveSlide}
                    forwardBtnProps={{
                        //here you can also pass className, or any other button element attributes
                        style: {
                          alignSelf: 'center',
                          background: 'black',
                          border: 'none',
                          borderRadius: '50%',
                          color: 'white',
                          cursor: 'pointer',
                          fontSize: '20px',
                          height: 30,
                          lineHeight: 1,
                          textAlign: 'center',
                          width: 30,
                        },
                        children: <span>{`>`}</span>,
                      }}
                    backwardBtnProps={{
                        //here you can also pass className, or any other button element attributes
                        style: {
                          alignSelf: 'center',
                          background: 'black',
                          border: 'none',
                          borderRadius: '50%',
                          color: 'white',
                          cursor: 'pointer',
                          fontSize: '20px',
                          height: 30,
                          lineHeight: 1,
                          textAlign: 'center',
                          width: 30,
                        },
                        children: <span>{`<`}</span>,
                      }}
                    dotsNav={{
                        show: false,
                        itemBtnProps: {
                            style: {
                            height: 16,
                            width: 16,
                            borderRadius: "50%",
                            border: 0
                            }
                        },
                        activeItemBtnProps: {
                            style: {
                            height: 16,
                            width: 16,
                            borderRadius: "50%",
                            border: 0,
                            background: "black"
                            }
                        }
                    }}
                    itemsToShow={3.5}
                    speed={600}
                >   
                    {
                        trending.map((item, index) => (
                            <TrendingCard key={index} props={item} />
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Trending