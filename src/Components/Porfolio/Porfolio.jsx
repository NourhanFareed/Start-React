

export default function Porfolio() {
  return (
    <>
      <div className=" h-auto pt-10 pb-28 z-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl text-slate-900 font-bold mt-4 uppercase">portfolio component</h1>
          <div className="mt-4 relative w-56 flex justify-between">
            <span className="after:h-1 after:w-20 after:bg-slate-900 text-slate-900 after:content-[''] after:left-0 after:absolute pt-2"></span>
            <i className="fa-solid fa-star text-slate-900 text-xl "></i>
            <span className="after:h-1 after:w-20 after:bg-slate-900 text-slate-900 after:content-[''] after:right-0 after:absolute pt-2"></span>
          </div>
          <div>
            <div className="container mt-10">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
                <div className="rounded-lg w-96 relative group">
                  <img className="rounded-xl" src="/src/assets/images/cabin.4417330275f78faa31c3.png" alt="image1" />
                  <div className="layer group-hover:flex transition-all justify-center items-center absolute z-20 mx-auto bg-emerald-600 w-full h-full inset-0 rounded-xl hidden ">
                    <i className="fas fa-plus text-white text-6xl mx-auto left-[165px] top-[115px] "></i>
                  </div>
                </div>
                <div className="rounded-lg w-96 relative group">
                  <img className="rounded-xl" src="/src/assets/images/cake.6554473016d32b343f02.png" alt="image2" />
                  <div className="layer group-hover:flex transition-all justify-center items-center absolute z-20 mx-auto bg-emerald-600 w-full h-full inset-0 rounded-xl  hidden">
                    <i className="fas fa-plus text-white text-6xl mx-auto  left-[165px] top-[115px] "></i>
                  </div>
                </div>
                <div className="rounded-lg w-96 relative group">
                  <img className="rounded-xl" src="/src/assets/images/circus.494a4a914b5471b41f3e.png" alt="image3" />
                  <div className="layer group-hover:flex transition-all justify-center items-center absolute z-20 mx-auto bg-emerald-600 w-full h-full inset-0 rounded-xl  hidden">
                    <i className="fas fa-plus text-white text-6xl mx-auto  left-[165px] top-[115px] "></i>
                  </div>
                </div>
                <div className="rounded-lg w-96 relative group">
                  <img className="rounded-xl" src="/src/assets/images/game.a940b57aa7bab2eacc52.png" alt="image4" />
                  <div className="layer group-hover:flex transition-all justify-center items-center absolute z-20 mx-auto bg-emerald-600 w-full h-full inset-0 rounded-xl  hidden">
                    <i className="fas fa-plus text-white text-6xl mx-auto  left-[165px] top-[115px] "></i>
                  </div>
                </div>
                <div className="rounded-lg w-96 relative group">
                  <img className="rounded-xl" src="/src/assets/images/safe.01792c0bdc342bf4bf9c.png" alt="image5" />
                  <div className="layer group-hover:flex transition-all justify-center items-center absolute z-20 mx-auto bg-emerald-600 w-full h-full inset-0 rounded-xl  hidden">
                    <i className="fas fa-plus text-white text-6xl mx-auto  left-[165px] top-[115px] "></i>
                  </div>
                </div>
                <div className="rounded-lg w-96 relative group">
                  <img className="rounded-xl" src="/src/assets/images/submarine.48c9704ca7f8ce901038.png" alt="image6" />
                  <div className="layer group-hover:flex transition-all justify-center items-center absolute z-20 mx-auto bg-emerald-600 w-full h-full inset-0 rounded-xl  hidden">
                    <i className="fas fa-plus text-white text-6xl mx-auto  left-[165px] top-[115px] "></i>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}


