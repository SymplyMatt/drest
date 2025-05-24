import { useSelector } from "react-redux";
import Description from "../components/product/Description";
import ProductHero from "../components/product/ProductHero";
import UpsellSlider from "../components/product/UpsellSlider";
import Layout from "./Layout";
import { RootState } from "../redux/store";

const Product = () => {
    const { products } = useSelector((state: RootState) => state.app);
    return (
        <Layout>
            <ProductHero />
            <Description />
            { products.length > 0 ? <UpsellSlider products={products}/> : <></> }
        </Layout>
    );
};

export default Product;