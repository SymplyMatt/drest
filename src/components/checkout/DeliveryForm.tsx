
const DeliveryForm = () => {
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
            <div className="text-[#141511] font-bold gap-[24px]">Complete your delivery information</div>
            <div className="flex flex-col gap-[8px]">
                <div className="text-[#676764] text-[18px]">Delivery type</div>
                <div className="flex items-center gap-[16px]">
                    <div className="cursor-pointer h-[48px] flex items-center justify-center gap-[8px] border border-[#141511] py-[8px] px-[24px]"><img src="/images/deliverytext.svg" /> Delivery</div>
                    <div className="cursor-pointer h-[48px] flex items-center justify-center gap-[8px] border border-[#D6D6D5] py-[8px] px-[24px]"><img src="/images/pickup.svg" /> Pickup</div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-[8px]">
                <div className="text-[#676764] text-[18px]">Delivery type</div>
                <div className="w-full grid grid-cols-2 gap-[16px]">
                    <div className="col-span-1 flex flex-col gap-[8px]">
                        <label className="text-[#141511] font-semibold">First name</label>
                        <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="Mahmoud"/>
                    </div>
                    <div className="col-span-1 flex flex-col gap-[8px]">
                        <label className="text-[#141511] font-semibold">Last name</label>
                        <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="Mahmoud"/>
                    </div>
                    <div className="col-span-1 flex flex-col gap-[8px]">
                        <label className="text-[#141511] font-semibold">Email</label>
                        <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="Ex : maulana.pratama@gmail.com"/>
                    </div>
                    <div className="col-span-1 flex flex-col gap-[8px]">
                        <label className="text-[#141511] font-semibold">Phone number</label>
                        <div className="w-full flex items-center">
                            <div className="h-[48px] bg-[#F3F3F3] flag-container min-w-[100px] border-r border-[#D6D6D5] flex items-center justify-center text-[#676764] p-[8px] gap-[4px] cursor-pointer">
                                <img src="/images/tunisia.svg" className="w-[24px] h-[24px]"/>
                                +231
                                <img src="/images/caretflag.svg" className="w-[24px] h-[24px]"/>
                            </div>
                            <input type="text" className="bg-[#F3F3F3] outline-none border-none p-[8px] px-[12px] w-full h-[48px]" placeholder="Enter mobile number"/>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-[8px]">
                        <label className="text-[#141511] font-semibold">Country/region</label>
                        <select className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none">
                            <option value="tunisia"><img src="/images/tunisia.svg"/> Tunisia</option>
                        </select>
                    </div>
                    <div className="col-span-1 flex flex-col gap-[8px]">
                        <label className="text-[#141511] font-semibold">Address</label>
                        <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="Start typing to search"/>
                    </div>
                    <div className="col-span-1 flex flex-col gap-[8px]">
                        <label className="text-[#141511] font-semibold">City</label>
                        <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="Start typing to search"/>
                    </div>
                    <div className="col-span-1 flex flex-col gap-[8px]">
                        <label className="text-[#141511] font-semibold">State</label>
                        <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="Start typing to search"/>
                    </div>
                    <div className="col-span-1 flex flex-col gap-[8px]">
                        <label className="text-[#141511] font-semibold">Building type</label>
                        <select className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none">
                            <option value="tunisia"><img src="/images/tunisia.svg"/> Select type</option>
                        </select>
                    </div>
                    <div className="col-span-1 flex flex-col gap-[8px]">
                        <label className="text-[#141511] font-semibold">Postal / ZIP code</label>
                        <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="Enter code"/>
                    </div>
                    <div className="flex items-center gap-[8px] cursor-pointer"><img src="/images/checkboxchecked.svg" /> Use this data for billing address</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DeliveryForm