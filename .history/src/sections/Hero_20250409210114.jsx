import { useMediaQuery } from 'react-responsive';
import Button from '../components/Button.jsx';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="min-h-screen w-full flex flex-col relative overflow-hidden" id="home">
      {/* Text content */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10 relative">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Bharanitharan <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient text-center">Building Products & Brands</p>
      </div>

      {/* Conditionally render Spline only on non-low-end devices */}
      {!isMobile && (
        <div className="w-full h-full absolute inset-0 z-0">
          <iframe
            src="https://my.spline.design/componentuicopy-667af28764106846be5a515e92fd64dc/"
            frameBorder="0"
            width="100%"
            height="100%"
            title="Spline 3D"
            loading="lazy"
            style={{ pointerEvents: 'none' }}></iframe>
        </div>
      )}

      {/* For mobile, show a fallback image instead of iframe for better performance */}
      {isMobile && (
        <div className="w-full h-full absolute inset-0 z-0">
          <img
            src="/fallback-mobile-3d.jpg"
            alt="Fallback 3D Visual"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* CTA Button */}
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
