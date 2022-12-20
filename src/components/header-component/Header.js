import { useState } from "react"
import './Header.css'
let images = [
    {
        id:1, 
        src:'assets/img1.jpg'
    }, 
    {
        id:2, 
        src:'assets/img2.jpg'
    },
    {
        id:3, 
        src:'assets/img3.jpg'
    }]
    
const Header = () =>{
    const [img] = useState(images)
    const [currentImage, setCurrentImage] = useState(0);
    const nextSlide = () => {
        if(currentImage === (img.length - 1)) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1)
        }
    }

    const prevSlide = () => {
        if(currentImage === 0) {
            setCurrentImage(img.length - 1);
        } else {
            setCurrentImage(currentImage - 1)
        }
    }


    return <header>     
        <div className="carousel">
            <div className="slideshow-container">
                    <div className="mySlides">
                        <img src={img[currentImage].src} className="mySlides" alt=""/>    
                    </div>
                    <button className="prev" onClick={prevSlide}>&#10094;</button>
                    <button className="next" onClick={nextSlide}>&#10095;</button>
            </div>
        </div> 
    </header>
}


export default Header;
