import { ReactNode } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Auth from "../components/common/Auth";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface LayoutProps {
    children?: ReactNode;
}
const Layout = ({ children=<></> }: LayoutProps) => {
    const { authPage } = useSelector((state: RootState) => state.auth);
    return (
        <>
            <div className="flex flex-col w-full items-center gap-[24px]">
                <Header />
                {children}
            </div>
            <Footer />
            {authPage && <Auth />}
        </>
    );
};

export default Layout;
