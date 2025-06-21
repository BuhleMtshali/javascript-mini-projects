let guests = ["dave", "mike", "steve", "rob"];

function sendInvite(guestArray){
    for (let i = 0; i < guestArray.length; i++){
       console.log(`Hi ${guestArray[i]}, You are invited to the annual ball of the year`)
    }
}

sendInvite(guests)