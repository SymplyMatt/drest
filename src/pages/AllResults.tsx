import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import Header from "../components/searchresults/allresults/Header";
import Pagination from "../components/searchresults/allresults/Pagination";
import Layout from "./Layout";


const AllResults = () => {
    return (
        <Layout>
            <CategoriesAndProducts showTitle={false} titleComponent={Header()} products={Array.from({ length: 40 }, (_, i) => i + 1)}/>
            <Pagination />
        </Layout>
    );
};

export default AllResults;