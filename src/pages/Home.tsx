
const Home = () => {
  return (
    <div className="w-full flex flex-col">
        <div className="w-full flex h-[42px] bg-headerBlack items-center justify-between text-textWhite px-[50px]">
        <div className="flex items-center gap-[8px] cursor-pointer">
            <img src="/src/assets/images/france.svg"/> 
            <div className="flex gap-[4px] items-center text-[14px]">
                <span className="text-[14px] font-extrabold">FR</span> 
                <span className="text-[#E6E6E6] opacity-[0.7]">|</span> 
                <span>French</span> 
                <img src="/src/assets/images/caretdownsm.svg"/>
            </div>

        </div>
        <div className="flex justify-center items-center gap-[40px] text-[14px]">
            <div className="cursor-pointer"><img src="/src/assets/images/arrowleft.svg"/></div>
            <div className="font-semibold">We love love - Shop for all the Valentine's Day gifts in our LOVE SALE!!</div>
            <div className="font-medium underline leading-[14px] cursor-pointer">SHOP NOW</div>
            <div className="cursor-pointer"><img src="/src/assets/images/arrowright.svg"/></div>
        </div>
        <div className="text-[14px] flex items-center gap-[4px]">Currency: <span className="text-[14px] font-extrabold">EUR</span> <img src="/src/assets/images/caretdownsm.svg"/></div>  
        </div>
    </div>
  )
}

export default Home