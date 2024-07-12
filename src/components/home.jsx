import React from 'react'

const Home = () => {
  return (
    <div id="home" className="from-slate-400 bg-gradient-to-b to-slate-50 page-center grid grid-cols-1 lg:grid-cols-3 items-center md:py-14 pt-32 pb-1 gap-8">
      <img className="relative" src="https://images.unsplash.com/photo-1640141862664-6209e5a29372?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className="grid col-span-2 m-auto gap-2">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-5xl">
          WARUNG MAKAN <span className="bg-red-500 p-1 rounded-md">WB</span>
        </h1>
        <p className="text-md lg:text-xl">Makan disini gaakan berabe, Perut kenyang rasa nendang.</p>
        <p className='text-md lg:text-xl'>Warung makan ter-comfy se-semarang</p>
      </div>
    </div>
  );
}

export default Home;