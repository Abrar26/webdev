import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

const Service = () => {
    return (
        <>
            <div className="home-head service-head">
                <h3>SERVICES</h3>
            </div>
            <div className="service">
                <div className="swiper-wrapper ">
                <Swiper pagination={true} className="mySwiper service-center">
                    <SwiperSlide>
                        <div className="card service-card">
                            <div className="card-header">
                                Development
                            </div>
                            <div className="card-body">
                                Building a custom tailored solution 
                                based on your technical specification
                                Specification will be Fullfilled 100% as
                                per Customer Requirement. And will be Deployed
                                as Fast as possible.
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="card service-card">
                        <div className="card-header">
                            Mobile Responsive
                        </div>
                        <div className="card-body">
                            Mobile Responsive and User friendly is impoertant.
                            And We make the Website Mobile Responsive in All Screen
                            Resolution. And Its a User Friendly which means Client
                            can be able use very Freely
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="card service-card">
                        <div className="card-header">
                            Data Security
                        </div>
                        <div className="card-body">
                            Strategy with leading data protection
                            technology to safeguard your critical data.
                            Website will be made in such a way that both Client 
                            and Admin dont need to worry about Data.
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
                    </div>
            </div>
            
        </>
    )
}

export default Service;
