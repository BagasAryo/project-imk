import React from 'react'

const About = () => {
  return (
    <div id="about" className="from-slate-500 bg-gradient-to-t to-slate-50 grid grid-cols-1 lg:grid-cols-3 items-center md:py-14 pb-1 gap-8">
      <div className="grid col-span-2 mx-20 gap-2">
        <h4 className="font-normal tracking-tight  md:text-sm lg:text-lg">
          Warung yang didirikan sejak tahun 2014 ini bermulakan dari sepasang suami istri yang ingin mencari kesibukan baru selama masa pensiunnya. 
          Bernamakan warung WB berasal dari nama keluarga yang berarti Wibowo. Mengutamakan kenyamanan dan kepuasan pembeli yang kami anggap sebagai bagian dari keluarga.
          Makanan yang paling sering dicari adalah menu varian ayam kami, salah satunya ayam geprek. Dengan total jumlah 80 potong ayam bisa habis dalam sehari penjualan. Kebanyakan dari konsumen kami adalah pekerja yang tinggal di kos sekitaran warung kami.
        </h4>
      </div>
      <img className="" src="https://images.unsplash.com/photo-1640141861696-54685fddf4ce?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
  );
}

export default About;