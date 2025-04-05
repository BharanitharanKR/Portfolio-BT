import { Leva } from 'leva';
import { useMediaQuery } from 'react-responsive';
import Button from '../components/Button.jsx';
import { calculateSizes } from '../constants/index.js';
import Spline from SplineCurve
import { SplineCurve } from 'three/src/Three.Core.js';
const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col items-center relative" id="home">
      {/* Text Content */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 text-center">
        <p className="sm:text-3xl text-xl font-medium text-white font-generalsans">We Are Zarats <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Making Designs Come to Life with 3D</p>
      </div>

      {/* Spline Embedded in Wider Rectangle */}
      <div className="flex justify-center items-center w-full py-8">
        <div className="w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 bg-white shadow-2xl rounded-lg overflow-hidden p-4">
          <iframe
            src="https://my.spline.design/componentuicopycopy-db56c9f647e48912880773dbb45f94f2/"
            frameBorder="0"
            width="100%"
            height="500"
            className="rounded-lg"></iframe>
        </div>
      </div>
      <div>
        Mhejsdcsd
        <p>
          <div>
            <li>
              <ul>djfj
                dfhdhd

                g
              </ul>
            </li>
          </div>
        </p>
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
CanvasCaptureMediaStreamTrack
<camvas