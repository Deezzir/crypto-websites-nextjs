import { useTranslations } from "next-intl";
import { Wrapper } from "../../common/wrappers/wrapper";
import { HeaderText } from "../../common/text/header-text";
import { RegularText } from "../../common/text/regular-text";
import { AppearWrapper } from "../../common/wrappers/appear-wrapper";
import { BigText } from "../../common/text/big-text";
import { MovingImg } from "../../moving-img";

export const SectionFive = (props: any) => {
  const t = useTranslations("SectionFive");
  return (
    <>
      <div className="min-h-screen w-full flex justify-center relative items-center max-w-screen-2xl">
        <MovingImg
          tz={1}
          ty={4}
          tx={4}
          customClassImg={"w-3/12 md:w-5/12 h-auto"}
          customClassWrapper={"left-0"}
          imgPath={"./common/money.webp"}
        />
        <MovingImg
          tz={1}
          ty={-4}
          tx={-2}
          customClassImg={"w-3/12 md:w-5/12 h-auto"}
          customClassWrapper={"right-0 bottom-0 lg:bottom-40"}
          imgPath={"./common/money.webp"}
        />
        <MovingImg
          tz={1}
          ty={-4}
          tx={-2}
          customClassImg={"w-3/12 md:w-5/12 h-auto"}
          customClassWrapper={"-left-[12%] lg:left-50 bottom-24"}
          imgPath={"./common/money.webp"}
        />
        <MovingImg
          tz={1}
          ty={-4}
          tx={-2}
          customClassImg={"w-3/12 md:w-5/12 h-auto"}
          customClassWrapper={"right-52 md:top-24 top-72"}
          imgPath={"./common/money.webp"}
        />
        <MovingImg
          tz={1}
          ty={-4}
          tx={-2}
          customClassImg={"w-3/12 md:w-5/12 h-auto"}
          customClassWrapper={"left-52 top-96 md:top-24"}
          imgPath={"./common/money.webp"}
        />
        <MovingImg
          tz={1}
          ty={-4}
          tx={-2}
          customClassImg={"w-3/12 md:w-5/12 h-auto rotate-[24deg]"}
          customClassWrapper={"left-50 md:top-24 top-[-5%]"}
          imgPath={"./common/bong.webp"}
        />

        <AppearWrapper>
          <Wrapper>
            <div className="flex flex-col md:gap-16">
              {/* <HeaderText customClass={"uppercase text-center"} text={t("1")} /> */}
              <div className="flex flex-col gap-8 lg:flex-row content-center py-16 justify-center">
                <div className="flex flex-col content-center justify-center items-center lg:w-5/12">
                  {/* <BigText
                    customClass={" mb-16 md:mb-2 text-4xl text-center "}
                    text={t("2")}
                  />
                  <BigText
                    customClass={" mb-16 md:mb-2 text-4xl text-center "}
                    text={t("3")}
                  />
                  <BigText
                    customClass={" mb-16 md:mb-2 text-4xl text-center "}
                    text={t("4")}
                  />
                  <BigText
                    customClass={" mb-16 md:mb-0 text-4xl text-center "}
                    text={t("5")}
                  /> */}
                </div>
                <div className="lg:w-5/12 flex flex-col gap-8 justify-center align-center items-center">
                  <MovingImg
                    tz={1}
                    ty={2}
                    tx={2}
                    customClassImg={"w-10/12 md:w-10/12 h-auto"}
                    customClassWrapper={"relative"}
                    imgPath={"./section-5/bear-back.webp"}
                  />
                </div>
              </div>
            </div>
          </Wrapper>
        </AppearWrapper>
      </div>
    </>
  );
};
