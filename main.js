var runningID = 0;
var people = []

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const phoneNumber = document.getElementById("phoneNumber");
const emailAddress = document.getElementById("emailAddress");
const joiningTheParty = document.getElementById("partyCheck");

function start()
{
    people = []
}

function SumbitButton()
{
    var FirstName = firstName.value += "";
    var LastName = lastName.value += "";
    var Age = Number(age.value);
    var PhoneNumber = Number(phoneNumber.value);
    var EmailAddress = emailAddress.value += "";
    var JoiningTheParty = PartyStatus();

    var person = {FirstName, LastName, Age, PhoneNumber, EmailAddress, JoiningTheParty, runningID}
    people.push(person)

    console.log("A thing has been done.")
    console.log(people [runningID])

    runningID += 1;

    firstName.value ="";
    lastName.value ="";
    age.value ="";
    emailAddress.value ="";
    phoneNumber.value ="";
    joiningTheParty.checked = false;
}

function PartyStatus()
{
    if(joiningTheParty.checked == true)
    {
        return true;
    }

    if(joiningTheParty.checked == false)
    {
        return false;
    }
}