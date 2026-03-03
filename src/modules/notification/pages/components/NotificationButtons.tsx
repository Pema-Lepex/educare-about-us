import { useEffect, useState } from "react";
import { NotificationProps } from "../../Notification";
import { GiftCouponAuthenticatedLinkDetails, GiftCouponLinkDetails } from "utils/helpers/URLs";
import { useAuth } from "utils/helpers/AuthContext";

type TabKey = 'gift-coupon';
const MD_BREAKPOINT = 768;
interface DownloadAppProps {
    notification: NotificationProps | null;
    setOpenPopup: (tab: TabKey) => void;
    navigate: (path: string) => void;
}
const NotificationButtons: React.FC<DownloadAppProps> = ({ notification, setOpenPopup, navigate }) => {
    const [isMobile, setIsMobile] = useState(false);
    const { user } = useAuth();
    const redirectToAppStore = () => {
        window.location.href = 'https://apps.apple.com/us/app/educare-skill/id6479234341';
    };
    const redirectToGooglePlay = () => {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.skill.educare';
    };
    useEffect(() => {
        const checkScreenSize = () => {
          setIsMobile(window.innerWidth < 768);
        };
         checkScreenSize();
  
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
    const getHref = () => {
        if (isMobile) {
          return GiftCouponAuthenticatedLinkDetails.linkTo;
        }
        return user?.name ? GiftCouponAuthenticatedLinkDetails.linkTo : GiftCouponLinkDetails.linkTo;
      };
    return (
        <div className=" space-x-2 md:space-x-6 text-center">
            <button
                onClick={redirectToAppStore}
                type="button"
                className="px-2 py-2 inline-flex items-center rounded-lg text-white md:text-lg text-sm tracking-wider border-none outline-none bg-primary-500 hover:bg-primary-600 max-[363px]:px-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="36px" fill="#fff" className="inline mr-1 md:mr-2 size-5 md:size-8" viewBox="0 0 22.773 22.773">
                    <path
                        d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                        data-original="#000000"
                    />
                </svg>
                <div className="text-[12px] md:text-base">
                    <p className="md:text-[10px] text-[8px] text-white leading-none text-left max-[400px]:text-[8px]">Download from</p>
                    App Store
                </div>
            </button>
            <button
                onClick={redirectToGooglePlay}
                type="button"
                className="px-2 py-2 inline-flex items-center rounded-lg text-white md:text-lg text-sm tracking-wider border-none outline-none bg-primary-500 hover:bg-primary-600 max-[363px]:px-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="36px" fill="#fff" className="inline mr-1 md:mr-2 size-5 md:size-8" viewBox="0 0 64 64">
                    <path fill="#57cef3" d="M7 3v58l33-29z" data-original="#57cef3" />
                    <path fill="#fff200" d="m36 32 8-10 15 10-15 10z" data-original="#fff200" />
                    <path fill="#48ff48" d="M36 32 7 3h4l34 20z" data-original="#48ff48" />
                    <path fill="#ff6c58" d="M36 32 7 61h4l34-20z" data-original="#ff6c58" />
                    <path fill="#f33" d="M9.1 64c-1.9 0-3.6-1-4.5-2.6L8 58.2v.7c0 .3.1.6.3.8L24 44c7.4 0 14.1-1.2 18.3-3.1l5.8-3.4v4.6L11.7 63.3c-.7.5-1.6.7-2.6.7z" data-original="#ff3333" />
                    <path fill="#0779e4" d="M9.1 4C8.5 4 8 4.5 8 5.1V36c0 4.4 7.2 8 16 8L5.5 62.5c-.9-.9-1.5-2.2-1.5-3.6V5.1C4 2.3 6.3 0 9.1 0z" data-original="#0779e4" />
                    <path
                        fill="#314a52"
                        d="M8.3 4.3c.2-.2.5-.3.8-.3.2 0 .4.1.6.2l45.5 26.6c.5.2.8.7.8 1.2s-.3 1-.7 1.3l-11.4 6.6 2.9 2.9 10.4-6.1c1.7-1 2.7-2.8 2.7-4.7s-1-3.8-2.7-4.7L11.7.7C11 .2 10.1 0 9.1 0 7.7 0 6.4.6 5.5 1.5z"
                        data-original="#314a52"
                    />
                </svg>
                <div className="text-[12px] md:text-base">
                    <p className="md:text-[10px] text-[8px] text-white leading-none text-left">Get it on</p>
                    Google Play
                </div>
            </button>
            {notification?.gift_button_web && (
                <a
                    href={getHref()}
                    type="button"
                    className="px-2 py-2 inline-flex items-center rounded-lg text-white md:text-lg text-sm tracking-wider border-none outline-none bg-primary-500 hover:bg-primary-600 max-[363px]:px-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline mr-1 md:mr-2 size-5 md:size-8">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                        />
                    </svg>
                    <div className="text-[12px] md:text-base">
                        <p className="md:text-[10px] text-[8px] text-white leading-none text-left">Gift</p>
                        Coupon
                    </div>
                </a>
            )}
        </div>
    );
};
export default NotificationButtons;