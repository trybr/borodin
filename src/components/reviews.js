import * as React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useStaticQuery, graphql } from "gatsby";
import { Swiper, SwiperSlide } from 'swiper/react';
import Review from "../components/review";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Reviews = () => {
    const { allContentfulReviews } = useStaticQuery(
        graphql`
            query {
              allContentfulReviews(
                filter: {node_locale: {eq: "ru-RU"}}
              ) {
                nodes {
                    id
                    fio
                    post
                    id
                    avatar {
                        file {
                        url
                        }
                    }
                    text {
                        text
                    }
                }
              }
            }
        `
    )

    return(
        <div className="reviews section">
            <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="reviews-title title-h2">Отзывы</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="reviews-slider-desktop">
                                <Swiper
                                spaceBetween={30}
                                slidesPerView={2}
                                navigation
                                loop={true}
                                pagination={{ clickable: true }}
                                >
                                    {
                                        allContentfulReviews.nodes.map((node, i) => (
                                            <SwiperSlide key={`rd-${node.id}`}>
                                                <Review content={node} />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                            <div className="reviews-slider-mobile">
                                <Swiper
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    loop={true}
                                    pagination={{ clickable: true }}
                                    >
                                    {
                                        allContentfulReviews.nodes.map((node, i) => (
                                            <SwiperSlide key={`rm-${node.id}`}>
                                                <Review content={node} />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Reviews