// components/SubHero.js

interface SubHeroProps {
  title: string;
  content: string;
}

const SubHero: React.FC<SubHeroProps> = ({ title, content }) => {
  return (
    <div className="bg-gray-100 text-gray-800 py-16 px-6 mb-3">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-lg">{content}</p>
      </div>
    </div>
  );
};

export default SubHero;