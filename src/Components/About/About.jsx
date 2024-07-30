

export default function About() {
    return (
        <div className="bg-emerald-400 h-auto py-52">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl text-white font-bold mt-4 uppercase">About Component</h1>
                <div className="mt-4 relative w-56 flex justify-between">
                    <span className="after:h-1 after:w-20 after:bg-white after:content-[''] after:left-0 after:absolute pt-2"></span>
                    <i className="fa-solid fa-star text-white text-xl "></i>
                    <span className="after:h-1 after:w-20 after:bg-white after:content-[''] after:right-0 after:absolute pt-2"></span>
                </div>
                <div className="flex justify-between items-center px-52 text-left sm:flex-col xl:flex-row">
                    <p className="text-white mt-4 me-5">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
                    <p className="text-white mt-4">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
                </div>

            </div>

        </div>
    )
}
