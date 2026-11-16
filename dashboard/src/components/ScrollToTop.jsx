import { useEffect, useState } from "react";

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {visible && (
                <button
                    className="scroll-to-top-btn"
                    onClick={scrollToTop}
                    title="Scroll to Top"
                    aria-label="scroll to top"
                >
                    <i className="bi bi-arrow-up"></i>
                </button>
            )}
        </>
    );
}

export default ScrollToTop;