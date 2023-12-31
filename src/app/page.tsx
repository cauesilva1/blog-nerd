import { Text } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import Separator from './components/separetor';
import Header from './components/header';
import { Button } from './components/Button';
import React from 'react';



export default function Home() {

  return (
    <main className="flex w-screen h-screen min-h-screen min-w-screen flex-col items-center  bg-gradient-to-tl from-gray-700 via-gray-900 to-black">
      
      <Header />


      <div className="flex flex-col w-3/4 h-3/4 max-[780px]:w-64 max-[780px]:h-4/5 justify-between items-center bg-[#272727] rounded-xl mt-16">
        <Text style={{marginTop: '2rem', fontSize: '40px' , color: 'white', width: '100%', display: 'flex', justifyContent: 'center' }}> Blog nerd</Text>

        <Separator />


        <h3 className='mt-2 mb-2 text-[40px] text-white w-4/5 flex justify-center items-center text-center max-[780px]:text-base'> Aqui voce ira encontrar a melhor comunidade nerd/dev.</h3>



        <div className=' w-3/4  flex items-center justify-center gap-80 mt-12 mb-10 max-[780px]:flex-col max-[780px]:gap-2 '>

        
        <Button.Root href="Login">
          <Button.Content>Login</Button.Content>
        </Button.Root>

        <Button.Root href="Register">
          <Button.Content>Register</Button.Content>
        </Button.Root>


        
        </div>
      </div>
    </main>
  )
}
