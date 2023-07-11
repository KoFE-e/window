const validateModals = (trigger, state, openModal) => {
    const modalName = trigger.getAttribute('data-modal-name');

    if (modalName) {
        switch (modalName) {
            case 'popup_calc':
                state.width && state.height ? openModal() : createError();
                console.log(state.form);
                if (state.form === undefined) state.form = 0;
                break;
            case 'popup_calc_profile':
                if (state.type === undefined) state.type = 'tree';
                state.profile ? openModal() : createError();
                break;
        }
    } else {
        openModal();
    }
    

    function createError() {
        const prevError = document.querySelector('.status');
        if (prevError) prevError.remove();
        trigger.insertAdjacentHTML('beforebegin', '<div class="status" style="margin-bottom:20px">Вы заполнили не все данные</div>');
    }
};

export default validateModals;