import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import Header from "../components/searchresults/allresults/Header";
import Pagination from "../components/searchresults/allresults/Pagination";
import Layout from "./Layout";


const AllResults = () => {
    return (
        <Layout>
            <CategoriesAndProducts showTitle={false} titleComponent={Header()} />
            <Pagination />
        </Layout>
    );
};

export default AllResults;