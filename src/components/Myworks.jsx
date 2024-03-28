import React from "react";
import { useState } from "react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import img9 from "../assets/images/img9.png";
import img10 from "../assets/images/img10.jpeg";
import img11 from "../assets/images/img11.png";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";
const Myworks = () => {
  const [tab, setActiveTab] = useState("tab1");
  function handleTab1(tabs) {
    setActiveTab(tabs);
  }
  return (
    <div>
      <h1 className="text-black text-5xl font-semibold text-center pt-5 underline">
        Worksheet 2024
      </h1>
      <div className="flex justify-center my-5 pt-5">
        <p className="bg-black rounded-[20px] px-9 py-2 text-white mb-0 font-normal text-2xl w-[200px]">
          Roshni-384
        </p>
      </div>
      <div className="container max-w-[1140px] w-full mx-auto">
        <div className="flex flex-row flex-wrap pt-5 mt-5">
          <div className="w-1/4 px-3">
            <div>
              <button
                onClick={() => handleTab1("tab1")}
                className="bg-black rounded-[20px] px-9 py-2 text-white font-normal text-2xl w-[200px] mt-5"
              >
                JANUARY
              </button>
              <button
                onClick={() => handleTab1("tab2")}
                className="bg-black rounded-[20px] px-9 py-2 text-white font-normal text-2xl w-[200px] mt-5"
              >
                FEBRUARY
              </button>
              <button
                onClick={() => handleTab1("tab3")}
                className="bg-black rounded-[20px] px-9 py-2 text-white font-normal text-2xl w-[200px] mt-5"
              >
                MARCH
              </button>
              <button className="bg-black rounded-[20px] px-9 py-2 text-white font-normal text-2xl w-[200px] mt-5">
                APRIL
              </button>
            </div>
          </div>
          <div className="w-9/12 px-3">
            {tab === "tab1" && (
              <div>
                <div className="flex flex-wrap items-center flex-row -mx-3">
                  <div className="w-2/5 px-3">
                    <div className="flex">
                      <p className="text-black pr-1 text-2xl font-poppins pb-3">
                        1.
                      </p>
                      <img
                        src={img1}
                        alt="1"
                        className="w-[300px] h-[200px]  rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="w-3/5 px-3">
                    <div className="flex pb-3 items-center">
                      <p className="text-black font-bold text-2xl font-poppins">
                        FT-PLANE
                      </p>
                      <p className="text-black  text-xl font-poppins">
                        (Date of submission : 9-1-2024)
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xl font-poppins font-normal text-nowrap">
                        Github-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://github.com/Roshni-Sahani/ft-plane"
                            target="blank"
                            className="underline"
                          >
                            https://github.com/Roshni-Sahani/ft-plane
                          </a>
                        </span>
                      </p>
                      <p className="text-black text-xl font-poppins text-nowrap">
                        Live-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://ft-plane-blond.vercel.app/"
                            target="blank"
                            className="underline"
                          >
                            https://ft-plane-blond.vercel.app/
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center flex-row -mx-3 mt-3">
                  <div className="w-2/5 px-3">
                    <div className="flex">
                      <p className="text-black pr-1 text-2xl font-poppins pb-3">
                        2.
                      </p>
                      <img
                        src={img2}
                        alt="1"
                        className="w-[300px] h-[200px]  rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="w-3/5 px-3">
                    <div className="flex pb-3 items-center">
                      <p className="text-black font-bold text-2xl font-poppins text-nowrap">
                        FURNITURE
                      </p>
                      <p className="text-black  text-xl font-poppins">
                        (Date of submission : 16-1-2024)
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xl font-poppins font-normal text-nowrap">
                        Github-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://github.com/Roshni-Sahani/furniture"
                            target="blank"
                            className="underline"
                          >
                            https://github.com/Roshni-Sahani/furniture
                          </a>
                        </span>
                      </p>
                      <p className="text-black text-xl font-poppins text-nowrap">
                        Live-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://furniture-nine-omega.vercel.app/"
                            target="blank"
                            className="underline"
                          >
                            https://furniture-nine-omega.vercel.app/
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center flex-row -mx-3 mt-3">
                  <div className="w-2/5 px-3">
                    <div className="flex">
                      <p className="text-black pr-1 text-2xl font-poppins pb-3">
                        3.
                      </p>
                      <img
                        src={img3}
                        alt="1"
                        className="w-[300px] h-[200px]  rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="w-3/5 px-3">
                    <div className="flex pb-3 items-center">
                      <p className="text-black font-bold text-2xl font-poppins">
                        LEMON_WARES
                      </p>
                      <p className="text-black  text-xl font-poppins text-nowrap">
                        (Date of submission : 25-1-2024)
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xl font-poppins font-normal text-nowrap">
                        Github-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://github.com/Roshni-Sahani/furniture"
                            target="blank"
                            className="underline"
                          >
                            https://github.com/Roshni-Sahani/furniture
                          </a>
                        </span>
                      </p>
                      <p className="text-black text-xl font-poppins ">
                        Live-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://furniture-nine-omega.vercel.app/"
                            target="blank"
                            className="underline"
                          >
                            https://furniture-nine-omega.vercel.app/
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {tab === "tab2" && (
              <div>
                <div className="flex flex-wrap items-center flex-row -mx-3 mt-3">
                  <div className="w-2/5 px-3">
                    <div className="flex">
                      <p className="text-black pr-1 text-2xl font-poppins pb-3">
                        1.
                      </p>
                      <img
                        src={img4}
                        alt="1"
                        className="w-[300px] h-[200px]  rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="w-3/5 px-3">
                    <div className="flex pb-3 items-center">
                      <p className="text-black font-bold text-2xl font-poppins text-nowrap">
                        Exclusive-games
                      </p>
                      <p className="text-black  text-xl font-poppins underline">
                        (Date of submission : 5-2-2024)
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xl font-poppins font-medium text-nowrap">
                        Github-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://github.com/Roshni-Sahani/exclusive-games"
                            target="blank"
                            className="underline"
                          >
                            https://github.com/Roshni-Sahani/exclusive-games
                          </a>
                        </span>
                      </p>
                      <p className="text-black text-xl font-poppins font-medium">
                        Live-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://exclusive-games-six.vercel.app/"
                            target="blank"
                            className="underline"
                          >
                            https://exclusive-games-six.vercel.app/{" "}
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center flex-row -mx-3 mt-3">
                  <div className="w-2/5 px-3">
                    <div className="flex">
                      <p className="text-black pr-1 text-2xl font-poppins pb-3">
                        2.
                      </p>
                      <img
                        src={img5}
                        alt="1"
                        className="w-[300px] h-[200px]  rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="w-3/5 px-3">
                    <div className="flex pb-3 items-center">
                      <p className="text-black font-bold text-2xl font-poppins text-nowrap">
                        DINO-LFG
                      </p>
                      <p className="text-black  text-xl font-poppins underline">
                        (Date of submission : 10-2-2024)
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xl font-poppins font-medium">
                        Github-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://dinolfg-two.vercel.app/"
                            target="blank"
                            className="underline"
                          >
                            https://dinolfg-two.vercel.app/
                          </a>
                        </span>
                      </p>
                      <p className="text-black text-xl font-poppins font-medium">
                        Live-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://dinolfg-two.vercel.app/"
                            target="blank"
                            className="underline"
                          >
                            https://dinolfg-two.vercel.app/
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center flex-row -mx-3 mt-3">
                  <div className="w-2/5 px-3">
                    <div className="flex">
                      <p className="text-black pr-1 text-2xl font-poppins pb-3">
                        3.
                      </p>
                      <img
                        src={img6}
                        alt="1"
                        className="w-[300px] h-[200px]  rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="w-3/5 px-3">
                    <div className="flex pb-3 items-center">
                      <p className="text-black font-bold text-2xl font-poppins text-nowrap">
                        NEX-AI
                      </p>
                      <p className="text-black  text-xl font-poppins underline">
                        (Date of submission : 17-2-2024)
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xl font-poppins font-medium text-nowrap">
                        Github-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://github.com/Roshni-Sahani/nexa-ai"
                            target="blank"
                            className="underline"
                          >
                            https://github.com/Roshni-Sahani/nexa-ai
                          </a>
                        </span>
                      </p>
                      <p className="text-black text-xl font-poppins font-medium">
                        Live-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://nexa-ai-blond.vercel.app/"
                            target="blank"
                            className="underline"
                          >
                            https://nexa-ai-blond.vercel.app/
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center flex-row -mx-3 mt-3">
                  <div className="w-2/5 px-3">
                    <div className="flex">
                      <p className="text-black pr-1 text-2xl font-poppins pb-3">
                        3.
                      </p>
                      <img
                        src={img7}
                        alt="1"
                        className="w-[300px] h-[200px]  rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="w-3/5 px-3">
                    <div className="flex pb-3 items-center">
                      <p className="text-black font-bold text-2xl font-poppins text-nowrap">
                        CALCULATOR
                      </p>
                      <p className="text-black  text-xl font-poppins underline">
                        (Date of submission : 21-2-2024)
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xl font-poppins font-medium text-nowrap">
                        Github-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://github.com/Roshni-Sahani/calculator"
                            target="blank"
                            className="underline"
                          >
                            https://github.com/Roshni-Sahani/calculator
                          </a>
                        </span>
                      </p>
                      <p className="text-black text-xl font-poppins font-medium">
                        Live-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://calculator-five-psi-51.vercel.app/"
                            target="blank"
                            className="underline"
                          >
                            https://calculator-five-psi-51.vercel.app/
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center flex-row -mx-3 mt-3">
                  <div className="w-2/5 px-3">
                    <div className="flex">
                      <p className="text-black pr-1 text-2xl font-poppins pb-3">
                        4.
                      </p>
                      <img
                        src={img6}
                        alt="1"
                        className="w-[300px] h-[200px]  rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="w-3/5 px-3">
                    <div className="flex pb-3 items-center">
                      <p className="text-black font-bold text-2xl font-poppins text-nowrap">
                        BOOTSTRAP_NEXAI
                      </p>
                      <p className="text-black  text-xl font-poppins underline text-nowrap">
                        (Date of submission : 17-2-2024)
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xl font-poppins font-medium text-nowrap">
                        Github-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://github.com/Roshni-Sahani/nexa-ai"
                            target="blank"
                            className="underline"
                          >
                            https://github.com/Roshni-Sahani/nexa-ai
                          </a>
                        </span>
                      </p>
                      <p className="text-black text-xl font-poppins font-medium">
                        Live-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://nex-ai-seven.vercel.app/"
                            target="blank"
                            className="underline"
                          >
                            https://github.com/Roshni-Sahani/NexAi
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {tab === "tab3" && (
              <div>
                <div className="flex flex-wrap items-center flex-row -mx-3 mt-3">
                  <div className="w-2/5 px-3">
                    <div className="flex">
                      <p className="text-black pr-1 text-2xl font-poppins pb-3">
                        1.
                      </p>
                      <img
                        src={img8}
                        alt="1"
                        className="w-[300px] h-[200px]  rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="w-3/5 px-3">
                    <div className="flex pb-3 items-center">
                      <p className="text-black font-bold text-2xl font-poppins text-nowrap">
                        CLOOP
                      </p>
                      <p className="text-black  text-xl font-poppins underline">
                        (Date of submission : 5-3-2024)
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xl font-poppins font-medium text-nowrap">
                        Github-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://github.com/Roshni-Sahani/Cloop"
                            target="blank"
                            className="underline"
                          >
                            https://github.com/Roshni-Sahani/Cloop
                          </a>
                        </span>
                      </p>
                      <p className="text-black text-xl font-poppins font-medium">
                        Live-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://cloop-fawn.vercel.app/"
                            target="blank"
                            className="underline"
                          >
                            https://cloop-fawn.vercel.app/
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center flex-row -mx-3 mt-3">
                  <div className="w-2/5 px-3">
                    <div className="flex">
                      <p className="text-black pr-1 text-2xl font-poppins pb-3">
                        2.
                      </p>
                      <img
                        src={img9}
                        alt="1"
                        className="w-[300px] h-[200px]  rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="w-3/5 px-3">
                    <div className="flex pb-3 items-center">
                      <p className="text-black font-bold text-2xl font-poppins text-nowrap">
                        LABS_248
                      </p>
                      <p className="text-black  text-xl font-poppins underline">
                        (Date of submission : 10-2-2024)
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xl font-poppins font-medium text-nowrap">
                        Github-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://github.com/Roshni-Sahani/248-lab/"
                            target="blank"
                            className="underline"
                          >
                            https://github.com/Roshni-Sahani/248-lab
                          </a>
                        </span>
                      </p>
                      <p className="text-black text-xl font-poppins font-medium">
                        Live-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://248-lab.vercel.app/"
                            target="blank"
                            className="underline"
                          >
                            https://248-lab.vercel.app/
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center flex-row -mx-3 mt-3">
                  <div className="w-2/5 px-3">
                    <div className="flex">
                      <p className="text-black pr-1 text-2xl font-poppins pb-3">
                        3.
                      </p>
                      <img
                        src={img10}
                        alt="1"
                        className="w-[300px] h-[200px]  rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="w-3/5 px-3">
                    <div className="flex pb-3 items-center">
                      <p className="text-black font-bold text-2xl font-poppins text-nowrap">
                        SWIPER_SLIDER
                      </p>
                      <p className="text-black  text-xl font-poppins underline">
                        (Date of submission : 27-3-2024)
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xl font-poppins font-medium text-nowrap">
                        Github-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://github.com/Roshni-Sahani/sliderhtml"
                            target="_blank "
                            className="underline"
                          >
                            https://github.com/Roshni-Sahani/sliderhtml
                          </a>
                        </span>
                      </p>
                      <p className="text-black text-xl font-poppins font-medium">
                        Live-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://sliderhtml-green.vercel.app/"
                            target="_blank"
                            className="underline"
                          >
                            https://sliderhtml-green.vercel.app//
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center flex-row -mx-3 mt-3">
                  <div className="w-2/5 px-3">
                    <div className="flex">
                      <p className="text-black pr-1 text-2xl font-poppins pb-3">
                        4.
                      </p>
                      <img
                        src={img11}
                        alt="1"
                        className="w-[300px] h-[200px]  rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="w-3/5 px-3">
                    <div className="flex pb-3 items-center">
                      <p className="text-black font-bold text-2xl font-poppins text-nowrap">
                        PRACTICE_nextjs
                      </p>
                      <p className="text-black  text-xl font-poppins underline">
                        (Date of submission : 21-3-2024)
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xl font-poppins font-medium text-nowrap">
                        Github-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://github.com/Roshni-Sahani/next-demo"
                            target="_blank "
                            className="underline"
                          >
                            https://github.com/Roshni-Sahani/next-demo
                          </a>
                        </span>
                      </p>
                      <p className="text-black text-xl font-poppins font-medium">
                        Live-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://next-demo-rho-one.vercel.app/"
                            target="_blank"
                            className="underline"
                          >
                            https://next-demo-rho-one.vercel.app/
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center flex-row -mx-3 mt-3">
                  <div className="w-2/5 px-3">
                    <div className="flex">
                      <p className="text-black pr-1 text-2xl font-poppins pb-3">
                        5.
                      </p>
                      <img
                        src={img13}
                        alt="1"
                        className="w-[300px] h-[200px]  rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="w-3/5 px-3">
                    <div className="flex pb-2 items-center">
                      <p className="text-black font-bold text-2xl font-poppins text-nowrap">
                        FORM_VALIDATION
                      </p>
                    </div>
                    <p className="text-black  text-xl font-poppins underline">
                      (Date of submission : 28-3-2024)
                    </p>
                    <div>
                      <p className="text-black text-xl font-poppins font-medium text-nowrap">
                        Github-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://github.com/Roshni-Sahani/form-validation"
                            target="_blank "
                            className="underline"
                          >
                            https://github.com/Roshni-Sahani/form-validation
                          </a>
                        </span>
                      </p>
                      <p className="text-black text-xl font-poppins font-medium">
                        Live-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://form-validation-xi-seven.vercel.app/"
                            target="_blank"
                            className="underline"
                          >
                            https://form-validation-xi-seven.vercel.app/
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center flex-row -mx-3 mt-3">
                  <div className="w-2/5 px-3">
                    <div className="flex">
                      <p className="text-black pr-1 text-2xl font-poppins pb-3">
                        6.
                      </p>
                      <img
                        src={img12}
                        alt="1"
                        className="w-[300px] h-[200px]  rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="w-3/5 px-3">
                    <div className="flex pb-3 items-center">
                      <p className="text-black font-bold text-2xl font-poppins text-nowrap">
                        WORKSHEET
                      </p>
                      <p className="text-black  text-xl font-poppins underline">
                        (Date of submission : 27-3-2024)
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-xl font-poppins font-medium text-nowrap">
                        Github-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://github.com/Roshni-Sahani/worksheet"
                            target="_blank "
                            className="underline"
                          >
                            https://github.com/Roshni-Sahani/worksheet
                          </a>
                        </span>
                      </p>
                      <p className="text-black text-xl font-poppins font-medium">
                        Live-Link :{" "}
                        <span className="text-black hover:text-blue-700">
                          <a
                            href="https://worksheet-seven.vercel.app/"
                            target="_blank"
                            className="underline"
                          >
                            https://worksheet-seven.vercel.app/
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myworks;
