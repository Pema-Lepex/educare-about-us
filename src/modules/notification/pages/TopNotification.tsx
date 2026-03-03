import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { NotificationProps } from '../Notification';

type TabKey = 'gift-coupon';
const TopNotification: React.FC = () => {
    const [visible, setVisible] = useState(true);
    const [openPopup, setOpenPopup] = useState<TabKey | null>(null);
    const navigate = useNavigate();
    const notificationData: NotificationProps[] = JSON.parse(sessionStorage.getItem('storedNotification') || '[]');
    const notification = notificationData?.find((n) => n.position === 'Top');
    const handleClose = () => {
        setVisible(false);
        sessionStorage.removeItem('storedNotification');
        window.location.reload();
    };
    if (!visible) return null;
    return (
        <>
            {visible && notification && (
                <div
                    className="
                w-full py-2 px-4 text-white 
                bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
                shadow-lg flex flex-col 
                transition-all duration-500
                animate-slideDown
            "
                >
                    <div className="flex justify-between items-center w-full">
                        <span />
                        <div className="w-full flex flex-wrap justify-center items-center gap-4">
                            <div className="text-center space-y-2">
                                <h1 className="text-xl xl:text-2xl font-bold">{notification?.title}</h1>
                                <p className="text-base">{notification?.message}</p>
                            </div>
                            {/* <div className="flex flex-row gap-2">{notification?.enable_app && <NotificationButtons notification={notification} setOpenPopup={setOpenPopup} navigate={navigate} />}</div> */}
                        </div>
                        <button onClick={handleClose} className="text-white text-2xl font-bold hover:opacity-70 transition">
                            ×
                        </button>
                    </div>
                </div>
            )}
            {openPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] px-16" onClick={() => setOpenPopup(null)}>
                    <div className="p-0 w-full max-w-6xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
                        <div className="w-full h-full overflow-y-auto p-6 scrollbar-hide">
                            {/* <Coupon onClose={() => setOpenPopup(null)} /> */}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default TopNotification;
