import { useMediaQuery } from 'react-responsive';
import Button from '../components/Button.jsx';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-start py-10 px-4" id="home">
      {/* 📦 Spline Interactive Model */}
      <div className="w-full max-w-5xl aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-white/10">
        <iframe
          src="https://my.spline.design/componentuicopycopy-db56c9f647e48912880773dbb45f94f2/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Interactive Spline Scene"
          allowFullScreen
          style={{
            pointerEvents: 'auto',
          }}
        />
      </div>

      {/* 🙋‍♂️ Intro Text and CTA */}
      <div className="max-w-4xl w-full text-center flex flex-col gap-3 mt-10">
        <p className="sm:text-3xl text-xl font-medium text-white font-generalsans">
          Hi, I am Bharanitharan <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building  & Brands</p>
      </div>

      <div className="mt-10">
        <a href="#about">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
