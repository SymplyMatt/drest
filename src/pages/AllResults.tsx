import { useSelector } from "react-redux";
import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import Header from "../components/searchresults/allresults/Header";
import Pagination from "../components/searchresults/allresults/Pagination";
import Layout from "./Layout";
import { RootState } from "../redux/store";


const AllResults = () => {
    const { products } = useSelector((state: RootState) => state.app);
    return (
        <Layout>
            <CategoriesAndProducts showTitle={false} titleComponent={Header()} productsToDisplay={products}/>
            <Pagination />
        </Layout>
    );
};

export default AllResults;