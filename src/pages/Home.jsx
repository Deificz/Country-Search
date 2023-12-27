import React from 'react'
import img_logo from '../assets/Logo.png'
import SearchBar from '../components/search_bar'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
export default function Home() {

    const [text1] = useTypewriter({
        words:['earch a COUNTRY'],
        loop:{},
        typeSpeed: 50,
        deleteSpeed: 40,
    });

  return (
    <>
    <img src={img_logo} alt="" className='h-16 ml-5 mt-5' />
    <div className='flex flex-col items-center mt-40 h-screen'>
        <h1 className='text-3xl text-white font-bold'>S{text1}</h1>
        <form action="">
            <SearchBar/>
        </form>
    </div>
    </>
    
  )
}
