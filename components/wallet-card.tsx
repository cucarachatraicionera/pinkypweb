import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type WalletCardType = {
  className?: string;
  background: string;
  raydium: string;
  raydium1?: string;

  /** Style props */
  backgroundIconTop?: CSSProperties["top"];
  backgroundIconRight?: CSSProperties["right"];
  backgroundIconLeft?: CSSProperties["left"];
};

const WalletCard: NextPage<WalletCardType> = ({
  className = "",
  background,
  backgroundIconTop,
  backgroundIconRight,
  backgroundIconLeft,
  raydium,
  raydium1,
}) => {
  const backgroundIconStyle: CSSProperties = useMemo(() => {
    return {
      top: backgroundIconTop,
      right: backgroundIconRight,
      left: backgroundIconLeft,
    };
  }, [backgroundIconTop, backgroundIconRight, backgroundIconLeft]);

  return (
    <div
      className={`flex-1 rounded-21xl border-gray-300 border-solid border-[1px] box-border overflow-hidden flex flex-col items-start justify-start py-[38px] pl-[34px] pr-[33px] relative gap-2.5 min-w-[157px] text-center text-xl text-white font-space-grotesk ${className}`}
    >
      <Image
        className="w-[2000px] h-[2000px] absolute !m-[0] top-[-1460px] right-[-1660.5px] object-cover z-[1]"
        width={2000}
        height={2000}
        alt=""
        src={background}
        style={backgroundIconStyle}
      />
      <div className="flex flex-row items-start justify-start py-0 pl-[30px] pr-[31px]">
        <Image
          className="h-20 w-20 relative overflow-hidden shrink-0 z-[1]"
          width={80}
          height={80}
          alt=""
          src={raydium}
        />
      </div>
      <div className="self-stretch relative leading-[40px] font-medium z-[1] mq450:text-base mq450:leading-[32px]">
        {raydium1}
      </div>
    </div>
  );
};

export default WalletCard;
