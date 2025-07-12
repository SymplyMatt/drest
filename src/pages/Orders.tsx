import EmptyOrder from "../components/orders/EmptyOrder";
import ProfileNavigation from "../components/orders/ProfileNavigation";
import Layout from "./Layout";

const Orders = () => {
    return (
        <Layout headerGap="">
            <div className="w-full grid grid-cols-1 tmd:grid-cols-[360px_1fr] items-center justify-center">
                <ProfileNavigation />
                <EmptyOrder />
            </div>
        </Layout>
    );
};

export default Orders;