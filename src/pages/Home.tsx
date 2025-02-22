import CategoriesSlider from "../components/home/CategoriesSlider";
import Header from "../components/common/Header";
import HeroSlider from "../components/home/HeroSlider";

const Home = () => {
    return (
      <div className="flex flex-col w-full items-center gap-[24px]">
            <Header />
            <HeroSlider />
            <CategoriesSlider />
      </div>
  )
}

export default Home