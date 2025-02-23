import { ReactNode } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="flex flex-col w-full items-center gap-[24px]">
                <Header />
                {children}
            </div>
            <Footer />
        </>
    );
};

export default Layout;
