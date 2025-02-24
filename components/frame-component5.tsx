import type { NextPage } from "next";
import Image from "next/image";
import Box1 from "./box1";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-end pt-0 px-10 pb-[120px] box-border max-w-full text-left text-xl text-gray-200 font-space-grotesk mq450:pb-[51px] mq450:box-border mq1050:pb-[78px] mq1050:box-border ${className}`}
    >
      <div className="rounded-21xl bg-grays-black border-gray-300 border-solid border-[1px] box-border overflow-hidden flex flex-col items-end justify-start pt-[118px] px-[39px] pb-[175px] relative gap-[50px] max-w-full mq750:gap-[25px] mq750:pt-[77px] mq750:pb-[114px] mq750:box-border">
        <Image
          className="w-[2000px] h-[1732.3px] absolute !m-[0] bottom-[-533.3px] left-[calc(50%_-_1000px)] object-cover"
          width={2000}
          height={1732}
          alt=""
          src="/background-1@2x.png"
        />
        <div className="w-[1265.5px] flex flex-row items-start justify-center max-w-full">
          <div className="flex flex-col items-start justify-start max-w-full">
            <b className="w-[511px] relative leading-[24px] inline-block max-w-full z-[1] mq450:text-base mq450:leading-[19px]">
              why Pinly Promise
            </b>
            <div className="relative text-45xl leading-[80px] text-red z-[1] font-poppins mq450:text-19xl mq450:leading-[48px] mq1050:text-32xl mq1050:leading-[64px]">
              <span className="font-light">{`Why Choose `}</span>
              <span className="font-medium">Pinky Promise</span>
              <span className="font-light"> Token?</span>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto flex flex-row items-center justify-center gap-5 max-w-full z-[1] text-13xl text-red">
          <Box1
            trustworthy="Trustworthy"
            builtOnSecureBlockchainTechnolo="Built on secure blockchain technology"
          />
          <Box1
            boxPadding="38px 39px"
            trustworthy="Strong Community "
            trustworthyAlignSelf="unset"
            builtOnSecureBlockchainTechnolo="Built on trust and powered by community-driven growth."
          />
          <Box1
            boxPadding="38px 39px"
            trustworthy="Community-Driven"
            trustworthyAlignSelf="unset"
            builtOnSecureBlockchainTechnolo=" Empowering users with collective growth"
          />
          <Box1
            boxPadding="38px 39px"
            trustworthy="Seamless Experience"
            trustworthyAlignSelf="unset"
            builtOnSecureBlockchainTechnolo="Simple and intuitive token management"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
