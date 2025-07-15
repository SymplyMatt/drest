import Address from "../components/profile/Address";
import ProfileNavigation from "../components/profile/ProfileNavigation";
import Layout from "./Layout";

const Addresses = () => {
    return (
        <Layout headerGap="">
            <div className="w-full grid grid-cols-1 tmd:grid-cols-[360px_1fr] items-center justify-center">
                <ProfileNavigation />
                <div className="flex flex-col w-full tmd:border-b tmd:border-l border-[#D6D6D5] h-full p-[20px] tmd:p-[24px] gap-[16px]">
                    <div className="w-full flex items-center justify-between">
                        <div className="text-[#141511] text-[24px] leading-[130%] font-bold">Your addresses</div>
                        <div className="text-[#fff] text-[16px] h-[40px] bg-[#141511] flex items-center justify-center py-[8px] px-[24px] gap-[8px] cursor-pointer">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 10.5H16.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 3.625V17.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg> Add
                        </div>
                    </div>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Address key={index}/>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Addresses;