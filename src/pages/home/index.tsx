import Content from "../../components/home/content";
import Hero from "../../components/home/hero";

const Home = () => {
  return (
    <div className="container mx-auto py-24 relative">
      <div>
        <Hero />
      </div>
      <Content />
    </div>
  );
};

export default Home;
