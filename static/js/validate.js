// The submit button
const SUBMIT = $( "#submit" );

// Each of the fields and error message divs
const USERNAME = $( "#username" );
const USERNAME_MSG = $( "#user-msg" );

const PASSWORD = $( "#password" );
const PASSWORD_MSG = $( "#password-msg" );

const CONFIRM = $( "#confirm" );
const CONFIRM_MSG = $( "#confirm-msg" );

const FNAME = $( "#fname" );
const FNAME_MSG = $( "#fname-msg" );

const LNAME = $( "#lname" );
const LNAME_MSG = $( "#lname-msg" );

const EMAIL = $( "#email" );
const EMAIL_MSG = $( "#email-msg" );

/**
 * Resets the error message fields and makes the submit
 * button visible.
 */
function reset_form ( )
{
    USERNAME_MSG.html( "" );
    USERNAME_MSG.hide();
    PASSWORD_MSG.html( "" );
    PASSWORD_MSG.hide();
    CONFIRM_MSG.html( "" );
    CONFIRM_MSG.hide();
    LNAME_MSG.html( "" );
    LNAME_MSG.hide();
    FNAME_MSG.html( "" );
    FNAME_MSG.hide();
    EMAIL_MSG.html( "" );
    EMAIL_MSG.hide();
    SUBMIT.show();
}

/**
 * Validates the information in the register form so that
 * the server is not required to check this information.
 */
function validate ( )
{
    let valid = true;
    reset_form ( );
    SUBMIT.hide();

    // This currently checks to see if the username is
    // present and if it is at least 5 characters in length.
    if ( !USERNAME.val() || USERNAME.val().length < 5  )
    {
        // Show an invalid input message
        USERNAME_MSG.html( "Username must be 5 characters or more" );
        USERNAME_MSG.show();
        // Indicate the type of bad input in the console.
        console.log( "Bad username" );
        // Indicate that the form is invalid.
        valid = false;
    }
    // TODO: Add your additional checks here.


    if ( USERNAME.val() != USERNAME.val().toLowerCase())
    {
        USERNAME_MSG.html("Username must be all lowercase");
        USERNAME_MSG.show();
        valid = false;
    }

    if ( !PASSWORD.val() || PASSWORD.val().length < 8 )
    {
        PASSWORD_MSG.html("Password needs to be at least 8 characters long");
        PASSWORD_MSG.show();
        valid = false;
    }

    if ( !CONFIRM.val() || PASSWORD.val() != CONFIRM.val() )
    {
        CONFIRM_MSG.html("Passwords don't match");
        CONFIRM_MSG.show();
        valid = false;
    }

    if ( !FNAME.val() )
    {
        FNAME_MSG.html("First name must not be empty");
        FNAME_MSG.show();
        valid = false;
    }

    if ( !LNAME.val() )
    {
        LNAME_MSG.html("Last name must not be empty");
        LNAME_MSG.show();
        valid = false;
    }

    var x = EMAIL.val().trim();
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if ( atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length ) {
        EMAIL_MSG.html("You need to enter a valid email address");
        EMAIL_MSG.show();
        valid = false;
    }

    // If the form is valid, reset error messages
    if ( valid )
    {
        reset_form ( );
    }
}

// Bind the validate function to the required events.
$(document).ready ( validate );
USERNAME.change ( validate );
PASSWORD.change ( validate );
CONFIRM.change ( validate );
LNAME.change ( validate );
FNAME.change ( validate );
EMAIL.change ( validate );


