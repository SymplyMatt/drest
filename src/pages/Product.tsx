import Description from "../components/product/Description";
import ProductHero from "../components/product/ProductHero";
import UpsellSlider from "../components/product/UpsellSlider";
import Layout from "./Layout";

const Product = () => {
    return (
        <Layout>
            <ProductHero />
            <Description />
            <UpsellSlider/>
        </Layout>
    );
};

export default Product;