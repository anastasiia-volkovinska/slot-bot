import $ from 'jquery';

export let form = (function () {

    console.log('I am form and this is the master log!');

    function newTest() {
        console.log('New test!');
    }

    function init(gameID, casinoID, userID) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `http://gameservice.bossgs.org/testslot/SlotService.svc/_Initialise/${userID}/${casinoID}/${gameID}`,
                dataType: 'JSONP',
                type: 'GET',
                success: resolve,
                error: reject
            });
        });
    }

    $('Form__submit').on('click', (event) => {

        console.log('I am submited!');

        event.preventDefault();
        let gameID = $('Form__gameID').value();
        let casinoID = $('Form__casinoID').value();
        let userID = $('Form__userID').value();

        init(gameID, casinoID, userID).then((data) => {
            console.log('data', data);
        });

    });

})();
