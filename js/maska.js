var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999) 999 99 99");

    im.mask(selector);

    new JustValidate('.form', {
        rules: {
            name: {
                required: true,
                minLength: 3,
                maxLength: 10
            },
            tel: {
                required: true,
                function: (name, value) => {
                    const phone = selector.inputmask.unmaskedvalue()
                    return Number(phone) && phone.length === 10
                }
            },
        },
    });