import { ReactNode } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Auth from "../components/common/Auth";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Search from "../components/common/Search";

interface LayoutProps {
    children?: ReactNode;
    headerGap?: string;
}
const Layout = ({ children=<></>, headerGap= "tmd:gap-[24px]" }: LayoutProps) => {
    const { authPage } = useSelector((state: RootState) => state.auth);
    const { searchMode } = useSelector((state: RootState) => state.app);
    return (
        <>  
            <div className={`w-full flex flex-col items-center ${(authPage || searchMode) ? "tmd:blur-sm" : ""}`}>
                <div className={`flex flex-col w-full items-center ${headerGap}`}>
                    <Header />
                    {children}
                </div>
                {/* <Footer /> */}
            </div>
            {authPage && <Auth />}
            {searchMode && <Search />}
        </>
    );
};

export default Layout;
