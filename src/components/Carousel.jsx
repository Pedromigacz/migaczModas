import React, { useRef } from 'react';
import styles from '../styles/Carousel.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SliderActionIndicator from '../vectors/sliderActionIndicator.inline.svg'

const Carousel = () => {
    const sliderRef = useRef()
    const { allStrapiCarrossel: { nodes: [{ imagensDoCarrossel }] } } = useStaticQuery(graphql`
    {
        allStrapiCarrossel {
            nodes {
                imagensDoCarrossel {
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 1280, maxHeight: 720) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
    `)

    const nextSlide = () => {
        sliderRef.current.slickNext()
    }
    
    const prevSlide = () => {
        sliderRef.current.slickPrev()
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };    

    return (
        <>
            <div className={styles.carouselContainer}>
                <Slider className={styles.ImagesExternalContainer} {...settings} ref={sliderRef}>
                    {imagensDoCarrossel.map(carouselImage => (
                        <div className={styles.imageContainer}>
                            <Img fluid={carouselImage.localFile.childImageSharp.fluid}/>
                        </div>
                    ))}
                </Slider>
                <button aria-label="Next slide" onClick={prevSlide} className={styles.sliderButtons}><SliderActionIndicator /></button>
                <button aria-label="Previous slide" onClick={nextSlide} className={styles.sliderButtons + ' ' + styles.sliderRightButton}><SliderActionIndicator  className={styles.carouselButtonRight} /></button>
            </div>
        </>
    );
}
 
export default Carousel;
