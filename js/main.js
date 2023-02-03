// Constants
const binaryBtn = document.querySelectorAll("button")[1];
const stringBtn = document.querySelectorAll("button")[2];
const textarea = document.querySelector("textarea");
let converting_result_div = document.querySelector(".value_after_converting");

const fire_error = {
    icon: 'error',
    title: 'Oops...',
    text: "You Can't Leave Input Empty",
}

// ==================================== Create Functions To Convert Binary || String ================================
let user_value = "";
// set value at user_value var when user write on input
let getValueFromUser = _ =>
{
    textarea.addEventListener("input", (e) => user_value = e.target.value);
    return user_value;
}

getValueFromUser();

const converterToBinary = _ =>
{
    let switchToBinary = "";
    for (let i = 0; i < user_value.length; i++)
    {
        switchToBinary += user_value.charCodeAt(i).toString(2) + " ";
    }
    return switchToBinary;
}

const converterToString = _ =>
{
    let switchToString = "";
    // splliting user_value varible to control every letter at it
    user_value = user_value.split(" ");
    for (let i = 0; i < user_value.length; i++) {
        switchToString += String.fromCharCode(parseInt(user_value[i], 2));
    }
    return switchToString;
}

const setResultToUi = (btn , converteType) =>
{
    btn.addEventListener("click", () =>
    {
        if (textarea.value)
        {
            // change input value to empty value 
            converting_result_div.innerHTML = converteType();
            textarea.value = "";
        } else
        {
            // callening Swal Library when user try to converte nullish value
            Swal.fire(fire_error);
        }
    });
}

setResultToUi(stringBtn , converterToString);
setResultToUi(binaryBtn , converterToBinary);
