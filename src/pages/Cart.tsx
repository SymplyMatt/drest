import UpsellSlider from "../components/product/UpsellSlider";
import Layout from "./Layout";

const Cart = () => {
    return (
        <Layout headerGap="">
            <div className="w-full flex flex-col gap-[24px]">
                <div className="w-full grid grid-cols-3">
                    <div className="w-full col-span-2 flex flex-col">
                        <div className="w-full flex items-center justify-between border-b border-r border-[#D6D6D5] px-[24px] py-[12px]">
                            <div className="text-[#141511] text-[20px] font-semibold">YOUR CART</div>
                            <div className="flex items-center gap-[12px] text-[#4F4F4D] cursor-pointer font-semibold"><img src="/images/basket.svg"/> DELETE ALL</div>
                        </div>
                        <div className="w-full flex flex-col p-[24px] gap-[24px] border-b border-r border-[#D6D6D5]">
                            <div className="flex items-center justify-between gap-[24px]">
                                <div className="flex items-center gap-[12px] h-[96px]">
                                    <img src="/images/cartimage1.svg" className="h-full"/>
                                    <div className="flex flex-col justify-between h-full py-[8px]">
                                        <div className="text-[#141511] text-[14px] font-semibold whitespace-nowrap">Ocean breeze varsity jacket</div>
                                        <div className="flex flex-col">
                                            <div className="">Category: Verset jacket</div>
                                            <div className="">Color: Solid Blue</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[8px] justify-center">
                                    <div className="text-[#676764]">Product size</div>
                                    <select className="w-[96px] h-[40px] border border-[#D6D6D5] outline-none py-[8px] px-[12px] cursor-pointer">
                                        <option value="xl">XL</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-[8px] justify-center">
                                    <div className="text-[#676764]">Quantity</div>
                                    <div className="flex justify-center items-center gap-[12px]">
                                        <img src="/images/prev_cart.svg" className="cursor-pointer"/>
                                        1
                                        <img src="/images/next_cart.svg" className="cursor-pointer"/>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[8px] justify-between items-end h-[72px]">
                                    <div className="flex items-center gap-[8px] price"> <span className="text-[#8F0024] font-semibold line-through">200.00TND</span><span className="font-semibold">120.00TND</span></div>
                                    <div className="flex items-center gap-[12px]">
                                        <img src="/images/heartsm.svg" className="cursor-pointer"/>
                                        <img src="/images/basket_sm.svg" className="cursor-pointer"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-[24px]">
                                <div className="flex items-center gap-[12px] h-[96px]">
                                    <img src="/images/cartimage2.svg" className="h-full"/>
                                    <div className="flex flex-col justify-between h-full py-[8px]">
                                        <div className="text-[#141511] text-[14px] font-semibold whitespace-nowrap">Ocean breeze varsity jacket</div>
                                        <div className="flex flex-col">
                                            <div className="">Category: Verset jacket</div>
                                            <div className="">Color: Solid Blue</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[8px] justify-center">
                                    <div className="text-[#676764]">Product size</div>
                                    <select className="w-[96px] h-[40px] border border-[#D6D6D5] outline-none py-[8px] px-[12px] cursor-pointer">
                                        <option value="xl">XL</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-[8px] justify-center">
                                    <div className="text-[#676764]">Quantity</div>
                                    <div className="flex justify-center items-center gap-[12px]">
                                        <img src="/images/prev_cart.svg" className="cursor-pointer"/>
                                        1
                                        <img src="/images/next_cart.svg" className="cursor-pointer"/>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[8px] justify-between items-end h-[72px]">
                                    <div className="flex items-center gap-[8px] price"> <span className="text-[#8F0024] font-semibold line-through">200.00TND</span><span className="font-semibold">120.00TND</span></div>
                                    <div className="flex items-center gap-[12px]">
                                        <img src="/images/heartsm.svg" className="cursor-pointer"/>
                                        <img src="/images/basket_sm.svg" className="cursor-pointer"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-[24px]">
                                <div className="flex items-center gap-[12px] h-[96px]">
                                    <img src="/images/cartimage3.svg" className="h-full"/>
                                    <div className="flex flex-col justify-between h-full py-[8px]">
                                        <div className="text-[#141511] text-[14px] font-semibold whitespace-nowrap">Ocean breeze varsity jacket</div>
                                        <div className="flex flex-col">
                                            <div className="">Category: Verset jacket</div>
                                            <div className="">Color: Solid Blue</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[8px] justify-center">
                                    <div className="text-[#676764]">Product size</div>
                                    <select className="w-[96px] h-[40px] border border-[#D6D6D5] outline-none py-[8px] px-[12px] cursor-pointer">
                                        <option value="xl">XL</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-[8px] justify-center">
                                    <div className="text-[#676764]">Quantity</div>
                                    <div className="flex justify-center items-center gap-[12px]">
                                        <img src="/images/prev_cart.svg" className="cursor-pointer"/>
                                        1
                                        <img src="/images/next_cart.svg" className="cursor-pointer"/>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[8px] justify-between items-end h-[72px]">
                                    <div className="flex items-center gap-[8px] price"> <span className="text-[#8F0024] font-semibold line-through">200.00TND</span><span className="font-semibold">120.00TND</span></div>
                                    <div className="flex items-center gap-[12px]">
                                        <img src="/images/heartsm.svg" className="cursor-pointer"/>
                                        <img src="/images/basket_sm.svg" className="cursor-pointer"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-[24px]">
                                <div className="flex items-center gap-[12px] h-[96px]">
                                    <img src="/images/cartimage4.svg" className="h-full"/>
                                    <div className="flex flex-col justify-between h-full py-[8px]">
                                        <div className="text-[#141511] text-[14px] font-semibold whitespace-nowrap">Ocean breeze varsity jacket</div>
                                        <div className="flex flex-col">
                                            <div className="">Category: Verset jacket</div>
                                            <div className="">Color: Solid Blue</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[8px] justify-center">
                                    <div className="text-[#676764]">Product size</div>
                                    <select className="w-[96px] h-[40px] border border-[#D6D6D5] outline-none py-[8px] px-[12px] cursor-pointer">
                                        <option value="xl">XL</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-[8px] justify-center">
                                    <div className="text-[#676764]">Quantity</div>
                                    <div className="flex justify-center items-center gap-[12px]">
                                        <img src="/images/prev_cart.svg" className="cursor-pointer"/>
                                        1
                                        <img src="/images/next_cart.svg" className="cursor-pointer"/>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[8px] justify-between items-end h-[72px]">
                                    <div className="flex items-center gap-[8px] price"> <span className="text-[#8F0024] font-semibold line-through">200.00TND</span><span className="font-semibold">120.00TND</span></div>
                                    <div className="flex items-center gap-[12px]">
                                        <img src="/images/heartsm.svg" className="cursor-pointer"/>
                                        <img src="/images/basket_sm.svg" className="cursor-pointer"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-[24px]">
                                <div className="flex items-center gap-[12px] h-[96px]">
                                    <img src="/images/cartimage5.svg" className="h-full"/>
                                    <div className="flex flex-col justify-between h-full py-[8px]">
                                        <div className="text-[#141511] text-[14px] font-semibold whitespace-nowrap">Ocean breeze varsity jacket</div>
                                        <div className="flex flex-col">
                                            <div className="">Category: Verset jacket</div>
                                            <div className="">Color: Solid Blue</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[8px] justify-center">
                                    <div className="text-[#676764]">Product size</div>
                                    <select className="w-[96px] h-[40px] border border-[#D6D6D5] outline-none py-[8px] px-[12px] cursor-pointer">
                                        <option value="xl">XL</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-[8px] justify-center">
                                    <div className="text-[#676764]">Quantity</div>
                                    <div className="flex justify-center items-center gap-[12px]">
                                        <img src="/images/prev_cart.svg" className="cursor-pointer"/>
                                        1
                                        <img src="/images/next_cart.svg" className="cursor-pointer"/>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[8px] justify-between items-end h-[72px]">
                                    <div className="flex items-center gap-[8px] price"> <span className="text-[#8F0024] font-semibold line-through">200.00TND</span><span className="font-semibold">120.00TND</span></div>
                                    <div className="flex items-center gap-[12px]">
                                        <img src="/images/heartsm.svg" className="cursor-pointer"/>
                                        <img src="/images/basket_sm.svg" className="cursor-pointer"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-[24px]">
                                <div className="flex items-center gap-[12px] h-[96px]">
                                    <img src="/images/cartimage6.svg" className="h-full"/>
                                    <div className="flex flex-col justify-between h-full py-[8px]">
                                        <div className="text-[#141511] text-[14px] font-semibold whitespace-nowrap">Ocean breeze varsity jacket</div>
                                        <div className="flex flex-col">
                                            <div className="">Category: Verset jacket</div>
                                            <div className="">Color: Solid Blue</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[8px] justify-center">
                                    <div className="text-[#676764]">Product size</div>
                                    <select className="w-[96px] h-[40px] border border-[#D6D6D5] outline-none py-[8px] px-[12px] cursor-pointer">
                                        <option value="xl">XL</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-[8px] justify-center">
                                    <div className="text-[#676764]">Quantity</div>
                                    <div className="flex justify-center items-center gap-[12px]">
                                        <img src="/images/prev_cart.svg" className="cursor-pointer"/>
                                        1
                                        <img src="/images/next_cart.svg" className="cursor-pointer"/>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[8px] justify-between items-end h-[72px]">
                                    <div className="flex items-center gap-[8px] price"> <span className="text-[#8F0024] font-semibold line-through">200.00TND</span><span className="font-semibold">120.00TND</span></div>
                                    <div className="flex items-center gap-[12px]">
                                        <img src="/images/heartsm.svg" className="cursor-pointer"/>
                                        <img src="/images/basket_sm.svg" className="cursor-pointer"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full col-span-1 flex flex-col">
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
                            <div className="text-[#676764] text-center">By selecting a payment method, it's means you agree to our <span className="cursor-pointer underline text-black">Terms of Use, Sale, Return Policy, and Privacy Policy.</span> </div>
                        </div>
                    </div>
                </div>
                <UpsellSlider/>
            </div>
        </Layout>
    );
};

export default Cart;