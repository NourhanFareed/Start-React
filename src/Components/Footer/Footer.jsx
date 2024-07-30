

export default function Footer() {
    return (
        <div className="w-full">
            <div className='flex justify-evenly bg-slate-800 min-h-full py-32  bottom-0'>
                <div className='text-center'>
                    <h3 className='text-white uppercase text-3xl'>location</h3>
                    <p className='text-white capitalize'>2215 John Daniel Drive</p>
                    <p className='text-white capitalize'>Clark, MO 65243</p>
                </div>
                <div className='text-center ps-20'>
                    <h3 className='text-white uppercase text-3xl'>AROUND THE WEB</h3>
                    <ul className='list-none flex justify-evenly px-2 mt-3'>
                        <li className='border rounded-full py-2 px-3'><a href="#" className='no-underline text-fa-1x text-white '><i className="fa-brands fa-facebook"></i></a></li>
                        <li className='border rounded-full py-2 px-3'><a href="#" className='no-underline text-fa-1x text-white'><i className="fa-brands fa-twitter"></i></a></li>
                        <li className='border rounded-full py-2 px-3'><a href="#" className='no-underline text-fa-1x text-white'><i className="fa-brands fa-linkedin-in"></i></a></li>
                        <li className='border rounded-full py-2 px-3'><a href="#" className='no-underline text-fa-1x text-white'><i className="fa-solid fa-globe"></i></a></li>
                    </ul>
                </div>
                <div className='text-center'>
                    <h3 className='text-white uppercase text-3xl'>ABOUT FREELANCER</h3>
                    <p className='text-white capitalize max-w-sm text-sm mt-1'>Freelance is a free to use, licensed Bootstrap theme created by Route </p>

                </div>
            </div>
            <footer className="text-center bg-gray-900 py-5 text-white">
                <p>Copyright © Your Website 2021</p>
            </footer>
        </div>
    )
}
