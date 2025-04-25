
import {
  CandyMachineV2,
  guestIdentity,
  Metaplex,
  walletAdapterIdentity,
} from "@metaplex-foundation/js";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { HeaderText } from "../../common/text/header-text";

export const NFT = (props: any) => {
  const [metaplex, setMetaplex] = useState<Metaplex | null>(null);
  const [soldOut, setSoldOut] = useState(false);
  const [candyState, setCandyState] = useState<CandyMachineV2 | null>();
  const [candyStateErr, setCandyStateErr] = useState<string | null>();
  const [candyStateLoading, setCandyStateLoading] = useState(true);
  const [txErr, setTxErr] = useState<string | null>();
  const [txLoading, setTxLoading] = useState(false);
  //   const [nfts, setNfts] = useState([]);
  const { connection } = useConnection();
  const wallet = useAnchorWallet();


  const mint = async () => {
    if (!metaplex || !candyState) return;

    setTxLoading(true);
    setTxErr(null);

    try {
      const mintResult = await metaplex.candyMachinesV2().mint({
        candyMachine: candyState,
      });
    } catch (e) {
      setTxErr(props.failedClaimTxt);
      toast.error(props.failedCalimTryTxt);
    } finally {
      setTxLoading(false);
      toast.success(props.claimedTxt);
    }
  };

  const disabled = txLoading || !candyState || !wallet;

  return (
    <div className="flex flex-row justify-end items-center relative min-h-[60vh]">
      <div className="flex flex-col gap-6 w-full justify-center items-center h-full">
        <WalletMultiButton />
        <HeaderText
          customClass={"lg:text-6xl text-4xl text-center"}
          text={props.claimTxt}
        />
        <div className="lg:text-4xl text-3xl text-center mb-12">
          {candyStateLoading ? (
            <p>{props.loadingTxt}</p>
          ) : candyStateErr ? (
            <p>{candyStateErr}</p>
          ) : (
            candyState && (
              <>
                <p>
                  {soldOut
                    ? props.soldOutTxt
                    : `${candyState.itemsRemaining.toString()} out of ${candyState.itemsAvailable.toString()} left`}
                </p>
                <p>
                  {(candyState.price ? candyState.price : 0).toString()} SOL per
                  NFT
                </p>
              </>
            )
          )}
        </div>
        <div
          className={
            "w-full flex justify-center " +
            (disabled
              ? "opacity-65"
              : "hover:scale-105 transition-transform ease-in-out duration-150")
          }
        >
          <button
            className={
              "flex justify-center " +
              (soldOut ? "btn-red" : "btn-orange") +
              (disabled ? " cursor-not-allowed" : "cursor-pointer")
            }
            onClick={mint}
            disabled={disabled}
          >
            <p className="text-4xl p-16 pt-6  select-none">
              {soldOut
                ? props.soldOutTxt2
                : txLoading
                ? props.claimingTxt
                : props.claimNFTTxt}
            </p>
          </button>
        </div>
        <div className="text-4xl text-center mt-12">
          {txErr && <p>{txErr}</p>}
        </div>
      </div>
    </div>
  );
};
