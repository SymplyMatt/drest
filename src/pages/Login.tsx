import HeroSlider from "../components/home/HeroSlider";
import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import FeaturedBrands from "../components/home/FeaturedBrands";
import NewArrivals from "../components/home/NewArrivals";
import Layout from "./Layout";
import FlashSales from "../components/home/FlashSales";
import homeimagetwo from '../assets/images/homeimagetwo.png';
import homeimagethree from '../assets/images/homeimagethree.png';
import RoundCategoriesSlider from "../components/home/RoundCategoriesSlider";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setAuthPage } from "../redux/states/auth";
const Login = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=>{
        dispatch(setAuthPage("emaillogin"));
    },[]);
    return (
        <Layout>
            <HeroSlider />
            <RoundCategoriesSlider />
            <FlashSales />
            <CategoriesAndProducts title="Recommended"/>
            <NewArrivals />
            <CategoriesAndProducts title="Trending"/>
            <div className="w-full flex flex-col items-center justify-center">
                <img src={homeimagetwo} className="w-full h-auto" />
                <img src={homeimagethree} className="w-full h-auto" />
            </div>
            <FeaturedBrands />
        </Layout>
    );
}

export default Login;
