import type { NextPage } from "next";
import Image from "next/image";
import WalletCard from "./wallet-card";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-xl text-white font-space-grotesk ${className}`}
    >
      <div className="w-[670px] flex flex-row items-start justify-start flex-wrap content-start gap-5 max-w-full mq450:grid-cols-[minmax(157px,_1fr)] mq750:justify-center mq750:grid-cols-[repeat(2,_minmax(157px,_273px))]">
        <WalletCard
          background="/background-2@2x.png"
          raydium="/raydium.svg"
          raydium1="Raydium"
        />
        <div className="flex-1 rounded-21xl border-gray-300 border-solid border-[1px] box-border overflow-hidden flex flex-col items-start justify-start py-[38px] pl-[34px] pr-[33px] relative gap-2.5 min-w-[157px]">
          <div className="w-[2000px] h-[2000px] absolute !m-[0] top-[calc(50%_-_1000px)] right-[-895.5px] z-[1]">
            <Image
              className="absolute top-[calc(50%_-_1000px)] left-[calc(50%_-_1000px)] w-full h-full object-cover"
              width={2000}
              height={2000}
              alt=""
              src="/background-2@2x.png"
            />
            <Image
              className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_200px)] w-[400px] h-[400px] z-[1]"
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[30px] pr-[31px]">
            <div className="h-20 flex-1 overflow-hidden flex flex-row items-start justify-start relative z-[2]">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                <Image
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  width={80}
                  height={80}
                  alt=""
                  src="/vector.svg"
                />
                <Image
                  className="absolute top-[15px] left-[14.5px] w-[50px] h-[50px] object-cover z-[1]"
                  loading="lazy"
                  width={50}
                  height={50}
                  alt=""
                  src="/backpack-logo-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch relative leading-[40px] font-medium z-[2] mq450:text-base mq450:leading-[32px]">
            Pinksale
          </div>
        </div>
        <WalletCard
          background="/background-2@2x.png"
          backgroundIconTop="-1790px"
          backgroundIconRight="unset"
          backgroundIconLeft="-1789.5px"
          raydium="/phantom.svg"
          raydium1="Phantom"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
