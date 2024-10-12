import { useState, useEffect } from 'react';

function ButtonGoTop() {
    const [showScroll, setShowScroll] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showScroll && (
                <button
                    className="fixed bottom-10 right-10 p-3 bg-white opacity-40 text-black rounded-full shadow-xl focus:outline-none flex items-center justify-center w-12 h-12 hover:animate-bounce hover:opacity-100"
                    onClick={scrollToTop}
                >
                    <span className="text-2xl">↑</span>
                </button>
            )}
        </>
    );
}

export default ButtonGoTop;
