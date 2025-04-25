import { XIcon } from "./common/icons/x-icon";
import { TWITTER, TELEGRAM, TELEGRAM_DEV } from "../urls";
import { TgIcon } from "./common/icons/tg-icon";
import { DevIcon } from "./common/icons/dev-icon";
import { useTranslations } from "next-intl";

const iconClass = "w-6 h-6 fill-white";

export const FooterSection = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-black py-2 text-center text-white backdrop-blur transition-colors duration-500">
      <p className="flex flex-row items-center justify-center gap-2">
        <span className="text-sm font-bold sm:text-xl">$SMOB &copy; 2025</span>
        <span className="inline-flex">
          <a
            href={TWITTER}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-[2px] rounded p-2 font-bold"
          >
            <XIcon iconClass={iconClass} />
          </a>
          <a
            href={TELEGRAM}
            rel="noopener noreferrer"
            target="_blank"
            className="mx-[2px] rounded p-2 font-bold"
          >
            <TgIcon iconClass={iconClass} />
          </a>
        </span>
      </p>
      <p className="px-2 pb-4 text-sm">{t("1")}</p>
    </footer>
  );
};
