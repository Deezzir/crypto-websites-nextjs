import { useTranslations } from "next-intl";
import { Links } from "./links";
import { Wrapper } from "../../common/wrappers/wrapper";
import { RegularText } from "../../common/text/regular-text";

import { AppearWrapper } from "../../common/wrappers/appear-wrapper";

// import { SwitchLang } from "../../switch-lang";
import { CopyCa } from "../../common/copy-ca";
import Image from "next/image";

import dorogaImg from "../../../../../../public/section-1/doroga.webp";
import city from "../../../../../../public/section-1/city.png";
import Marquee from "react-fast-marquee";
import { MovingImg } from "../../moving-img";

function Doroga() {
  return (
    <AppearWrapper>
      <div className="w-full relative">
        <Marquee
          className="relative bottom-[-15px]"
          speed={5}
          autoFill
          direction={"left"}
        >
          <Image
            src={city}
            alt="city"
            className="w-full h-96 z-10 select-none"
            fetchPriority="high"
            priority
          />
        </Marquee>
        <Marquee
          className="relative bottom-[-5px]"
          speed={15}
          autoFill
          direction={"right"}
        >
          <div className="flex flex-row h-auto">
            <Image
              src={dorogaImg}
              alt="Doroga"
              className="w-full h-24 md:h-36 select-none"
              fetchPriority="high"
              priority
            />
          </div>
        </Marquee>
      </div>
    </AppearWrapper>
  );
}

export const SectionOne = (props: any) => {
  const t = useTranslations("SectionOne");
  return (
    <>
      <AppearWrapper>
        <div className="min-h-screen w-full flex justify-center align-center items-center relative overflow-hidden bg-sky">
          <Wrapper>
            <div className="flex flex-col gap-8 items-center">
              <Links />
              <RegularText customClass={"text-center"} text={t("1")} />
              <CopyCa copyLink="" />

              <img
                className="md:w-[50%] mb-32 md:mb-16 z-50 select-none"
                src={"./section-1/game.webp"}
              />
            </div>
          </Wrapper>
          <div className="w-full absolute bottom-0 left-0">
            <div className="flex">
              <MovingImg
                tx={7}
                ty={2}
                tz={5}
                customClassWrapper={"absolute z-50 bottom-14 md:bottom-5"}
                customClassImg={
                  "md:ml-64 h-32 md:h-64  w-auto z-50 relative select-none"
                }
                imgPath={"./section-1/bear-1.webp"}
              />
              <MovingImg
                tx={10}
                ty={2}
                tz={5}
                customClassWrapper={"right-0 z-50 bottom-14 md:bottom-5"}
                customClassImg={
                  "md:mr-64 h-32 md:h-64 w-auto ms-auto mirror-y z-50 relative select-none"
                }
                imgPath={"./section-1/bear-2.webp"}
              />
            </div>
            <Doroga />
          </div>
        </div>
      </AppearWrapper>
    </>
  );
};
