import EmptyOrder from "../components/profile/EmptyOrder";
import OrderList from "../components/profile/OrderList";
import ProfileNavigation from "../components/profile/ProfileNavigation";
import Layout from "./Layout";

const Orders = () => {
    const orders = [1];
    return (
        <Layout headerGap="">
            <div className="w-full grid grid-cols-1 tmd:grid-cols-[360px_1fr] items-center justify-center">
                <ProfileNavigation />
                {!orders.length ? <EmptyOrder /> : <></>}
                {orders.length ? <OrderList /> : <></>}
            </div>
        </Layout>
    );
};

export default Orders;