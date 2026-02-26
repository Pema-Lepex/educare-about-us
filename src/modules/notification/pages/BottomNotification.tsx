import React, { useState, useEffect } from 'react';
import NotificationButtons from './components/NotificationButtons';
import exp from 'constants';
import { NotificationProps } from '../Notification';
import { useNavigate } from 'react-router-dom';

type TabKey = 'gift-coupon';
const MD_BREAKPOINT = 768;
const BottomNotification: React.FC = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);
    const [openPopup, setOpenPopup] = useState<TabKey | null>(null);
    const notificationData: NotificationProps[] = JSON.parse(sessionStorage.getItem('storedNotification') || '[]');
    const notification = notificationData?.find((n) => n.position === 'Bottom');
    const handleClose = () => {
        setVisible(false);
        sessionStorage.removeItem('storedNotification');
        window.location.reload();
    };
// className="
//                 w-full p-4 text-white 
//                 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
//                 shadow-lg flex flex-col 
//                 transition-all duration-500
//                 animate-slideDown
//             "
    if (!visible) return null;
    return (
        <>
            {visible && notification && (
                <div
                    className="
                    fixed bottom-0 left-0 right-0 z-50
                    w-full p-4 text-white 
                    bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
                    shadow-lg flex flex-col 
                    transition-all duration-500
                    animate-slideDown
                     "
                >
                    <div className="flex justify-between items-center w-full">
                        <span />
                        <div className="w-full text-center flex flex-col justify-center items-center space-y-2">
                            <h1 className="text-xl xl:text-2xl font-bold">{notification?.title}</h1>
                            <p className="text-base">{notification?.message}</p>
                            <NotificationButtons notification={notification} setOpenPopup={setOpenPopup} navigate={navigate} />
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

export default BottomNotification;
