import { useMediaQuery } from 'react-responsive';
import Button from '../components/Button.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
      id="home">
      {/* Animated Waves */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            fill="url(#gradientTop)"
            d="M0,160L80,170C160,180,320,200,480,192C640,184,800,144,960,149.3C1120,155,1280,197,1360,218.7L1440,240V0H0Z"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="gradientTop" x1="0" x2="1" y1="1" y2="0">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="100%" stopColor="#6a0dad" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 text-center">
        <p className="sm:text-3xl text-xl font-medium text-white font-generalsans">
          Hi, I am Adrian <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            fill="url(#gradientBottom)"
            d="M0,192L80,186.7C160,181,320,171,480,176C640,181,800,203,960,218.7C1120,235,1280,245,1360,250.7L1440,256V320H0Z"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="gradientBottom" x1="0" x2="1" y1="1" y2="0">
              <stop offset="0%" stopColor="#6a0dad" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 flex justify-center">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
