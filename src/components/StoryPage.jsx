import React from "react";
import img1 from "../assets/png/storyImg.png";
import StoryBgImg from "../assets/jpg/storyImgBg.jpg";
import Logo from "../assets/svg/Header-logo.svg";
import img2 from "../assets/png/StoryImg2.png";
import img3 from "../assets/png/StoryImg3.png";

import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { LuMessageCircle } from "react-icons/lu";
import { FiSend } from "react-icons/fi";
import { CiSaveDown2 } from "react-icons/ci";

const StoryPage = () => {
  const posts = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
  ];

  return (
    <section
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${StoryBgImg})`,
      }}
    >
      <div className="max-w-6xl mx-auto text-center rounded-xl pt-[30px] md:pt-[30px] md:pb-[30px] pb-[30px]">
        {/* Subheading */}

        {/* Main Heading */}
        <h2
          class="text-outline-white font-normal text-2xl md:text-[40px] mt-1 md:leading-[70px] font-mono45"
        >
          FIQUE A PAR DAS NOVIDADES
        </h2>

        <p className="uppercase text-base text-[#E5376B] tracking-widest mt-[15px]">
          Siga-nos nas redes sociais
        </p>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 px-5 lg:px-0">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-[16px] shadow-md overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2">
                  <img
                    src={Logo}
                    alt="logo"
                    className="w-11 h-11 rounded-full bg-[#e5376b]"
                  />
                  <span className="font-semibold text-gray-800 text-base leading-6">
                    Demodouro
                  </span>
                </div>
                <button className="text-black font-bold text-2xl">
                  <PiDotsThreeVerticalBold />
                </button>
              </div>

              {/* Post Image */}
              <div className="w-auto bg-white">
                <img
                  src={post.img}
                  alt="post"
                  className="w-full h-[350px] object-cover object-top"
                />
              </div>

              {/* Footer Icons */}
              <div className="flex justify-between items-center px-6 py-[18px]">
                <div className="flex gap-4">
                  <button>
                    <FiHeart className="h-6 w-6" />
                  </button>
                  <button>
                    <LuMessageCircle className="h-6 w-6" />
                  </button>
                  <button>
                    <FiSend className="h-6 w-6" />
                  </button>
                </div>
                <button>
                  <CiSaveDown2 className="h-6 w-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryPage;
