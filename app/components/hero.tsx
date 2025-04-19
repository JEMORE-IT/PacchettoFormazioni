// components/Hero.js

interface HeroProps {
  title: string;
  subtitle: string;
}
const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <div className="bg-[#0000FF] text-white py-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-300">{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;