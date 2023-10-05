import React from "react";
import Header from "../components/header";
import AvatarComponent from "../components/avatar";
import InputComponent from "../components/input";
import ButtonComponent from "../components/button";

export default function profile() {
  return (
    <>
      <main className="flex w-screen h-screen min-h-screen min-w-screen flex-col items-center  bg-gradient-to-tl from-gray-700 via-gray-900 to-black ">

      <Header logo="Blog Nerd" user="Caue Silva" avatar="http://github.com/cauesilva1.png"/>

        <div className="flex items-center flex-col w-[826px] h-[80%] max-[780px]:w-4/5 max-[780px]:h-4/5 bg-[#272727] transition-all duration-50 rounded-3xl mt-10">

        <div className="flex flex-col items-center mt-3">

          
        <AvatarComponent avatar="http://github.com/cauesilva1.png" style="w-32 h-32 rounded-full max-[780px]:h-20 max-[780px]:w-20"/>
           
        <button className="flex flex-col items-center font-bold text-white mt-2 ">
          Edit photo
        </button>

        </div>

        <div className="flex flex-col items-center  w-full max-[780px]:w-44 transition-all duration-50">

        <div className="flex flex-col mb-22 gap-8 max-[780px]:gap-2 w-3/4 max-[780px]:w-72 transition-all duration-50">

        <div className="flex flex-col ">
        <p className="text-10 font-bold text-white justify-start">Name:</p>
        <InputComponent type="text" placeholder="write your name.." className="p-2 rounded-lg bg-[#707070] border-black border"/>
        </div>

        <div className="flex flex-col ">
        <p className="text-10 font-bold text-white justify-start">Subname:</p>
        <InputComponent type="text" placeholder="write your subname.." className="p-2 rounded-lg bg-[#707070] border-black border"/>
        </div>

        <div className="flex flex-col ">
        <p className="text-10 font-bold text-white justify-start">Email:</p>
        <InputComponent type="password" placeholder="write your email.." className="p-2 rounded-lg bg-[#707070] border-black border"/>
        </div>

        <div className="flex flex-col ">
        <p className="text-10 font-bold text-white justify-start">Adress:</p>
        <InputComponent type="text" placeholder="write your adress.." className="p-2 rounded-lg bg-[#707070] border-black border"/>
        </div>

        </div>

        </div>

       
        <ButtonComponent ContentButton='Save profile' Link='#' style="bg-[#656565] hover:bg-[#3a3a3a] transition-colors duration-250 py-2 px-10 rounded-lg mt-8"/>

        </div>
      </main>
    </>
  );
}