import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import Description from "../components/product/Description";
import ProductHero from "../components/product/ProductHero";
import UpsellSlider from "../components/product/UpsellSlider";
import Layout from "./Layout";
import Loader from "../components/common/Loader";
import { RootState } from "../redux/store";
import { fetchFromApi, Product as ProductInterface } from "../utils/utils";

const Product = () => {
  const { products } = useSelector((state: RootState) => state.app);
  const { id } = useParams();
  const location = useLocation();
  const productFromRoute = location.state?.product as ProductInterface | undefined;
  const [product, setProduct] = useState<ProductInterface | null>(productFromRoute || null);
  const [upsells, setUpsells] = useState<ProductInterface[]>([]);
  const [reviews, setReviews] = useState<any>([]);
  const [loading, setLoading] = useState(!productFromRoute);
  useEffect(() => {
    const fetchProduct = async () => {
        if (!product && id) {
        try {
            const fetchedProduct = (await fetchFromApi(`products/${id}`)).data;
            setProduct(fetchedProduct);
        } catch (err) {
            console.error("Error fetching product:", err);
        } finally {
            setLoading(false);
        }
        }
        const reviews = await fetchFromApi(`products/reviews?product=${id}`);
        setReviews(reviews || []);
    };
    fetchProduct();
  }, [product, id]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = (await fetchFromApi(`products?include=${product?.related_ids?.join(",")}`)).data;
        setUpsells(fetchedProduct);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [product]);
  useEffect(()=>{
    setProduct(productFromRoute || null);
  },[id])

  if (loading || !product) return <Loader />;

  return (
    <Layout>
      <ProductHero product={product} reviews={reviews}/>
      <Description product={product} reviews={reviews}/>
      {products.length > 0 && <UpsellSlider products={upsells} />}
    </Layout>
  );
};

export default Product;