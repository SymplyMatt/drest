import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const CheckoutProducts = () => {
    const { cart } = useSelector((state: RootState) => state.app);
  return (
    <div className="w-full col-span-2 flex flex-col">
        <div className="w-full flex justify-center mx-auto py-[24px] gap-[4px] border-r border-[#D6D6D5]">
            <div className="flex flex-col gap-[8px] text-[#141511] whitespace-nowrap">
                <img src="/images/deliveryinfo.svg"  className="h-[48px]"/>
                Delivery info
            </div>
            <img src="/images/arrowcheckout.svg" className="items-start h-[8px] mt-[22px]"/>
            <div className="flex flex-col gap-[8px] text-[#141511] whitespace-nowrap">
                <img src="/images/checkoutpayment.svg" className="h-[48px]"/>
                Make payment
            </div>
            <img src="/images/arrowcheckout.svg" className="items-start h-[8px] mt-[22px]"/>
            <div className="flex flex-col gap-[8px] text-[#141511] whitespace-nowrap">
                <img src="/images/checkoutreview.svg"  className="h-[48px]"/>
                Review order
            </div>
        </div>
        <div className="w-full flex flex-col p-[24px] gap-[24px] border-b border-r border-[#D6D6D5]">
            <div className="text-[#141511] font-bold gap-[24px]">Please review your order</div>
            <div className="w-full flex flex-col gap-[12px]">
                <div className="text-[#676764]">Product details</div>
                {cart.map((_, index)=>(
                    <div className="flex items-center justify-between gap-[24px]" key={index}>
                        <div className="flex items-center gap-[12px] h-[96px]">
                            <img src={`/images/cartimage${index + 1}.svg`} className="h-full"/>
                            <div className="flex flex-col justify-between h-full py-[8px]">
                                <div className="text-[#141511] text-[14px] font-semibold whitespace-nowrap">Ocean breeze varsity jacket</div>
                                <div className="flex flex-col">
                                    <div className="text-[#4F4F4D]">Category: Verset jacket</div>
                                    <div className="text-[#4F4F4D]">Color: Solid Blue</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[8px] justify-center">
                            <div className="text-[#676764]">Size</div>
                            <div className="text-[#141511] text-[18px]">XL</div>
                        </div>
                        <div className="flex flex-col gap-[8px] justify-center">
                            <div className="text-[#676764]">Quantity</div>
                            <div className="text-[#141511] text-[18px]">1 Pcs</div>
                        </div>
                        <div className="flex flex-col gap-[8px] justify-center">
                            <div className="text-[#676764]">Total</div>
                            <div className="text-[#141511] text-[18px]">120.00 TND</div>
                        </div>
                        <div className="border border-[#D6D6D5] cursor-pointer text-[#141511] font-semibold h-[40px] px-[24px] flex items-center justify-center">EDIT</div>
                    </div>
                ))}
            </div>
            <div className="w-full flex flex-col gap-[12px]">
                <div className="text-[#676764]">Product details</div>
                <div className="grid grid-cols-2 w-full items-center gap-[16px]">
                    <div className="h-[200px] w-full border boder-[#D6D6D5] flex flex-col">
                        <div className="w-full flex items-center justify-between p-[16px] border-b border-[#D6D6D5]">
                            <div className="text-[#141511] text-[18px] font-semibold">DELIVERY ADDRESS</div>
                            <div className="border border-[#D6D6D5] cursor-pointer text-[#141511] font-semibold h-[40px] px-[24px] flex items-center justify-center">EDIT</div>
                        </div>
                        <div className="w-full flex-col p-[16px] gap-[12px]">
                            <div className="text-[141511]">Mahmud Richardson</div>
                            <div className="text-[#676764] text-[18px]">14 Crystal avenue, Easy-way, Tunisia, 23170</div>
                            <div className="text-[#676764] text-[18px]">Tunisia</div>
                        </div>
                    </div>
                    <div className="h-[200px] w-full border boder-[#D6D6D5] flex flex-col">
                        <div className="w-full flex items-center justify-between p-[16px] border-b border-[#D6D6D5]">
                            <div className="text-[#141511] text-[18px] font-semibold">BILLING ADDRESS</div>
                            <div className="border border-[#D6D6D5] cursor-pointer text-[#141511] font-semibold h-[40px] px-[24px] flex items-center justify-center">EDIT</div>
                        </div>
                        <div className="w-full flex-col p-[16px] gap-[12px]">
                            <div className="text-[141511]">Mahmud Richardson</div>
                            <div className="text-[#676764] text-[18px]">14 Crystal avenue, Easy-way, Tunisia, 23170</div>
                            <div className="text-[#676764] text-[18px]">Tunisia</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutProducts