
const Languages = () => {
  return (
    <div className="flex items-center gap-[8px] cursor-pointer">
        <img src="/images/france.svg" />
        <div className="flex gap-[4px] items-center text-[14px]">
            <span className="text-[14px] font-extrabold">FR</span>
            <span className="text-[#E6E6E6] opacity-[0.7]">|</span>
            <span>French</span>
            <img src="/images/caretdownsm.svg" />
        </div>
    </div>
  )
}

export default Languages