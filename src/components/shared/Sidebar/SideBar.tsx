import Image from 'next/image'
import React from 'react'

export default function SideBar() {
    return (
        <>
            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full pr-8 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2">
                        <li className='mb-14'>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
                                <Image src={require('../../../assets/images/logo.png')} alt="logo" width={60} />
                                <span className="ml-3 font-bold text-lg">S & S Vault</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center px-2 py-4 bg-primary-500 text-lg font-normal text-white rounded-lg dark:text-white hover:bg-primary-500 hover:text-white">
                                <Image src={require('../../../assets/icons/home.png')} alt="logo" width={24} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center px-2 py-4 bg-primary-500 text-lg font-normal text-white rounded-lg dark:text-white hover:bg-primary-500 hover:text-white">
                                <Image src={require('../../../assets/icons/home.png')} alt="logo" width={24} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>



        </>
    )
}
