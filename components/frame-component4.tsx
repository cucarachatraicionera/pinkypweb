import type { NextPage } from "next";
import Image from "next/image";
import Header from "./header";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-10 pb-[107px] box-border max-w-full text-left text-xl text-gray-200 font-poppins mq750:pb-[45px] mq750:box-border mq1050:pb-[70px] mq1050:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
        <Header />
        <div className="self-stretch flex flex-row items-start justify-start max-w-full lg:flex-wrap">
          <div className="flex-[0.9824] flex flex-row items-center justify-center py-[4.5px] pl-0 pr-3 box-border max-w-full lg:flex-1 mq750:min-w-full">
            <div className="flex-1 rounded-21xl bg-grays-black border-gray-300 border-solid border-[1px] box-border overflow-hidden flex flex-col items-start justify-center py-28 px-[79px] relative gap-10 max-w-full mq450:pt-[47px] mq450:pb-[47px] mq450:box-border mq750:gap-5 mq750:pl-[39px] mq750:pr-[39px] mq750:box-border mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border">
              <Image
                className="w-[1200px] h-[1323.5px] absolute !m-[0] bottom-[-271px] left-[calc(50%_-_393px)] object-cover"
                width={1200}
                height={1324}
                alt=""
                src="/background@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start z-[1]">
                <b className="self-stretch relative leading-[24px] font-space-grotesk mq450:text-base mq450:leading-[19px]">
                  about Pink Promise
                </b>
                <div className="relative text-49xl leading-[68px] text-white mq450:text-22xl mq450:leading-[41px] mq1050:text-35xl mq1050:leading-[54px]">
                  <span className="font-light">{`welcome to `}</span>
                  <b>Pinky Promise</b>
                  <span className="font-medium">,</span>
                  <span className="font-light whitespace-pre-wrap">{`  your token for a brighter `}</span>
                </div>
                <b className="self-stretch relative text-101xl leading-[120px] text-[transparent] [-webkit-text-stroke:2px_#fff] mq450:text-11xl mq450:leading-[48px] mq1050:text-29xl mq1050:leading-[72px]">
                  future
                </b>
              </div>
              <div className="flex flex-row items-start justify-center max-w-full z-[1] text-white font-archivo">
                <div className="w-[511px] relative tracking-[0.02em] leading-[32px] font-light inline-block shrink-0 max-w-full mq450:text-base mq450:leading-[26px]">
                  Join a community driven by trust and innovation
                </div>
              </div>
              <div className="flex flex-row items-start justify-center flex-wrap content-start gap-5 max-w-full z-[1]">
                <button className="cursor-pointer [border:none] p-1 bg-deepskyblue rounded-25xl flex flex-row items-center justify-center">
                  <div className="flex flex-row items-center justify-center py-2.5 px-[15px]">
                    <div className="relative text-base leading-[16px] font-space-grotesk text-dark-grey text-left">
                      0x532f...B142E4
                    </div>
                  </div>
                  <div className="rounded-17xl bg-dark-grey flex flex-row items-start justify-start p-1.5 gap-2.5">
                    <Image
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      width={24}
                      height={24}
                      alt=""
                      src="/arrow-outward1.svg"
                    />
                    <Image
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      width={24}
                      height={24}
                      alt=""
                      src="/content-copy.svg"
                    />
                  </div>
                </button>
                <button className="cursor-pointer border-colors-cyan border-solid border-[1px] py-0.5 px-[3px] bg-dark-grey rounded-25xl flex flex-row items-center justify-center">
                  <div className="flex flex-row items-center justify-center py-2.5 px-[15px]">
                    <div className="relative text-base leading-[16px] font-space-grotesk text-colors-cyan text-left inline-block min-w-[92px]">
                      Get Started
                    </div>
                  </div>
                  <div className="rounded-17xl bg-colors-cyan flex flex-row items-start justify-start p-1.5">
                    <Image
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      width={24}
                      height={24}
                      alt=""
                      src="/arrow-outward-1.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full lg:flex-1 mq750:min-w-full">
            <Image
              className="self-stretch flex-1 relative rounded-29xl max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              width={678}
              height={809}
              alt=""
              src="/pinky-promise-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
