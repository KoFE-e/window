const closeModal = (selector) => {
    const modal = document.querySelectorAll(selector);

    modal.forEach(item => {
        item.style.display = "none";
    });
    
    document.body.style.overflow = "";
};

export default closeModal;