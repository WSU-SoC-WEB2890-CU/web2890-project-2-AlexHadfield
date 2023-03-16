//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"


// Check to see if user is on Contact Page.
const title = document.querySelector('#title');
if (title && title.querySelector('div div h1')?.textContent === 'Contact Us') {
    // Auto fill out the forms based on package selected.
    const urlParams = new URLSearchParams(window.location.search);
    const selectedPackage = Number(urlParams.get('package'));

    let reason;
    let message;
    let setMessage = true;

    switch (selectedPackage) {
        case 1:
            // Newborn Basic
            reason = 1;
            message = "I'd like to know more about the Newbie Basic plan.";
            break;
        case 2:
            // Maternity + Newbie
            reason = 1;
            message = "I'd like to know more about the Maternity + Newbie plan.";
            break;
        case 3:
            // Birth Story + Newbie
            reason = 1;
            message = "I'd like to know more about the Birth Story + Newbie plan.";
            break;
        case 4:
            // Maternity + Birth Story + Newbie
            reason = 1;
            message = "I'd like to know more about the Maternity + Birth Story + Newbie plan.";
            break;
        case 5:
            // My Milestones
            reason = 1;
            message = "I'd like to know more about the My Milestones plan.";
            break;
        case 6:
            // My First Year
            reason = 1;
            message = "I'd like to know more about the My First Year plan.";
            break;
        case 7:
            // Two Color Photography With Amber
            reason = 2;
            message = "I'd like to know more about the Two Color Photography With Amber plan.";
            break;
        case 8:
            // Premier Photographer Sessions
            reason = 2;
            message = "I'd like to know more about the Premier Photographer Sessions plan.";
            break;
        case 9:
            // Creative Team Photographers
            reason = 2;
            message = "I'd like to know more about the Creative Team Photographers plan.";
            break;
        case 10:
            // Extended Family Portraits
            reason = 2;
            message = "I'd like to know more about the Extended Family Portraits plan.";
            break;
        case 11:
            // Half Pint Family Sessions With Cris and Mandi
            reason = 2;
            message = "I'd like to know more about the Half Pint Family Sessions With Cris and Mandi plan.";
            break;
        case 12:
            // Half Pint Family Sessions With Ashlee
            reason = 2;
            message = "I'd like to know more about the Half Pint Family Sessions With Ashlee plan.";
            break;
        default:
            setMessage = false;
            console.log(`Unexpected (or Non-Existant) URL Param: ${selectedPackage}`);
    }

    if (setMessage) {
        const reasonField = document.getElementById('userReason');
        reasonField.value = reason;
        const messageField = document.getElementById('userMessage');
        messageField.value = message;
    }
}