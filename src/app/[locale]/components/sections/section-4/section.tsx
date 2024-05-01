import { Wrapper } from "../../common/wrappers/wrapper";
import { BigText } from "../../common/text/big-text";
import { MovingImg } from "../../moving-img";
import { useTranslations } from "next-intl";
import { AppearWrapper } from "../../common/wrappers/appear-wrapper";

export const SectionFour = (props: any) => {
  const t = useTranslations("SectionFour");
  return (
    <>
      <div className="min-h-screen w-full content-center items-center justify-center flex overflow-hidden max-w-screen-2xl">
        <Wrapper>
          <AppearWrapper>
            <div className="flex flex-col gap-8 lg:flex-row content-center min-h-screen py-16 justify-center relative">
              <MovingImg
                tz={1}
                ty={3}
                tx={10}
                customClassImg={" w-2/12 md:w-2/12 "}
                customClassWrapper={"top-[50%] -right-[15%]"}
                imgPath={"./common/weed.webp"}
              />
              <div className="flex content-center img-cup items-center lg:w-5/12">
                <MovingImg
                  tz={1}
                  ty={4}
                  tx={1}
                  customClassImg={"h-120 h-auto"}
                  customClassWrapper={"relative"}
                  imgPath={"./section-4/bear.webp"}
                />
              </div>
              <div className="lg:w-5/12 flex flex-col gap-8 justify-center">
                <BigText customClass={"text-center"} text={t("1")} />
                <BigText customClass={"text-center"} text={t("2")} />
                <BigText customClass={"text-center"} text={t("3")} />
                <BigText customClass={"text-center"} text={t("4")} />
              </div>
            </div>
          </AppearWrapper>
          <AppearWrapper>
            <div className="flex flex-col-reverse gap-8 lg:flex-row content-center min-h-screen py-16 justify-center relative">
              <MovingImg
                tz={1}
                ty={5}
                tx={3}
                customClassImg={" w-3/12 md:w-2/12 "}
                customClassWrapper={"left-[10%]"}
                imgPath={"./common/shrooms.webp"}
              />
              <img
                className="md:absolute block -top-[6rem] left-[0%] w-[75%] md:w-[20%] select-none"
                src="./section-4/painting.webp"
              />
              <div className="flex items-center lg:w-5/12">
                <BigText
                  customClass={"md:text-left text-center z-50"}
                  extra={
                    <MovingImg
                      tz={1}
                      ty={5}
                      tx={2}
                      customClassImg={" w-2/12 md:w-3/12 "}
                      customClassWrapper={
                        "bottom-0 md:-bottom-[50%] left-[10%]"
                      }
                      imgPath={"./common/dick.webp"}
                    />
                  }
                  text={t("5")}
                />
              </div>
              <div className="lg:w-5/12 flex flex-col gap-8">
                <div className="h-[75vh] relative " id="dexscreener-embed">
                  <img
                    className="absolute top-0 w-32 left-[50%] mt-[-30%] md:mt-[-15%] select-none"
                    src={"./section-4/sitting.webp"}
                  />
                  <iframe
                    className="w-full h-full rounded-xl shadow-2xl"
                    src="https://dexscreener.com/solana/CSUbFtooSRsNs1HfAreVnG42fwef234gD6AUZ3Mt6deYtAcv3uQjp?embed=1&theme=dark"
                  ></iframe>
                </div>
              </div>
            </div>
          </AppearWrapper>
        </Wrapper>
      </div>
    </>
  );
};
