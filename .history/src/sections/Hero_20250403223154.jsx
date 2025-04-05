import { Leva } from 'leva';
import { useMediaQuery } from 'react-responsive';
import Button from '../components/Button.jsx';
import { calculateSizes } from '../constants/index.js';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-between relative" id="home">
      {/* Text Content */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 text-center">
        <p className="sm:text-3xl text-xl font-medium text-white font-generalsans">
          Hi, I am Bharanitharan <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Crafting UI/UX to Scrolling Websites</p>
      </div>

      {/* Spline Embedded in Rectangle Frame */}
      <div className="flex justify-center items-center w-full py-8">
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="https://my.spline.design/componentuicopycopy-db56c9f647e48912880773dbb45f94f2/"
            frameBorder="0"
            width="100%"
            height="500"
            className="rounded-lg"></iframe>
        </div>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space text-center">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
