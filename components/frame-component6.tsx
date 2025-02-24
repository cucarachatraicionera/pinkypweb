import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent1 from "./frame-component1";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-10 pb-[236px] box-border max-w-full text-left text-xl text-gray-200 font-space-grotesk mq750:pb-[153px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[50px] max-w-full mq750:gap-[25px]">
        <div className="self-stretch flex flex-row items-start justify-start relative gap-[65px] max-w-full lg:flex-wrap mq450:gap-4 mq750:gap-8">
          <div className="flex flex-col items-start justify-start min-w-[510px] max-w-full lg:flex-1 mq750:min-w-full">
            <b className="self-stretch relative leading-[24px] mq450:text-base mq450:leading-[19px]">
              buy
            </b>
            <div className="relative text-61xl leading-[80px] text-white mq450:text-5xl mq450:leading-[32px] mq1050:text-21xl mq1050:leading-[48px]">
              <p className="m-0 font-light">how to</p>
              <p className="m-0">
                <span className="font-medium">buy it</span>
                <span className="font-light font-space-grotesk">?</span>
              </p>
            </div>
          </div>
          <div className="h-2 w-44 absolute !m-[0] top-[53px] right-[478px] bg-red opacity-[0.7]" />
          <div className="flex-1 flex flex-col items-start justify-start gap-5 min-w-[510px] max-w-full text-white mq750:min-w-full">
            <div className="w-[736.5px] flex flex-row items-start justify-start gap-[68.5px] max-w-full mq450:gap-[17px] mq750:gap-[34px] mq750:flex-wrap">
              <div className="w-[324px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-5 mq450:flex-wrap">
                  <div className="rounded-17xl flex flex-row items-center justify-center p-4">
                    <Image
                      className="h-8 w-8 relative overflow-hidden shrink-0"
                      loading="lazy"
                      width={32}
                      height={32}
                      alt=""
                      src="/altdelsitio.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border min-w-[156px]">
                    <div className="self-stretch relative leading-[20px] z-[1] mq450:text-base mq450:leading-[16px]">
                      <span className="font-light">Visit pinkypromise</span>
                      <span className="font-medium">.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-5 min-w-[224px] max-w-full mq450:flex-wrap">
                <div className="h-[105px] w-px relative border-white border-solid border-r-[1px] box-border mq450:w-full mq450:h-px" />
                <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
                  <div className="rounded-17xl flex flex-row items-center justify-center p-4">
                    <Image
                      className="h-8 w-8 relative overflow-hidden shrink-0"
                      loading="lazy"
                      width={32}
                      height={32}
                      alt=""
                      src="/cartera-1.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border min-w-[156px]">
                  <div className="relative leading-[20px] font-light mq450:text-base mq450:leading-[16px]">
                    Open your phantom or backpack wallet
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative border-white border-solid border-t-[1px] box-border" />
            <div className="self-stretch flex flex-row items-center justify-start gap-5 max-w-full mq750:flex-wrap">
              <div className="flex-1 flex flex-row items-center justify-start py-0 pl-0 pr-12 box-border gap-5 min-w-[242px] max-w-full mq450:flex-wrap mq450:pr-5 mq450:box-border">
                <div className="rounded-17xl flex flex-row items-center justify-center p-4">
                  <Image
                    className="h-8 w-8 relative overflow-hidden shrink-0"
                    loading="lazy"
                    width={32}
                    height={32}
                    alt=""
                    src="/actualizar-1.svg"
                  />
                </div>
                <div className="flex-1 relative leading-[20px] inline-block min-w-[156px] mq450:text-base mq450:leading-[16px]">
                  <p className="m-0 font-light">Click on</p>
                  <p className="m-0">
                    <span className="font-light font-space-grotesk">"</span>
                    <span className="font-medium font-space-grotesk">
                      Buy Pinky Promise
                    </span>
                    <span className="font-light">
                      " on the website, and swap SOL for Pinky Promise.
                    </span>
                  </p>
                </div>
              </div>
              <div className="h-[105px] w-px relative border-white border-solid border-r-[1px] box-border mq750:w-full mq750:h-px" />
              <div className="flex-1 flex flex-row items-center justify-start py-0 pl-0 pr-12 box-border gap-5 min-w-[242px] max-w-full mq450:flex-wrap mq450:pr-5 mq450:box-border">
                <div className="rounded-17xl flex flex-row items-center justify-center p-4">
                  <Image
                    className="h-8 w-8 relative overflow-hidden shrink-0"
                    loading="lazy"
                    width={32}
                    height={32}
                    alt=""
                    src="/estrella-1.svg"
                  />
                </div>
                <div className="flex-1 relative leading-[20px] font-light inline-block min-w-[156px] mq450:text-base mq450:leading-[16px]">
                  <p className="m-0">
                    You are now part of the Pinky Promise community!
                  </p>
                  <p className="m-0">Welcome to</p>
                  <p className="m-0">P-P!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent1 />
      </div>
    </section>
  );
};

export default FrameComponent6;
