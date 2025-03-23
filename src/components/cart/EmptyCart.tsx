

const EmptyCart = () => {
    return (
    <div className="w-full col-span-2 flex flex-col h-full">
        <div className="w-full flex items-center justify-between border-b border-r border-[#D6D6D5] px-[24px] py-[12px]">
            <div className="text-[#141511] text-[20px] font-semibold">YOUR CART</div>
            <div className="flex items-center gap-[12px] text-[#4F4F4D] cursor-pointer font-semibold"><img src="/images/basket.svg"/> DELETE ALL</div>
        </div>
        <div className="w-full flex flex-col justify-center items-center p-[24px] gap-[12px] border-b border-r border-[#D6D6D5] h-full">
            <img src="/images/emptycart.svg" />
            <div className="text-[#141511] text-[48px] text-center">Oops, your cart is empty!</div>
            <div className="text-[#676764] text-[20px] text-center max-w-[450px]">You haven't added any items yet. Browse our collection and add your favorites to the cart!</div>
            <div className="flex items-center justify-center cursor-pointer bg-[#000000] py-[12px] px-[36px] text-[#E6E6E6] text-[20px]">SHOP NOW</div>
        </div>
    </div>
    )
  }
  
  export default EmptyCart