import CategoriesSlider from "../components/home/CategoriesSlider";
import Header from "../components/common/Header";
import HeroSlider from "../components/home/HeroSlider";
import CategoriesAndProducts from "../components/home/CategoriesAndProducts";

const Home = () => {
    return (
      <div className="flex flex-col w-full items-center gap-[24px]">
            <Header />
            <HeroSlider />
            <CategoriesSlider />
            <CategoriesAndProducts title="Recommended"/>
      </div>
  )
}

export default Home