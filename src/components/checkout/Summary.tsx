import { useLocation, useNavigate } from "react-router-dom";
import ProductList from "./ProductList";

const Summary = () => {
    const navigate = useNavigate();
    const page = useLocation().pathname.split("/").pop();
    return (
        <div className="w-full col-span-1 flex flex-col border-b border-[#D6D6D5] justify-between">
            <div className="w-full flex flex-col">
                <div className="w-full flex items-center justify-center border-b border-r border-[#D6D6D5] px-[50px] py-[12px]">
                    <div className="text-[#141511] text-[20px] font-medium">ORDER SUMMARY</div>
                </div>
                <div className="w-full p-[24px] flex flex-col items-center gap-[12px]">
                    <div className="w-full flex items-center justify-between">
                        <div className="text-[#4F4F4D] text-[18px] flex items-center gap-[4px]">Total Products</div>
                        <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">6 Products</div>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <div className="text-[#4F4F4D] text-[18px] flex items-center gap-[4px]">Subtotal<img src="/images/question.svg" className="cursor-pointer" /></div>
                        <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">754.50 TND</div>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">Estimated shipping</div>
                        <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">0.00 TND</div>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">Estimated tax</div>
                        <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">20.00 TND</div>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">Discount <span className="text-[#E0523F] font-medium">10% OFF</span></div>
                        <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">-75.45 TND</div>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <div className="text-[#141511] text-[18px] flex items-center gap-[4px] font-semibold">Total payment </div>
                        <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px] font-semibold">697.05 TND</div>
                    </div>
                    <div className="w-full h-[1px] bg-[#D6D6D5] mt-[12px]"></div>
                    {page !== 'payment' ? <>
                        <div className="w-full flex items-center justify-between mt-[12px]">
                            <div className="text-[#141511] text-[18px] flex items-center gap-[4px] font-medium">Do you have a promo code? </div>
                            <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]"><img src="/images/caretup.svg" className="cursor-pointer" /></div>
                        </div>
                        <div className="w-full h-[48px] bg-[#F3F3F3] flex items-center justify-between py-[4px] pl-[12px] pr-[4px]">
                            <div className="text-[#141511] ">ONEDISCOUNT</div>
                            <div className="h-[40px] flex items-center bg-white border border-[#D6D6D5] py-[8px] px-[24px] text-[#676764]">APPLIED</div>
                        </div>
                        <div className="flex gap-[8px] items-start text-[#676764]"><img src="/images/info_sm.svg" /> To get a promo code you can help our social media, there we share promo codes every month.</div>
                        <div className="w-full h-[1px] bg-[#D6D6D5] mt-[12px]"></div>
                        <div className="flex w-full items-center justify-center bg-[#141511] cursor-pointer h-[48px] text-white mt-[12px]" 
                            onClick={()=>{
                                const nextPage = page === 'cart' ? 'delivery' : page === 'delivery' ? 'confirm' : page === 'confirm' ? 'payment' : 'payment';
                                navigate(`/checkout/${nextPage}`);
                            }}>
                            CHECKOUT
                        </div>
                    </> : ''}
                </div>
            </div>
            {page === 'payment' ? <ProductList /> : ''}
        </div>
    )
}

export default Summary