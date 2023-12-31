import Content from "../../components/home/content";

const Home = () => {
  return (
    <div className="w-full h-full xl:grid xl:grid-cols-8 grid-cols-1 gap-4 mt-24 container mx-auto ">
      <div className="xl:col-span-5 font-Letters border-r-[1px] border-[#F2F2F2]">
        <Content />
      </div>
      <div className="xl:col-span-3 xl:visible invisible">Categoryes</div>
    </div>
  );
};

export default Home;
