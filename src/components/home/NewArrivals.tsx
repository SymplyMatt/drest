import GridSlider from './GridSlider'

const NewArrivals = () => {
  return (
    <div className="w-full flex flex-col items-center gap-[50px] mb-[40px] overflow-visible">
        <div className="w-full flex items-center justify-between h-[48px] px-[50px] overflow-visible">
            <div className="w-full flex items-center gap-[32px]">
                <div className="text-[48px] font-normal leading-[32.78px] tracking-[0%]">New Arrivals</div>
            </div>
            <div className="h-[48px] bg-white border border-black px-[36px] py-[12px] cursor-pointer flex items-center justify-center font-semibold leading-[24px] tracking-[0%] whitespace-nowrap">VIEW ALL NEW</div>
        </div>
        <GridSlider />
    </div>
  )
}

export default NewArrivals