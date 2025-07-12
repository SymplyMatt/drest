import EmptyOrder from "../components/orders/EmptyOrder";
import OrderList from "../components/orders/OrderList";
import ProfileNavigation from "../components/orders/ProfileNavigation";
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