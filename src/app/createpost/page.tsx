"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/header";

import InputComponent from "../components/input";
import { Button } from "../components/Button";
import { IoIosArrowBack } from "react-icons/io";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createPostUser } from "./createPost";
import { cookiesProfile } from "../Profile/cookiesProfile";



export default function CreatePost() {
  const [ title, setTitle ] = useState("")
  const [ content, setContent ] = useState("")
  const [photo, setPhoto] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchcookies() {
      const userData = await cookiesProfile();


      if (!userData) {
        return;
      }
      const userPhoto = userData.photo;
      setPhoto(userPhoto);
    }

    fetchcookies();
  }, []);


  async function createPosts() {

    const user = await createPostUser()

    const id = user.id
    
     if (title === "" || content === "") {
        toast.error("Preencha todos os campos")
      }else{
        const response = await axios.post("https://backend-blog-nerd.vercel.app/post", {
          id,
          title,
        content
        })
        setTimeout(() => {
          router.push("/Homepage");
        }, 3000);
      }
  }


  return (
    <>
      <main className="flex w-screen h-screen min-h-screen min-w-screen flex-col items-center  bg-gradient-to-tl from-gray-700 via-gray-900 to-black ">
        <Header
          logo="Blog Nerd"
          user="Caue Silva"
          avatar={photo ? `http://github.com/${photo}.png` : 'http://github.com/github.png'}
        />

        <Button.Root
          href="Homepage"
          className="absolute top-20 left-10 max-[780px]:left-2 max-[780px]:top-16 bg-[#246CD8] hover:bg-[#77adff]/40 hover:transition-all hover:duration-[0.2s]"
        >
          <IoIosArrowBack />

          <Button.Content>Voltar</Button.Content>
        </Button.Root>

        <div className="flex items-center justify-between flex-col w-[826px] h-[80%] max-[780px]:w-4/5 max-[780px]:h-[79%] bg-[#272727] transition-all duration-50 rounded-3xl mt-10 max-[780px]:mt-16 max-[780px]:justify-center max-[780px]:gap-14">
          <div className="flex flex-col items-center mt-3">
            <h1 className="text-4xl font-bold text-white">Create post</h1>
          </div>

          <div className="flex flex-col items-center  w-full max-[780px]:w-44 transition-all duration-50 ">
              <div className="flex flex-col mb-22 gap-8 max-[780px]:gap-4 w-3/4 max-[780px]:w-72 transition-all duration-50 ">
              
              
              
              <div className="flex flex-col ">
                <p className="text-10 font-bold text-white justify-start">
                  Title:
                </p>
                <InputComponent
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="write the tile.."
                  className="p-2 rounded-lg bg-[#707070] border-black border"
                />
              </div>

              <div className="flex flex-col ">
                <p className="text-10 font-bold text-white justify-start">
                  Content:
                </p>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="write post.."
                  className="h-44 p-2 rounded-lg bg-[#707070] border-black border"
                />
              </div>
            </div>
          </div>

          <Button.Root className="mb-2" onClick={() => createPosts()}>
            <Button.Content>Create Post</Button.Content>
          </Button.Root>
        </div>
      </main>
    </>
  );
}
