import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <div className="border relative border-red-500">
        <Image src={"/sapiens.svg"} alt="" className="z-0 opacity-30" fill />
      </div>
      <div className="">
        <h1 className="font-semibold text-3xl -">
          Love to hear from you,
          <span className="block">
            Get in touch <span className="rotate-90 text-[50px]"> &#9995;</span>
          </span>
        </h1>

        <form action="" className="flex flex-col space-y-6 mt-12">
          <div className="flex space-x-6">
            {/* first col */}
            <div>
              <div className="flex flex-col">
                <label htmlFor="">Your name *</label>
                <input
                  type="text"
                  className="focus:outline-none bg-slate-100 rounded border-[#e4cfae] px-3 py-2"
                />
              </div>
            </div>
            {/* second col */}
            <div>
              <div className="flex flex-col">
                <label htmlFor="">Your email *</label>
                <input
                  type="email"
                  className="focus:outline-none bg-slate-100 rounded border-[#e4cfae] px-3 py-2"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <label htmlFor="">Your email *</label>
              <textarea
                rows={5}
                className="focus:outline-none bg-slate-100 rounded border-[#e4cfae] px-3 py-2"
              />
            </div>
          </div>
          <button className="uppercase border py-2 hover:text-white bg-white text-[#837561] hover:bg-[#b8ae9e] font-semibold ">submit</button>
        </form>
      </div>
    </div>
  );
}
