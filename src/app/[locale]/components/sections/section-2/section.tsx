import { useTranslations } from "next-intl";

import { MarqueeCustom } from "./marquee";

import { BigText } from "../../common/text/big-text";
import { WalletNFT } from "./useWalletHook";

export const SectionTwo = (props: any) => {
  const t = useTranslations("SectionTwo");

  return (
    <>
      <div className="w-full">
        <MarqueeCustom />
        <div className="flex flex-col justify-center items-center w-full">
          <BigText
            customClass={" max-w-screen-2xl text-center lg:text-4xl"}
            text={t("1")}
          />
         
        </div>
    
      </div>
    </>
  );
};
