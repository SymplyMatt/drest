
const Home = () => {
  return (
    <div className="w-full flex flex-col">
        <div className="w-full flex h-[42px] bg-headerBlack items-center justify-between text-textWhite px-[50px]">
        <div className="flex items-center gap-[8px]">
            <img src="/src/assets/images/france.svg"/> 
            <div className="flex gap-[8px] items-center">
                <span className="text-[14px] font-extrabold">FR</span> 
                <span>|</span> <span>French</span> 
                <img src="/src/assets/images/caretdownsm.svg"/>
            </div>

        </div>
        <div className="flex justify-center items-center gap-[40px]">
            <div className=""></div>
            <div className="">We love love - Shop for all the Valentine's Day gifts in our LOVE SALE!!</div>
            <div className="">SHOP NOW</div>
            <div className=""></div>
        </div>
        <div className="">Currency: EUR</div>  
        </div>
    </div>
  )
}

export default Home