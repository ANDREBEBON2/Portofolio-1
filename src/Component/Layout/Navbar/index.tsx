import React, { useEffect, useState } from 'react'
import Image from 'next/image';
export default function Index() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    // const [activeSection, setActiveSection] = useState('');

    // useEffect(() => {
    //     const handleHashChange = () => {
    //         setActiveSection(window.location.hash);
    //     };

    //     // Cek saat pertama render
    //     handleHashChange();

    //     // Dengarkan perubahan hash
    //     window.addEventListener('hashchange', handleHashChange);

    //     return () => {
    //         window.removeEventListener('hashchange', handleHashChange);
    //     };
    // }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50); // Ubah angka 10 sesuai kebutuhan
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);


    return (
        <div className={`${isScroll ? 'bg-secondary shadow-2xl' : 'bg-transparent'} transition duration-400 ease-in-out  drop-shadow-2xl fixed w-full z-20`}>
            <div className={`${isOpen ? 'bg-secondary' : ''} `}>
                <div className='container px-3 sm:px-5
            md:px-7 lg:px-10 mx-auto'>
                    <div className='py-3 md:py-7'>
                        <div className='flex justify-end'>
                            <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'border rounded-sm' : ''} py-1 px-2 focus:outline-none focus:outline-1 focus:outline-text rounded-b-sm md:hidden`}>
                                <Image
                                    src="/SVG/menu.svg"
                                    alt='menu'
                                    height={25}
                                    width={25}
                                />
                            </button>
                        </div>
                        <div className={`${isOpen ? 'block' : 'max-md:hidden'} max-md:py-7 flex gap-10 flex-col overflow-hidden md:max-h-full md:flex-row`}>
                            <a onClick={() => setIsOpen(false)} href="#Home" className='uppercase block font-extrabold text-primary'>Home</a>
                            <a onClick={() => setIsOpen(false)} href="#About" className='uppercase block font-semibold hover:text-primary'>About</a>
                            <a onClick={() => setIsOpen(false)} href="#Portofolio" className='uppercase block font-semibold hover:text-primary'>Portofolio</a>
                            <a onClick={() => setIsOpen(false)} href="#Contact" className='uppercase block font-semibold hover:text-primary'>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
