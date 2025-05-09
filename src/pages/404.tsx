import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Custom404() {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='container mx-auto flex justify-center items-center flex-col'>
                <div className='px-3 py-5'>
                    <Image
                        src={"/SVG/404-2.svg"}
                        alt='404 icon'
                        height={400}
                        width={400}
                    />
                </div>
                <h1 className='md:text-2xl font-semibold text-accent'>404 || Halaman Tidak Ditemukan !!</h1>
                <div className='mt-5'>
                    <Link href={"/"} className='py-2 px-5 bg-accent rounded shadow-2xl'>
                        Kembali
                    </Link>
                </div>
            </div>
        </div>
    )
}
