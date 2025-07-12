
const OrderList = () => {
  return (
    <div className="flex flex-col w-full tmd:border-b tmd:border-l border-[#D6D6D5] h-full p-[24px] gap-[16px]">
        <div className="w-full flex items-center justify-between">
            <div className="text-[#141511] text-[24px] leading-[130%] font-bold">Your orders</div>
            <div className="text-[#676764] text-[18px]">6 Total orders</div>
        </div>
        <div className="w-full flex flex-col">
            <div className="w-full p-[20px] border border-[#D6D6D5] flex items-center justify-between">
                <div className="flex flex-col text-left gap-[4px]">
                    <div className="text-[#141511] text-[18px] leading-[150%] font-semibold">ID : #22908808FF0AD2</div>
                    <div className="text-[#4F4F4D] text-[16px] leading-[130%]">Date : 20 Jan 2025, 12:30 pm</div>
                </div>
                <div className="flex items-center justify-center gap-[32px]">
                    <div className="flex flex-col text-left gap-[4px]">
                        <div className="text-[#676764] text-[16px] leading-[130%]">Total products</div>
                        <div className="text-[#141511] text-[18px] leading-[150%] font-medium">6 Products</div>
                    </div>
                    <div className="flex flex-col text-left gap-[4px]">
                        <div className="text-[#676764] text-[16px] leading-[130%]">Total payment</div>
                        <div className="text-[#141511] text-[18px] leading-[150%] font-medium">250.00 TND</div>
                    </div>
                    <div className="flex flex-col text-left gap-[4px]">
                        <div className="text-[#676764] text-[16px] leading-[130%]">Payment type</div>
                        <div className="text-[#141511] text-[18px] leading-[150%] font-medium">Credit/debit</div>
                    </div>
                    <div className="flex flex-col text-left gap-[4px]">
                        <div className="text-[#676764] text-[16px] leading-[130%]">Status order</div>
                        <div className="text-[#D58618] text-[18px] leading-[150%] font-medium">On progress</div>
                    </div>
                </div>
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                <rect x="0.5" y="1" width="39" height="39" fill="white"/>
                <rect x="0.5" y="1" width="39" height="39" fill="url(#paint0_linear_855_39061)" fill-opacity="0.05"/>
                <rect x="0.5" y="1" width="39" height="39" stroke="#D6D6D5"/>
                <path d="M27.5 20.5C27.5 20.6658 27.4342 20.8247 27.3169 20.9419C27.1997 21.0592 27.0408 21.125 26.875 21.125H13.125C12.9592 21.125 12.8003 21.0592 12.6831 20.9419C12.5658 20.8247 12.5 20.6658 12.5 20.5C12.5 20.3342 12.5658 20.1753 12.6831 20.0581C12.8003 19.9408 12.9592 19.875 13.125 19.875H26.875C27.0408 19.875 27.1997 19.9408 27.3169 20.0581C27.4342 20.1753 27.5 20.3342 27.5 20.5Z" fill="#141511"/>
                <defs>
                <linearGradient id="paint0_linear_855_39061" x1="20" y1="0.5" x2="20" y2="40.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F3F3F3" stop-opacity="0"/>
                <stop offset="1" stop-color="#F3F3F3"/>
                </linearGradient>
                </defs>
                </svg>
            </div>
            <div className="w-full p-[20px] border-r border-l border-b border-[#D6D6D5] flex justify-center bg-[#F3F3F3]">
                <div className="w-full bg-white flex flex-col items-center">
                    <div className="w-full flex border-b border-[#D6D6D5] justify-center p-[20px]" style={{height: 'fit-content'}}>
                        <div className="flex flex-col gap-[12px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative right-[7px]">
                                <rect x="8" y="2.99625" width="8.00333" height="4.00167" rx="1" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.0011 4.99707H18.0019C19.107 4.99707 20.0028 5.89287 20.0028 6.9979V19.0029C20.0028 20.1079 19.107 21.0037 18.0019 21.0037H5.99693C4.8919 21.0037 3.99609 20.1079 3.99609 19.0029V6.9979C3.99609 5.89287 4.8919 4.99707 5.99693 4.99707H7.99776" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.2355 12.8517L11.4443 15.6428L9.76562 13.9701" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="flex items-center">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_855_39068)">
                                <circle cx="7" cy="5" r="4" fill="#141511"/>
                                <circle cx="7" cy="5" r="4.5" stroke="white"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_855_39068" x="0" y="0" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="2"/>
                                <feGaussianBlur stdDeviation="1"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_855_39068"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_855_39068" result="shape"/>
                                </filter>
                                </defs>
                                </svg>
                                <svg viewBox="0 0 876 2" fill="none" xmlns="http://www.w3.org/2000/svg" style={ { width: '100%'}}>
                                <path d="M0 1L876 1.00008" stroke="#141511" stroke-dasharray="6 4"/>
                                </svg>
                            </div>
                            <div className="relative right-[30px]">Reviewing</div>
                        </div>
                        <div className="flex flex-col gap-[12px]">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative right-[7px]">
                            <path d="M12.3322 2.99625V7.99833" stroke="#4F4F4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.33203 17.0021H9.33286" stroke="#4F4F4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.3356 9.99915C21.3356 8.89413 20.4398 7.99832 19.3348 7.99832H5.32896C4.22393 7.99832 3.32812 8.89413 3.32812 9.99915" stroke="#4F4F4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3348 21.0037H5.57906C4.33591 21.0037 3.32813 19.996 3.32813 18.7528V8.49854C3.32781 7.95823 3.43741 7.4235 3.65026 6.92688L4.74472 4.36282C5.09863 3.53379 5.91317 2.99601 6.81458 2.99625H17.8482C18.7496 2.99601 19.5641 3.53379 19.918 4.36282L21.0185 6.92688C21.2295 7.4239 21.3374 7.95859 21.3356 8.49854V19.0029C21.3356 20.1079 20.4398 21.0037 19.3348 21.0037Z" stroke="#4F4F4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="flex items-center">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_855_39068)">
                                <circle cx="7" cy="5" r="4" fill="#141511"/>
                                <circle cx="7" cy="5" r="4.5" stroke="white"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_855_39068" x="0" y="0" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="2"/>
                                <feGaussianBlur stdDeviation="1"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_855_39068"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_855_39068" result="shape"/>
                                </filter>
                                </defs>
                                </svg>
                                <svg viewBox="0 0 876 2" fill="none" xmlns="http://www.w3.org/2000/svg" style={ { width: '100%'}}>
                                <path d="M0 1L876 1.00008" stroke="#141511" stroke-dasharray="6 4"/>
                                </svg>
                            </div>
                            <div className="relative right-[30px] text-[#4F4F4D] font-normal">Preparing</div>
                        </div>
                        <div className="flex flex-col gap-[12px]">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative right-[7px]">
                            <path d="M19.3722 18.296C19.9912 18.915 19.9912 19.918 19.3722 20.536C18.7532 21.155 17.7502 21.155 17.1322 20.536C16.5132 19.917 16.5132 18.914 17.1322 18.296C17.7512 17.677 18.7542 17.677 19.3722 18.296" stroke="#4F4F4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.37184 18.296C8.99084 18.915 8.99084 19.918 8.37184 20.536C7.75284 21.155 6.74984 21.155 6.13184 20.536C5.51384 19.917 5.51284 18.914 6.13184 18.296C6.75084 17.678 7.75284 17.677 8.37184 18.296" stroke="#4F4F4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.668 4H14.668C15.22 4 15.668 4.448 15.668 5V15H2.66797" stroke="#4F4F4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.66797 19.416H3.66797C3.11597 19.416 2.66797 18.968 2.66797 18.416V13" stroke="#4F4F4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.668 7H19.991C20.4 7 20.768 7.249 20.919 7.629L22.525 11.643C22.619 11.879 22.668 12.131 22.668 12.385V18.333C22.668 18.885 22.22 19.333 21.668 19.333H19.837" stroke="#4F4F4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.6698 19.42H8.83984" stroke="#4F4F4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22.668 14H18.668V10H21.868" stroke="#4F4F4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.66797 4H7.66797" stroke="#4F4F4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.66797 7H5.66797" stroke="#4F4F4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.66797 10H2.66797" stroke="#4F4F4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="flex items-center">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_855_39068)">
                                <circle cx="7" cy="5" r="4" fill="#141511"/>
                                <circle cx="7" cy="5" r="4.5" stroke="white"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_855_39068" x="0" y="0" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="2"/>
                                <feGaussianBlur stdDeviation="1"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_855_39068"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_855_39068" result="shape"/>
                                </filter>
                                </defs>
                                </svg>
                                <svg viewBox="0 0 876 2" fill="none" xmlns="http://www.w3.org/2000/svg" style={ { width: '100%'}}>
                                <path d="M0 1L876 1.00008" stroke="#141511" stroke-dasharray="6 4"/>
                                </svg>
                            </div>
                            <div className="relative right-[30px] text-[#4F4F4D] font-normal">Shipped</div>
                        </div>
                        <div className="flex flex-col gap-[12px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative right-[7px]">
                            <path d="M9.99864 12L6.14453 17.8029" stroke="#4F4F4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z" stroke="#4F4F4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 15.108V19.2758C2.99999 19.7331 3.18164 20.1716 3.505 20.495C3.82835 20.8183 4.26692 21 4.72421 21H9.874" stroke="#4F4F4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 6V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H16.5913" stroke="#4F4F4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 15.108L10.1981 21.2777C10.7418 21.7438 11.4343 22 12.1504 22H15.4391C15.8919 22 16.3026 21.7342 16.4881 21.3211C16.6737 20.908 16.5995 20.4245 16.2986 20.086L14 17.5V16.5H16.0629C16.8566 16.5 17.5 15.8566 17.5 15.0629V15.0629C17.5 14.4085 17.058 13.8368 16.4248 13.672L10 12L3 6" stroke="#4F4F4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="flex items-center">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_855_39068)">
                                <circle cx="7" cy="5" r="4" fill="#141511"/>
                                <circle cx="7" cy="5" r="4.5" stroke="white"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_855_39068" x="0" y="0" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="2"/>
                                <feGaussianBlur stdDeviation="1"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_855_39068"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_855_39068" result="shape"/>
                                </filter>
                                </defs>
                                </svg>
                            </div>
                            <div className="relative right-[30px]">Delivered</div>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-2">
                        <div className="col-span-1 gap-[16px] flex flex-col p-[20px]">
                            <div className="text-[#141511] text-[20px] font-medium">Product details</div>
                            <div className="w-full flex items-center gap-3 h-[111px]">
                                <img src={`/images/payment-image1.svg`} className="h-full object-contain" />
                                <div className="w-full flex flex-col h-full justify-between py-1">
                                    <div className="text-[#141511] text-lg font-medium leading-[150%]">Ocean breeze varsity jacket</div>
                                    <div className="text-[#141511] text-xl font-medium price">120.00 TND</div>
                                    <div className="w-full grid grid-cols-10 items-center justify-between gap-2">
                                        <div className="col-span-6 text-[#4F4F4D] text-base leading-[150%]">Color: <span>Solid Blue</span></div>
                                        <div className="col-span-4 text-[#4F4F4D] text-base leading-[150%]">Size: <span>XL</span></div>
                                    </div>
                                    <div className="w-full grid grid-cols-10 items-center justify-between gap-2">
                                        <div className="col-span-6 text-[#4F4F4D] text-base leading-[150%]">Category: <span>{("varsity jacket").substring(0,13)}{("varsity jacket").length > 13 ? '...' : ''}</span></div>
                                        <div className="col-span-4 text-[#4F4F4D] text-base leading-[150%]">Quantity: <span>1 Pcs</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex items-center gap-3 h-[111px]">
                                <img src={`/images/payment-image1.svg`} className="h-full object-contain" />
                                <div className="w-full flex flex-col h-full justify-between py-1">
                                    <div className="text-[#141511] text-lg font-medium leading-[150%]">Ocean breeze varsity jacket</div>
                                    <div className="text-[#141511] text-xl font-medium price">120.00 TND</div>
                                    <div className="w-full grid grid-cols-10 items-center justify-between gap-2">
                                        <div className="col-span-6 text-[#4F4F4D] text-base leading-[150%]">Color: <span>Solid Blue</span></div>
                                        <div className="col-span-4 text-[#4F4F4D] text-base leading-[150%]">Size: <span>XL</span></div>
                                    </div>
                                    <div className="w-full grid grid-cols-10 items-center justify-between gap-2">
                                        <div className="col-span-6 text-[#4F4F4D] text-base leading-[150%]">Category: <span>{("varsity jacket").substring(0,13)}{("varsity jacket").length > 13 ? '...' : ''}</span></div>
                                        <div className="col-span-4 text-[#4F4F4D] text-base leading-[150%]">Quantity: <span>1 Pcs</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex items-center gap-3 h-[111px]">
                                <img src={`/images/payment-image1.svg`} className="h-full object-contain" />
                                <div className="w-full flex flex-col h-full justify-between py-1">
                                    <div className="text-[#141511] text-lg font-medium leading-[150%]">Ocean breeze varsity jacket</div>
                                    <div className="text-[#141511] text-xl font-medium price">120.00 TND</div>
                                    <div className="w-full grid grid-cols-10 items-center justify-between gap-2">
                                        <div className="col-span-6 text-[#4F4F4D] text-base leading-[150%]">Color: <span>Solid Blue</span></div>
                                        <div className="col-span-4 text-[#4F4F4D] text-base leading-[150%]">Size: <span>XL</span></div>
                                    </div>
                                    <div className="w-full grid grid-cols-10 items-center justify-between gap-2">
                                        <div className="col-span-6 text-[#4F4F4D] text-base leading-[150%]">Category: <span>{("varsity jacket").substring(0,13)}{("varsity jacket").length > 13 ? '...' : ''}</span></div>
                                        <div className="col-span-4 text-[#4F4F4D] text-base leading-[150%]">Quantity: <span>1 Pcs</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex items-center gap-3 h-[111px]">
                                <img src={`/images/payment-image1.svg`} className="h-full object-contain" />
                                <div className="w-full flex flex-col h-full justify-between py-1">
                                    <div className="text-[#141511] text-lg font-medium leading-[150%]">Ocean breeze varsity jacket</div>
                                    <div className="text-[#141511] text-xl font-medium price">120.00 TND</div>
                                    <div className="w-full grid grid-cols-10 items-center justify-between gap-2">
                                        <div className="col-span-6 text-[#4F4F4D] text-base leading-[150%]">Color: <span>Solid Blue</span></div>
                                        <div className="col-span-4 text-[#4F4F4D] text-base leading-[150%]">Size: <span>XL</span></div>
                                    </div>
                                    <div className="w-full grid grid-cols-10 items-center justify-between gap-2">
                                        <div className="col-span-6 text-[#4F4F4D] text-base leading-[150%]">Category: <span>{("varsity jacket").substring(0,13)}{("varsity jacket").length > 13 ? '...' : ''}</span></div>
                                        <div className="col-span-4 text-[#4F4F4D] text-base leading-[150%]">Quantity: <span>1 Pcs</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex items-center gap-3 h-[111px]">
                                <img src={`/images/payment-image1.svg`} className="h-full object-contain" />
                                <div className="w-full flex flex-col h-full justify-between py-1">
                                    <div className="text-[#141511] text-lg font-medium leading-[150%]">Ocean breeze varsity jacket</div>
                                    <div className="text-[#141511] text-xl font-medium price">120.00 TND</div>
                                    <div className="w-full grid grid-cols-10 items-center justify-between gap-2">
                                        <div className="col-span-6 text-[#4F4F4D] text-base leading-[150%]">Color: <span>Solid Blue</span></div>
                                        <div className="col-span-4 text-[#4F4F4D] text-base leading-[150%]">Size: <span>XL</span></div>
                                    </div>
                                    <div className="w-full grid grid-cols-10 items-center justify-between gap-2">
                                        <div className="col-span-6 text-[#4F4F4D] text-base leading-[150%]">Category: <span>{("varsity jacket").substring(0,13)}{("varsity jacket").length > 13 ? '...' : ''}</span></div>
                                        <div className="col-span-4 text-[#4F4F4D] text-base leading-[150%]">Quantity: <span>1 Pcs</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-[24px] flex flex-col gap-[12px] border-l border-[#D6D6D5]">
                            <div className="text-[#141511] text-[20px] font-medium">Summary</div>
                            <div className="w-full flex items-center justify-between">
                                <div className="text-[#4F4F4D] text-[18px] flex items-center gap-[4px]">Total Products</div>
                                <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">6 Products</div>
                            </div>
                            <div className="w-full flex items-center justify-between">
                                <div className="text-[#4F4F4D] text-[18px] flex items-center gap-[4px]">Subtotal<img src="/images/question.svg" className="cursor-pointer" /></div>
                                <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">754.50 TND</div>
                            </div>
                            <div className="w-full flex items-center justify-between">
                                <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">Estimated shipping</div>
                                <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">0.00 TND</div>
                            </div>
                            <div className="w-full flex items-center justify-between">
                                <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">Estimated tax</div>
                                <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">20.00 TND</div>
                            </div>
                            <div className="w-full flex items-center justify-between">
                                <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">Discount <span className="text-[#E0523F] font-medium">10% OFF</span></div>
                                <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px]">-75.45 TND</div>
                            </div>
                            <div className="w-full flex items-center justify-between">
                                <div className="text-[#141511] text-[18px] flex items-center gap-[4px] font-semibold">Total payment </div>
                                <div className="text-[#4F4F4D] text-[20px] flex items-center gap-[8px] font-semibold">697.05 TND</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderList