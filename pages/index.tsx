import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent6 from "../components/frame-component6";
import SwapSection1 from "../components/swap-section1";
import FrameComponent7 from "../components/frame-component7";

const Desktop: NextPage = () => {
  return (
    <div className="w-full relative bg-grays-black overflow-hidden flex flex-col items-end justify-start pt-5 px-0 pb-0 box-border opacity-[0.99] leading-[normal] tracking-[normal]">
      <FrameComponent4 />
      <FrameComponent5 />
      <FrameComponent6 />
      <SwapSection1 />
      <FrameComponent7 />
      <section className="self-stretch rounded-t-21xl rounded-b-none overflow-hidden flex flex-col items-start justify-start relative max-w-full text-left text-xl text-gray-200 font-space-grotesk">
        <Image
          className="w-[1940px] h-[917px] absolute !m-[0] right-[-250.5px] bottom-[-143px] object-cover"
          width={1940}
          height={917}
          alt=""
          src="/background-5@2x.png"
        />
        <div className="self-stretch rounded-t-21xl rounded-b-none bg-gray-400 border-gray-300 border-solid border-t-[1px] box-border overflow-hidden flex flex-col items-start justify-start pt-[118px] pb-0 pl-5 pr-[18px] relative gap-[106px] max-w-full z-[1] mq450:gap-[26px] mq750:gap-[53px] mq750:pt-[77px] mq750:box-border">
          <div className="w-[200px] h-2 absolute !m-[0] bottom-[204px] left-[70px] bg-red opacity-[0.6]" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-5 pr-[21px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start max-w-full">
              <b className="w-[440px] relative leading-[24px] inline-block max-w-full mq450:text-base mq450:leading-[19px]">
                contact
              </b>
              <div className="self-stretch flex flex-row items-start justify-start gap-[79px] max-w-full text-61xl text-red lg:flex-wrap mq450:gap-5 mq750:gap-[39px]">
                <div className="flex flex-col items-start justify-start gap-[26px] min-w-[439px] max-w-full lg:flex-1 mq750:min-w-full">
                  <div className="self-stretch relative leading-[80px] font-light mq450:text-5xl mq450:leading-[32px] mq1050:text-21xl mq1050:leading-[48px]">
                    contact us
                  </div>
                  <div className="w-[386px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full text-base text-white font-archivo">
                    <div className="h-[77px] flex-1 relative tracking-[0.02em] leading-[25.6px] inline-block">
                      <p className="m-0">
                        Pinky Promise!! Feel free to contact us if you have any
                        questions or suggestions.
                      </p>
                      <p className="m-0">
                        Send your messages to pinkypromisesupport@gmail.com.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-[60.5px] px-0 pb-0 box-border min-w-[547px] max-w-full text-base mq750:min-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-10 max-w-full mq450:gap-5 mq1050:flex-wrap">
                    <button className="cursor-pointer border-red border-solid border-[1px] py-0.5 px-[3px] bg-dark-grey rounded-25xl box-border flex flex-row items-center justify-center min-h-[44px] [row-gap:20px] max-w-full mq450:flex-wrap">
                      <div className="flex flex-row items-center justify-center py-2.5 px-[15px]">
                        <div className="relative text-base leading-[16px] font-space-grotesk text-red text-left">
                          pinkypromisesupport@gmail.com
                        </div>
                      </div>
                      <div className="rounded-17xl bg-red flex flex-row items-start justify-start p-1.5">
                        <Image
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          width={24}
                          height={24}
                          alt=""
                          src="/arrow-outward-1.svg"
                        />
                      </div>
                    </button>
                    <button className="cursor-pointer border-red border-solid border-[1px] py-0.5 px-[3px] bg-dark-grey rounded-25xl flex flex-row items-center justify-center">
                      <div className="flex flex-row items-center justify-center py-2.5 px-[15px]">
                        <div className="relative text-base leading-[16px] font-space-grotesk text-red text-left">
                          Telegram
                        </div>
                      </div>
                      <div className="rounded-17xl bg-red flex flex-row items-start justify-start p-1.5">
                        <Image
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          width={24}
                          height={24}
                          alt=""
                          src="/arrow-outward-1.svg"
                        />
                      </div>
                    </button>
                    <button className="cursor-pointer border-red border-solid border-[1px] py-0.5 px-[3px] bg-dark-grey rounded-25xl flex flex-row items-center justify-center">
                      <div className="flex flex-row items-center justify-center py-2.5 px-[15px]">
                        <div className="relative text-base leading-[16px] font-space-grotesk text-red text-left inline-block min-w-[77px]">
                          Facebook
                        </div>
                      </div>
                      <div className="rounded-17xl bg-red flex flex-row items-start justify-start p-1.5">
                        <Image
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          width={24}
                          height={24}
                          alt=""
                          src="/arrow-outward-1.svg"
                        />
                      </div>
                    </button>
                    <div className="h-11 rounded-25xl bg-dark-grey border-red border-solid border-[1px] box-border flex flex-row items-center justify-center p-1">
                      <div className="h-9 w-[43px] flex flex-row items-center justify-center py-2.5 px-[15px] box-border">
                        <div className="h-4 w-3 relative leading-[16px] inline-block shrink-0">
                          X
                        </div>
                      </div>
                      <div className="h-9 w-9 rounded-17xl bg-red flex flex-row items-start justify-start p-1.5 box-border">
                        <Image
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          width={24}
                          height={24}
                          alt=""
                          src="/arrow-outward-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <b className="h-[140px] relative text-181xl leading-[168px] inline-block text-[transparent] shrink-0 [-webkit-text-stroke:1px_#f00411] z-[2] mq450:text-31xl mq450:leading-[67px] mq1050:text-61xl mq1050:leading-[101px]">
            PINKYPROMISE
          </b>
        </div>
        <footer className="bg-grays-black border-black border-solid border-t-[1px] flex flex-row items-start justify-start pt-[18px] pb-5 pl-[559px] pr-[558px] z-[1] text-left text-base text-light-gray font-space-grotesk mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[279px] mq750:pr-[279px] mq750:box-border">
          <div className="relative leading-[20px] font-light">
            © 2025 PINKY PROMISE. All rights reserved.
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Desktop;
