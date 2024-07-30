

export default function Contact() {
    return (
        <div className=" h-auto py-20">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl text-slate-900 font-bold mt-4 uppercase">Contact Section</h1>
                <div className="mt-4 relative w-56 flex justify-between">
                    <span className="after:h-1 after:w-20 after:bg-slate-900 text-slate-900 after:content-[''] after:left-0 after:absolute pt-2"></span>
                    <i className="fa-solid fa-star text-slate-900 text-xl "></i>
                    <span className="after:h-1 after:w-20 after:bg-slate-900 text-slate-900 after:content-[''] after:right-0 after:absolute pt-2"></span>
                </div>

                <div className="flex items-center justify-start w-screen mt-5">
                    <div className="relative flex flex-col justify-start items-center 2xl:px-72 xl:px-80 mx-auto">
                        <input
                            id="userName"
                            name="userName"
                            type="text"
                            placeholder="userName"
                            className="border-b md:w-[48rem] 2xl:w-[35rem] pl-3 rounded h-14 mb-5 border-gray-300 py-1 focus:border-b-2  transition-colors focus:outline-none peer bg-inherit"
                        />
                        <input
                            id="userAge"
                            name="userAge"
                            type="text"
                            placeholder="userAge"
                            className="border-b md:w-[48rem] 2xl:w-[35rem] pl-3 rounded h-14 mb-5 border-gray-300 py-1 focus:border-b-2  transition-colors focus:outline-none peer bg-inherit"
                        />
                        <input
                            id="userEmail"
                            name="userEmail"
                            type="email"
                            placeholder="userEmail"
                            className="border-b md:w-[48rem] 2xl:w-[35rem] pl-3 rounded h-14 mb-5 border-gray-300 py-1 focus:border-b-2  transition-colors focus:outline-none peer bg-inherit"
                        />
                        <input
                            id="userPassword"
                            name="userPassword"
                            type="password"
                            placeholder="userPassword"
                            className="border-b md:w-[48rem] 2xl:w-[35rem] pl-3 rounded h-14 mb-5 border-gray-300 py-1 focus:border-b-2  transition-colors focus:outline-none peer bg-inherit"
                        />

                        <button
                            className="relative inline-flex w-fit justify-start items-start left-0 h-11 active:scale-95 transition overflow-hidden rounded-lg focus:outline-none"
                        >
                            <span
                                className="inline-flex h-full w-full cursor-pointer items-center justify-start rounded-lg bg-emerald-500 px-2 py-0 text-[17px] font-semibold text-white backdrop-blur-2xl "
                            >
                                Send Message

                            </span>
                        </button>


                    </div>
                </div>

            </div>


        </div >
    )
}
