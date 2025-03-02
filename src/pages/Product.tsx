import ProductHero from "../components/product/ProductHero";
import UpsellSlider from "../components/product/UpsellSlider";
import Layout from "./Layout";

const Product = () => {
    return (
        <Layout>
            <ProductHero />
            <div className="w-full flex flex-col border border-[#D6D6D5] px-[50px] py-[24px] gap-[24px]">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-full flex items-center justify-between font-semibold text-[31.2px] leading-[24px] tracking-[0%] w-full flex items-center gap-[8px] cursor-pointer  p-[20px] border border-[#D6D6D5]">Description <img src="/images/minus.svg"/></div>
                    <div className="w-full p-[20px] p-[20px] border-b border-r border-l border-[#D6D6D5] gap-[8px] flex justify-center flex-col">
                        <div className="font-medium text-[18px] leading-[27px] tracking-[-4%]">Product Sku: 95201125; Color Code: 001</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">Vintage-inspired Wrangler short in a classic, rigid denim. Micro denim short designed to mimic the look and fit of a great pair of vintage denim cut-off into  shorts with a high-rise waistline, 5-pocket styling and raw hems.</div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-full flex items-center justify-between font-semibold text-[31.2px] leading-[24px] tracking-[0%] w-full flex items-center gap-[8px] cursor-pointer  p-[20px] border border-[#D6D6D5]">Features <img src="/images/minus.svg"/></div>
                    <div className="w-full p-[20px] p-[20px] border-b border-r border-l border-[#D6D6D5] gap-[8px] flex justify-center flex-col">
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Wrangler Reworked denim cutoff short</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Denim micro short</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Rigid non-stretch denim</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- High-rise waistline</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- 5-pocket styling</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Wrangler patch at the back pocket</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Raw hems</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Slim fit</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Micro length</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Zip-fly and button closure</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">Content + Care</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- 100% Cotton</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Machine wash</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Imported</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">Size + Fit</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Model in Shadow Black is 5’9.5" and wearing size 27</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Measurements taken from size 27</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Waist: 29"</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Rise: 12"</div>
                        <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">- Inseam: 3.5"</div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-full flex items-center justify-between font-semibold text-[31.2px] leading-[24px] tracking-[0%] w-full flex items-center gap-[8px] cursor-pointer  p-[20px] border border-[#D6D6D5]">Shipping and returns info <img src="/images/minus.svg"/></div>
                    <div className="w-full p-[20px] p-[20px] border-b border-r border-l border-[#D6D6D5] gap-[12px] flex justify-center flex-col">
                        <div className="w-full flex flex-col justify-center gap-[8px]">
                            <div className="font-normal text-[18px] leading-[27px] tracking-[-4%] text-[#676764] uppercase">Shipping</div>
                            <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">At DREST a signature will be required upon delivery to ensure your package arrives securely.</div>
                            <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">For Pre-order and Made to Order items, we will ship these on the estimated date provided on the product description page. Once ready, these items will be shipped via Premium Express, ensuring prompt delivery to your doorstep.</div>
                        </div>
                        <div className="w-full flex flex-col justify-center gap-[8px]">
                            <div className="font-normal text-[18px] leading-[27px] tracking-[-4%] text-[#676764] uppercase">Returns</div>
                            <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">To provide more flexibility during the holiday season, we offer extended returns. Orders placed from November 1 to January 1 will benefit from complimentary returns until January 31.</div>
                            <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">You can return items via mail or in-store. To process a return, log into your MY DREST account and select "Return this Item" from the order details, or use the link in your delivery confirmation email. You may also contact Customer Support for help. Once the request is approved, a prepaid shipping label will be emailed to you or made available for download in your MY DREST account.</div>
                            <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">All returned items must be in their original condition, with all labels attached and intact. Please note that Made to Order and personalised items are non-returnable.</div>
                            <div className="font-normal text-[18px] leading-[27px] tracking-[-4%]">Additional information is available during the checkout process or in the FAQs section.</div>
                        </div>
                        <table className="w-full border-collapse">
                            <thead className="bg-[#F3F3F3]">
                                <tr className="text-[#141511] font-medium text-[18px] leading-[27px] tracking-[0%] h-[60px]">
                                    <th className="text-[#141511] font-medium text-[18px] leading-[27px] tracking-[0%] border border-[#D6D6D5] p-[8px] text-center">Shipping service</th>
                                    <th className="text-[#141511] font-medium text-[18px] leading-[27px] tracking-[0%] border border-[#D6D6D5] p-[8px] text-center">Shipping fee</th>
                                    <th className="text-[#141511] font-medium text-[18px] leading-[27px] tracking-[0%] border border-[#D6D6D5] p-[8px] text-center">Delivery estimate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="h-[72px]">
                                    <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">Premium Express (Within Tunisia)</td>
                                    <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">Free (for items over 1040 TND)</td>
                                    <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">2-3 business days.</td>
                                </tr>
                                <tr className="h-[72px]">
                                    <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">Premium Express (Alaska, Hawaii, Puerto Rico)</td>
                                    <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">10 TND</td>
                                    <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">4-5 business days.</td>
                                </tr>
                                <tr className="h-[72px]">
                                    <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">Premium Express International (Europe & Asia)</td>
                                    <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">25 TND</td>
                                    <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">7-10 business days.</td>
                                </tr>
                                <tr className="h-[72px]">
                                    <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">Premium Express International (Other Regions)</td>
                                    <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">35 TND</td>
                                    <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">10-14 business days.</td>
                                </tr>
                                <tr className="h-[72px]">
                                    <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">Next Business Day (U.S.)</td>
                                    <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">30 TND</td>
                                    <td className="border border-[#D6D6D5] p-[8px] text-center text-[#4F4F4D]">Order by 4 pm EST for next-day delivery between 9 am - 8 pm.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-full flex items-center justify-between font-semibold text-[31.2px] leading-[24px] tracking-[0%] w-full flex items-center gap-[8px] cursor-pointer  p-[20px] border border-[#D6D6D5]">Reviews (103) 
                        <div className="flex items-center gap-[24px]">
                            <div className="flex items-center gap-[4px] font-semibold text-[24px] leading-[31px] tracking-[0%]">
                                4.5 
                                <img src="/images/staractive.svg" className="h-[20px] w-[20px]"/>
                                <img src="/images/staractive.svg" className="h-[20px] w-[20px]" />
                                <img src="/images/staractive.svg" className="h-[20px] w-[20px]" />
                                <img src="/images/staractive.svg" className="h-[20px] w-[20px]" />
                                <img src="/images/starinactive.svg" className="h-[20px] w-[20px]" />
                            </div>
                            <img src="/images/plusbox.svg"/>
                        </div>
                    </div>
                </div>
            </div>
            <UpsellSlider/>
        </Layout>
    );
};

export default Product;