"use client"

import InputComponent from "../components/input";
import { Text } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import Link from "next/link";
import { Button } from "../components/Button";

export default function RegisterForm(){

    function handleSubmit(e: any){
        e.preventDefault();

        console.log("funcionou")
    }

    return (
        <div className="flex flex-col w-[826px] h-3/4 max-[780px]:w-64 max-[780px]:h-4/5 justify-between items-center bg-[#272727] rounded-xl transition-all duration-50">

        <Text style={{marginTop: '2rem', fontSize: '40px', color: 'white', width: '100%', display: 'flex', justifyContent: 'center' }}> Register</Text>    

        <div className="flex flex-col mb-22 gap-14 w-3/4 max-[780px]:w-44 transition-all duration-50">
        <div className="flex flex-col ">
        <p className="text-10 font-bold text-white justify-start">User:</p>
        <InputComponent type="text" placeholder="write your user.." className="p-2 rounded-lg bg-[#707070] border-black border"/>
        </div>

        <div className="flex flex-col ">
        <p className="text-10 font-bold text-white justify-start">Password:</p>
        <InputComponent type="password" placeholder="write your Password.." className="p-2 rounded-lg bg-[#707070] border-black border"/>
        </div>

        <div className="flex flex-col ">
        <p className="text-10 font-bold text-white justify-start"> Confirm Password:</p>
        <InputComponent type="password" placeholder="write your Password.." className="p-2 rounded-lg bg-[#707070] border-black border"/>
        <Link rel="stylesheet" href="/Login" className="text-sm font-bold text-blue-700 justify-start mt-2 max-[780px]:text-center mb-4" >
        I have an account! click here
        </Link>
        </div>



        </div>

        <div className="flex mb-10">

        <Button.Root  href="Login">
        <Button.Content>Register</Button.Content>
        </Button.Root>
        </div>

      </div>
    )
}