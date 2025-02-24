import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Box1Type = {
  className?: string;
  trustworthy?: string;
  builtOnSecureBlockchainTechnolo?: string;

  /** Style props */
  boxPadding?: CSSProperties["padding"];
  trustworthyAlignSelf?: CSSProperties["alignSelf"];
};

const Box1: NextPage<Box1Type> = ({
  className = "",
  boxPadding,
  trustworthy,
  trustworthyAlignSelf,
  builtOnSecureBlockchainTechnolo,
}) => {
  const box1Style: CSSProperties = useMemo(() => {
    return {
      padding: boxPadding,
    };
  }, [boxPadding]);

  const trustworthy1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: trustworthyAlignSelf,
    };
  }, [trustworthyAlignSelf]);

  return (
    <div
      className={`flex-1 rounded-21xl bg-gray-100 border-gray-300 border-solid border-[1px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[38px] px-[39px] pb-[70px] gap-5 text-left text-13xl text-red font-space-grotesk ${className}`}
      style={box1Style}
    >
      <div className="self-stretch flex flex-col items-start justify-center">
        <div
          className="self-stretch relative leading-[32px] mq450:text-lgi mq450:leading-[19px] mq1050:text-7xl mq1050:leading-[26px]"
          style={trustworthy1Style}
        >
          {trustworthy}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start text-base text-white font-archivo">
        <div className="flex-1 relative tracking-[0.02em] leading-[25.6px] font-light">
          {builtOnSecureBlockchainTechnolo}
        </div>
      </div>
    </div>
  );
};

export default Box1;
