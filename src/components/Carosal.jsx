import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Carosal = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = () => {
      const imageUrls = Array.from({ length: 5 }, (_, index) => `https://picsum.photos/600/400?random=${index}`);
      setImages(imageUrls);
      setLoading(false);
    };

    fetchImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1900,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white z-10">
          <div className="loader">Loading...</div> {/* You can replace this with a spinner */}
        </div>
      )}
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="flex justify-center items-center">
            <img 
              className="w-full h-96 rounded-lg" 
              src={src} 
              alt={`Image ${index + 1}`} 
              onLoad={() => setLoading(false)} // Set loading to false when the image loads
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/600"; 
              }} // Placeholder for broken images
            />
            <h1 className='p-8 ml-12 bg-amber-300'>kishan kumar</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Custom next arrow component
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 right-4 transform -translate-y-1/2 bg-red-500 rounded-full p-3 text-white cursor-pointer z-10`}
      style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", fontSize: "24px" }} // Increased size
      onClick={onClick}
    >
      &gt;
    </div>
  );
}

// Custom previous arrow component
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 rounded-full p-12 text-white cursor-pointer z-10`}
      style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", width: "150px", height: "150px", fontSize: "124px" }} // Increased size
      onClick={onClick}
    >
      &lt;
    </div>
  );
}

export default Carosal;