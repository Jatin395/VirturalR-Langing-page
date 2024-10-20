import React, { useRef } from 'react';


function Navbar() {
    const mob_v = useRef(null);

    function showmenu() {
        mob_v.current.classList.toggle('hidden');
    }
    function hidemenu() {
        if(mob_v){
            mob_v.current.classList.add('hidden');
        }
    }

    return (
        <>
            <div className="flex justify-around items-center p-4 bg-dark text-white">

                <div className="flex gap-2">
                    <h2 className='text-2xl cursor-pointer font-semibold'>VirturalR</h2>
                </div>

                <div className="md:hidden">
                    <button onClick={showmenu} className='text-xl'><i class="ri-menu-line"></i></button>
                </div>
                {/* window view */}
                <div className="hidden md:flex gap-12 font-semibold text-lg">

                    <ul className='flex gap-6'>
                        <li><a href='home' className='hover:text-gray-400'>Home</a></li>
                        <li><a href='#fre' className='hover:text-gray-400'>Feature</a></li>
                        <li><a href='#work' className='hover:text-gray-400'>WorkFlow</a></li>
                        <a href='#price' className='hover:text-gray-400'>Price</a>
                        <li><a href='#test' className='hover:text-gray-400'>Testimoials</a></li>
                    </ul>

                </div>

                <div className="hidden md:flex gap-8">
                    <button className='text-lg hover:text-gray-400'>Sign in</button>
                    <button className='bg-light p-2 rounded-md h-12 w-40 hover:scale-95'>Create an account</button>
                </div>

                {/* moblie view */}
                <div className="hidden fixed inset-0 bg-slate-900 h-96 z-10 md:hidden p-4 m-4" id='mob_v' ref={mob_v}>

                    <div className="flex justify-around">

                        <div className="flex gap-2">
                            <h2 className='text-xl font-semibold'>VirturalR</h2>
                        </div>

                        <div className="md:hidden">
                            <button onClick={showmenu}><i class="ri-close-large-line"></i></button>
                        </div>
                    </div>

                    <ul className='mt-8 flex flex-col justify-around items-center gap-4 w-screen'>
                        <li><a href='home' onClick={hidemenu}>Home</a></li>
                        <li><a href='#fre' onClick={hidemenu}>Feature</a></li>
                        <li><a href='#work' onClick={hidemenu}>WorkFlow</a></li>
                        <a href='#price' onClick={hidemenu}>Price</a>
                        <li><a href='#test' onClick={hidemenu}>Testimoials</a></li>
                        <button className='' onClick={hidemenu}>Login</button>
                        <button onClick={hidemenu}>Sign up</button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
