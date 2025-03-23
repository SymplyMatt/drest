
const PaymentForm = () => {
    return (
    <div className="w-full col-span-2 flex flex-col h-full  border-b border-r border-[#D6D6D5]">
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
        <div className="w-full flex flex-col p-[24px] gap-[24px]">
            <div className="text-[#141511] font-bold gap-[24px] text-[24px] font-medium">Choose shipping & payment method</div>
            <div className="w-full flex flex-col gap-[8px]">
                <div className="text-[#676764] text-[18px]">Shipping type</div>
                <div className="w-full grid grid-cols-2 items-center gap-[16px]">
                    <div className="col-span-1 flex flex-col p-[16px] border border-[#141511] gap-[12px] cursor-pointer">
                        <div className="flex items-center gap-[8px] cursor-pointer text-[#141511] justify-between"> Standard shipping <span className="text-[#4F4F4D]">Free</span></div>
                        <div className="text-[#4F4F4D]">Estimated delivery: 3-5 business days</div>
                    </div>
                    <div className="col-span-1 flex flex-col p-[16px] border border-[#D6D6D5] gap-[12px] cursor-pointer">
                        <div className="flex items-center gap-[8px] cursor-pointer text-[#141511] justify-between"> Express shipping <span className="text-[#4F4F4D]">+5.00 TND</span></div>
                        <div className="text-[#4F4F4D]">Estimated arrive at 23 January 2024</div>
                    </div>
                    <div className="col-span-1 flex flex-col p-[16px] border border-[#D6D6D5] gap-[12px] cursor-pointer">
                        <div className="flex items-center gap-[8px] cursor-pointer text-[#141511] justify-between"> Same-Day delivery <span className="text-[#4F4F4D]">+7.00 TND</span></div>
                        <div className="text-[#4F4F4D]">Estimated arrive at 21 January 2024</div>
                    </div>
                    <div className="col-span-1 flex flex-col p-[16px] border border-[#D6D6D5] gap-[12px] cursor-pointer">
                        <div className="flex items-center gap-[8px] cursor-pointer text-[#141511] justify-between"> Overnight delivery <span className="text-[#4F4F4D]">+10.00 TND</span></div>
                        <div className="text-[#4F4F4D]">Estimated arrive Tomorrow at 14:30 pm</div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-[8px]">
                <div className="text-[#676764] text-[18px]">Payment method</div>
                <div className="w-full grid grid-cols-3 items-center gap-[16px]">
                    <div className="col-span-1 flex items-center h-[85px] border border-[#141511] border-[2px] gap-[12px] cursor-pointer">
                        <div className="flex items-center gap-[8px] cursor-pointer text-[#141511] justify-between bg-[#F3F3F3] h-full border-t border-b border-[#141511]"> <img src="/images/debitcard.svg" /> </div>
                        <div className="text-[#141511] font-medium">Use debit or credit card</div>
                    </div>
                    <div className="col-span-1 flex items-center h-[85px] border border-[#D6D6D5] gap-[12px] cursor-pointer">
                        <div className="flex items-center gap-[8px] cursor-pointer text-[#141511] justify-between bg-[#F3F3F3] h-full"> <img src="/images/paypalcard.svg" /> </div>
                        <div className="text-[#141511] font-medium">Paypal</div>
                    </div>
                    <div className="col-span-1 flex items-center h-[85px] border border-[#D6D6D5] gap-[12px] cursor-pointer">
                        <div className="flex items-center gap-[8px] cursor-pointer text-[#141511] justify-between bg-[#F3F3F3] h-full"> <img src="/images/googlepaycard.svg" /> </div>
                        <div className="text-[#141511] font-medium">Google Pay</div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-[8px]">
                <div className="text-[#676764] text-[18px]">Credit/debit card information</div>
                <div className="w-full grid grid-cols-2 gap-[16px]">
                    <div className="col-span-2 flex flex-col gap-[8px]">
                        <label className="text-[#141511] font-semibold">Card number</label>
                        <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="Mahmoud"/>
                    </div>
                    <div className="col-span-1 flex flex-col gap-[8px]">
                        <label className="text-[#141511] font-semibold">First name</label>
                        <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="Enter first name"/>
                    </div>
                    <div className="col-span-1 flex flex-col gap-[8px]">
                        <label className="text-[#141511] font-semibold">Last name</label>
                        <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="Enter last name"/>
                    </div>
                    <div className="w-full grid grid-cols-2 items-center gap-[8px]">
                        <div className="col-span-1 flex flex-col gap-[8px]">
                            <label className="text-[#141511] font-semibold">Expiration date</label>
                            <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="Month"/>
                        </div>
                        <div className="col-span-1 flex flex-col gap-[8px]">
                            <label className="text-[#141511] font-semibold opacity-0">-</label>
                            <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="Year"/>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-[8px]">
                        <label className="text-[#141511] font-semibold">CVV</label>
                        <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="Enter code"/>
                    </div>
                    <div className="flex items-center gap-[8px] cursor-pointer text-[#141511]"><img src="/images/checkboxunchecked.svg" /> Save credit card detail for later</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PaymentForm