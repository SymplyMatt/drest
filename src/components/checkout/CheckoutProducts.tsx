import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const CheckoutProducts = () => {
    const { cart } = useSelector((state: RootState) => state.app);
  return (
    <div className="w-full col-span-2 flex flex-col">
        <div className="w-full flex justify-center mx-auto py-[24px] gap-[4px] border-r border-[#D6D6D5]">
            <div className="flex flex-col gap-[8px] text-[#141511]">
                <img src="/images/deliveryinfo.svg"  className="h-[48px]"/>
                Delivery info
            </div>
            <img src="/images/arrowcheckout.svg" className="items-start h-[8px] mt-[22px]"/>
            <div className="flex flex-col gap-[8px] text-[#141511]">
                <img src="/images/checkoutpayment.svg" className="h-[48px]"/>
                Delivery info
            </div>
            <img src="/images/arrowcheckout.svg" className="items-start h-[8px] mt-[22px]"/>
            <div className="flex flex-col gap-[8px] text-[#141511]">
                <img src="/images/checkoutreview.svg"  className="h-[48px]"/>
                Delivery info
            </div>
        </div>
        <div className="w-full flex flex-col p-[24px] gap-[24px] border-b border-r border-[#D6D6D5]">
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
    </div>
  )
}

export default CheckoutProducts