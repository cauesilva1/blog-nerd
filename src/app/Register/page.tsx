import RegisterForm from "../tools/RegisterForm";

import { Button } from "../components/Button";

import { IoIosArrowBack} from "react-icons/io";


export default function Register() {

  return (
    <main className="flex w-screen h-screen min-h-screen min-w-screen flex-col items-center justify-center bg-gradient-to-tl from-gray-700 via-gray-900 to-black">
    
      <Button.Root className="absolute top-14 left-10 max-[780px]:left-2 max-[780px]:top-4 bg-[#246CD8] hover:bg-[#77adff]/40 hover:transition-all hover:duration-[0.2s] " href="/">
        <IoIosArrowBack />
        <Button.Content>VOLTAR</Button.Content>
      </Button.Root>
      

      <RegisterForm />

    </main>
  );
}
