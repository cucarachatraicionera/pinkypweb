import type { NextPage } from "next";
import Image from "next/image";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch h-[60px] rounded-21xl bg-dark-grey border-gray-300 border-solid border-[1px] box-border flex flex-row items-center justify-between py-1.5 px-2 gap-5 top-[0] z-[99] sticky max-w-full text-left text-base text-white font-space-grotesk ${className}`}
    >
      <div className="w-[200px] flex flex-row items-center justify-start py-0 px-5 box-border text-29xl">
        <a className="[text-decoration:none] h-[34px] relative leading-[34px] font-bold text-[inherit] flex items-center">
          P.P
        </a>
      </div>
      <div className="w-[476px] flex flex-row items-start justify-start gap-10 max-w-full mq750:gap-5 mq1050:hidden">
        <div className="border-white border-solid border-b-[1px] flex flex-row items-center justify-center">
          <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[48px]">
            about
          </a>
        </div>
        <div className="flex flex-row items-center justify-center">
          <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[86px]">
            exchanges
          </a>
        </div>
        <div className="flex flex-row items-start justify-start">
          <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[42px]">
            swap
          </a>
        </div>
        <div className="flex flex-row items-start justify-start">
          <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[82px]">
            tokenomis
          </a>
        </div>
        <div className="flex flex-row items-start justify-start">
          <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit]">
            contact
          </a>
        </div>
      </div>
      <div className="w-[200px] flex flex-row items-center justify-end text-dark-grey">
        <div className="rounded-25xl bg-white flex flex-row items-center justify-center p-1">
          <div className="flex flex-row items-center justify-center py-2.5 px-[15px]">
            <a className="[text-decoration:none] relative leading-[16px] text-[inherit] inline-block min-w-[69px]">
              Buy Now
            </a>
          </div>
          <div className="rounded-17xl bg-dark-grey flex flex-row items-start justify-start p-1.5">
            <Image
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/arrow-outward.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
