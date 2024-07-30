// import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, Link } from 'react-router-dom'






export default function Navbar() {


    return (
        <nav className=" z-50 relative min-w-screen">
            <div className="bg-gray-800 mx-auto px-2 sm:px-6 lg:px-8 fixed top-0 left-0 right-0">
                <div className="relative flex h-24 items-center justify-between">
                    <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                        {/* Mobile menu button*/}
                        <button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link to="/"><h1 className='text-3xl text-white font-bold'> START FRAMEWORK</h1></Link>

                        </div>

                    </div>



                    <div className="hidden space-x-a md:block">
                        <ul className='flex justify-around items-center gap-7'>

                            <li>
                                <NavLink to="/about" className={'text-white text-[18px] uppercase font-bold'}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio" className={'text-white text-[18px] uppercase font-bold'}>Portfolio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={'text-white text-[18px] uppercase font-bold'}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>




                </div>
            </div>

            <div className="2xl:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <div className=" space-x-a">
                        <ul className='flex justify-around items-center gap-7'>

                            <li>
                                <NavLink to="/about" className={'text-white text-[18px] uppercase font-bold'}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio" className={'text-white text-[18px] uppercase font-bold'}>Portfolio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={'text-white text-[18px] uppercase font-bold'}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>

    )
}

