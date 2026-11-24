function WhatsAppButton() {
    const phoneNumber = "919876543210";

    const message = encodeURIComponent(
        "Hello BloodLink! I need some assistance."
    );

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappURL}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact BloodLink on WhatsApp (opens in a new tab)"
            title="Chat with us on WhatsApp"
        >
            <i className="bi bi-whatsapp" aria-hidden="true"></i>
            <span className="whatsapp-tooltip">
                Chat with us
            </span>
        </a>
    );
}

export default WhatsAppButton;
