import CheckoutProducts from "../components/checkout/CheckoutProducts";
import Layout from "./Layout";

const CheckoutPayment = () => {
    return (
        <Layout headerGap="">
            <div className="w-full flex flex-col gap-[24px]">
                <div className="w-full grid grid-cols-3 min-h-[720px]">
                    <CheckoutProducts />
                    <div className="w-full col-span-1 flex flex-col border-b border-[#D6D6D5]">
                        <div className="w-full flex items-center justify-center border-b border-r border-[#D6D6D5] px-[50px] py-[12px]">
                            <div className="text-[#141511] text-[20px] font-medium">ORDER SUMMARY</div>
                        </div>
                        <div className="w-full p-[24px] flex flex-col items-center gap-[12px]">
                            <div className="w-full flex items-center justify-between">
                                <div className="text-[#4F4F4D] text-[18px] flex items-center gap-[4px]">Subtotal (6 items) <img src="/images/question.svg" className="cursor-pointer" /></div>
                                <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">754.50 TND</div>
                            </div>
                            <div className="w-full flex items-center justify-between">
                                <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">Discount <span className="text-[#8F0024] font-medium">10% OFF</span></div>
                                <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">-75.45 TND</div>
                            </div>
                            <div className="w-full flex items-center justify-between">
                                <div className="text-[#141511] text-[18px] flex items-center gap-[4px] font-semibold">Total payment </div>
                                <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">697.05 TND</div>
                            </div>
                            <div className="w-full h-[1px] bg-[#D6D6D5] mt-[12px]"></div>
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
                            <div className="flex w-full items-center justify-center bg-[#141511] cursor-pointer h-[48px] text-white mt-[12px]">CHECKOUT</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CheckoutPayment;