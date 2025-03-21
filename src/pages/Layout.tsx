import { ReactNode } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Auth from "../components/common/Auth";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Search from "../components/common/Search";

interface LayoutProps {
    children?: ReactNode;
}
const Layout = ({ children=<></> }: LayoutProps) => {
    const { authPage } = useSelector((state: RootState) => state.auth);
    const { searchMode } = useSelector((state: RootState) => state.app);
    return (
        <>  
            <div className={`w-full flex flex-col items-center ${(authPage || searchMode) ? "blur-sm" : ""}`}>
                <div className="flex flex-col w-full items-center gap-[24px]">
                    <Header />
                    {children}
                </div>
                <Footer />
            </div>
            {authPage && <Auth />}
            {searchMode && <Search />}
        </>
    );
};

export default Layout;
