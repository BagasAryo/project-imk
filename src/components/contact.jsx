import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaHome } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const Contact = () => {
  return (
    <footer id="contact" className="bg-neutral-100 text-center text-neutral-600 mt-64 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">Get connected with us on social networks:</div>
        {/* <!-- Social network icons container --> */}
        <div className="flex justify-center">
          <div className="flex gap-4 mr-5 text-neutral-600 dark:text-neutral-200 text-xl cursor-pointer active:">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 divide-x-2">
          {/* <!-- TW Elements section --> */}
          <div className="py-1 px-4 mx-auto max-w-screen-md">
            <form action="#" className="space-y-8">
              <div className="gap-5 mb-2">
                <label htmlFor="uname" className="text-sm text-center">
                  Username
                </label>
                <input type="text" className="shadow-sm text-sm rounded-lg w-full p-1.5 text-black" required />
              </div>
              <div className="gap-5 mb-2">
                <label htmlFor="email" className="text-sm text-center">
                  Email
                </label>
                <input type="email" className="shadow-sm rounded-lg w-full p-1.5 text-black" required />
              </div>
              <div className="gap-5 mb-2">
                <label htmlFor="uname" className="text-sm text-center">
                  Kritik dan Saran
                </label>
                <textarea type="text" className="shadow-sm rounded-lg w-full p-1.5 text-black" required />
              </div>
              <button type="submit" className="outline rounded-md p-1 bg-yellow-300 text-slate-700 hover:bg-red-500 ">Submit</button>
            </form>
          </div>
  
          {/* <!-- Contact section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start ml-2">Hubungi kami</h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaHome className="mr-3 h-5 w-12" />
              Jl. Puspogiwang I No.25, Gisikdrono, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50149
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <IoMdCall className="mr-3 h-5 w-8" />+ 62 899 234 876
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">Copyright © 2024 Cilok Ba Cirebon. All Right Reserved.</div>
    </footer>
  );
};

export default Contact;
