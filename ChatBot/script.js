const out = document.getElementById( "main" );
const botStatus = document.querySelector( ".user-status .online" );
const submitBtn = document.querySelector( ".submit-btn" );
const inputTextField = document.querySelector( ".send-msg input" );

submitBtn.addEventListener( "click", userCall );

inputTextField.onkeydown = function ( evt ) {
    var keyCode = evt ? ( evt.which ? evt.which : evt.keyCode ) : event.keyCode;
    if ( keyCode == 13 ) {
        userCall();
        inputTextField.value = "";
    }
}
function userCall() {
    botStatus.innerHTML = "Typing...";
    let userText = ( inputTextField.value ).trim();
    if ( !userText ) {
        botStatus.innerHTML = "Online";
        alert( "Please enter something..." );
        return
    }
    const appendText = `<div class="msg-box user-msg">
                                <div class="msg-text bg-text-user">
                                    <p>${userText}</p>
                                </div>
                        </div>`;

    appendNewChat( appendText );
    sendMessage( userText );
    inputTextField.value = "";
}

function appendNewChat( appendText ) {
    const isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1;
    if ( isScrolledToBottom ) {
        out.scrollTop = out.scrollHeight - out.clientHeight
    }
    const newElement = document.createElement( "div" )

    newElement.innerHTML = appendText;

    out.appendChild( newElement )
    if ( isScrolledToBottom) {
        out.scrollTop = out.scrollHeight - out.clientHeight
    }
}


document.querySelector( '.tumbler-wrapper' ).addEventListener( 'click', _ => {
    document.body.classList.toggle( 'night-mode' );
    const element = document.querySelector( "#app main" );
    console.log( element );
    element.classList.toggle( "dark-mode" );
} );

function sendMessage( textMsg ) {
    const bid = '175822';
    const key = 'mgLaDTICB41mPsDy';
    const msg = textMsg;
    const burl = 'http://api.brainshop.ai/get?bid=' + bid + '&key=' + key + '&f=json&jsoncallback=callback';
    $.ajax( {
        url: burl + '&uid=' + "dharam-gfx" + '&msg=' + msg,
        dataType: 'jsonp',
        jsonpCallback: 'callback',
        success: function ( resp ) {
            setTimeout( () => {
                const appendText = `<div class="msg-box bot-msg">
                                    <div class="msg-text bg-text-bot">
                                        <p>${resp}</p>
                                    </div>
                            </div>`;
                appendNewChat( appendText );
                botStatus.innerHTML = "Online";
            }, 500 );
        },
        error: function ( error ) {
            const appendText = `<div class="msg-box bot-msg">
                                    <div class="msg-text bg-text-bot">
                                        <p>Please Try Again...</p>
                                    </div>
                            </div>`;
            appendNewChat( appendText );
            botStatus.innerHTML = "Online";

        }
    } );
}