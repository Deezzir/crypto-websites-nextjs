"use client";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import { useEffect, useMemo, useState } from "react";
import { useCompensateScrollbar } from "../../hooks/useCompensateScrollbar";
import "@solana/wallet-adapter-react-ui/styles.css";
import { MovingImg } from "../../moving-img";
import { AppearWrapper } from "../../common/wrappers/appear-wrapper";
import { NFT } from "./nft";

export const WalletNFT = (props: any) => {
  const wallets = useMemo(() => [new SolflareWalletAdapter()], []);
  useCompensateScrollbar();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>

            {mounted && (
              <>
                <AppearWrapper
                  customClass={
                    " min-h-screen flex justify-center items-center relative align-center w-full overflow-x-clip"
                  }
                >
                  <img
                    src="/section-2/chel.png"
                    alt="chel"
                    className="w-[40%] md:w-[30%] bottom-1 left-[-15%] mt-28 absolute select-none"
                  />
                  <img
                    src="/section-2/chel.png"
                    alt="chel"
                    className="w-[40%] md:w-[30%] bottom-1 right-[-15%] mt-28 absolute mirror-y select-none"
                  />
                  <div className=" w-full content-center relative max-w-screen-2xl overflow-hidden m-auto">
                    <MovingImg
                      tz={3}
                      ty={5}
                      tx={1}
                      customClassImg={"w-5/12 md:w-2/12"}
                      customClassWrapper={"top-[30%] left-[70%] md:left-[0%]"}
                      imgPath={"./common/pack.webp"}
                    />
                    <MovingImg
                      tz={10}
                      ty={4}
                      tx={1}
                      customClassImg={"w-[10%] md:w-[7%] rotate-[12deg]"}
                      customClassWrapper={"right-[5%] bottom-[5%]"}
                      imgPath={"./common/card.webp"}
                    />
                    <MovingImg
                      tz={1}
                      ty={5}
                      tx={10}
                      customClassImg={" w-7/12 md:w-5/12 -rotate-[26deg] "}
                      customClassWrapper={"md:right-[15%] top-[5%] right-[80%]"}
                      imgPath={"./common/glock.webp"}
                    />
                    <div className="flex flex-col">
                      <NFT
                        failedTxt={props.failedTxt}
                        failedClaimTxt={props.failedClaimTxt}
                        failedCalimTryTxt={props.failedCalimTryTxt}
                        claimedTxt={props.claimedTxt}
                        loadingTxt={props.loadingTxt}
                        claimTxt={props.claimTxt}
                        soldOutTxt={props.soldOutTxt}
                        soldOutTxt2={props.soldOutTxt2}
                        claimingTxt={props.claimingTxt}
                        claimNFTTxt={props.claimNFTTxt}
                      />
                    </div>
                  </div>
                </AppearWrapper>
              </>
            )}

    </>
  );
};
