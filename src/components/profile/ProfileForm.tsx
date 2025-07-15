
const ProfileForm = () => {
  return (
    <div className="tmd:col-span-3 h-full flex flex-col justify-start gap-[20px] p-[20px] tmd:p-[24px] border-b border-[#D6D6D5]">
        <div className="text-[#141511] font-medium text-[24px]">Profile Details</div>
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-[16px]">
                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="84" height="84" rx="42" fill="#F3F3F3"/>
                <path d="M33.9099 46.408H33.9659L39.8179 31.176H44.1299V51H41.3579V34.424H41.3019L34.7219 51H32.9579L26.4059 34.424H26.3499V51H23.6619V31.176H27.9739L33.9099 46.408ZM51.7269 51H48.9549V31.176H55.3109C56.2629 31.176 57.1682 31.2787 58.0269 31.484C58.8855 31.6707 59.6322 31.9787 60.2669 32.408C60.9202 32.8373 61.4335 33.4067 61.8069 34.116C62.1802 34.8067 62.3669 35.656 62.3669 36.664C62.3669 38.12 61.9189 39.296 61.0229 40.192C60.1269 41.088 58.9695 41.6573 57.5509 41.9L63.0949 51H59.7349L54.6949 42.18H51.7269V51ZM51.7269 39.856H54.9189C55.5722 39.856 56.1789 39.8 56.7389 39.688C57.2989 39.576 57.7842 39.3987 58.1949 39.156C58.6242 38.8947 58.9602 38.568 59.2029 38.176C59.4455 37.7653 59.5669 37.2613 59.5669 36.664C59.5669 36.0667 59.4455 35.572 59.2029 35.18C58.9602 34.7693 58.6335 34.4427 58.2229 34.2C57.8309 33.9573 57.3642 33.7893 56.8229 33.696C56.2815 33.584 55.7122 33.528 55.1149 33.528H51.7269V39.856Z" fill="#141511"/>
                </svg>
                <div className="flex flex-col  h-[84px] justify-between">
                    <div className="text-[#141511] font-medium">Add your profile picture</div>
                    <div className="text-[#4F4F4D] max-w-[220px] text-[14px] leading-[150%]">You can add or remove your profile picture as you like.</div>
                </div>
            </div>
            <div className="border border-[#D6D6D5] cursor-pointer h-[40px] items-center justify-center py-[8px] px-[24px] text-[#141511] font-medium">Upload</div>
        </div>
        <div className="col-span-1 flex flex-col gap-[8px]">
            <label className="text-[#141511] font-semibold">First name</label>
            <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="Mahmoud"/>
        </div>
        <div className="col-span-1 flex flex-col gap-[8px]">
            <label className="text-[#141511] font-semibold">Last name</label>
            <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="Mahmoud"/>
        </div>
        <div className="col-span-1 flex flex-col gap-[8px]">
            <label className="text-[#141511] font-semibold">Country/region</label>
            <select className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none">
                <option value="tunisia">Tunisia</option>
            </select>
        </div>
        <div className="col-span-1 flex flex-col gap-[8px]">
            <label className="text-[#141511] font-semibold">Title</label>
            <select className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none">
                <option value="tunisia">Tunisia</option>
            </select>
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
            <label className="text-[#141511] font-semibold">Birth date</label>
            <div className="flex items-center gap-[12px]">
                <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="10"/>
                <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="September"/>
                <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="2000"/>
            </div>
        </div>
        <div className="h-[48px] cursor-pointer text-[#141511] flex items-center justify-center border border-[#D6D6D5] bg-[#141511] text-white">SAVE MY INFORMATION</div>
    </div>
  )
}

export default ProfileForm