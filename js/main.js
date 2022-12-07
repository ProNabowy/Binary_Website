import { binary_object } from "./binary_data.js";
// Constants
const binaryBtn = document.querySelectorAll("button")[1];
const stringBtn = document.querySelectorAll("button")[2];
const inputBtn = document.querySelector("textarea");
let converting_result_div = document.querySelector(".value_after_converting");

const fire_error = {
    icon: 'error',
    title: 'Oops...',
    text: "You Can't Leave Input Empty",
}

// ==================================== Create Functions To Convert Binary || String ================================
let user_value = "";
let getValueFromUser = _ =>
{
    inputBtn.addEventListener("input", (e) =>
    {
        user_value = e.target.value;
    });
    return user_value;
}

getValueFromUser();

const converterToBinary = _ =>
{
    let switchToBinary = "";
    for (let i = 0; i < user_value.length; i++)
    {
        if (user_value[i] == " ")
        {
            switchToBinary += binary_object.spase + " ";
        } else if (user_value[i] == "\n") 
        {
            switchToBinary += "<br>";
        } else
        {
            switchToBinary += binary_object[user_value[i]] + " ";
        }
    }
    return switchToBinary;
}
const setBinaryToUi = _ =>
{
    binaryBtn.addEventListener("click", _ =>
    {
        if (inputBtn.value)
        {
            converting_result_div.innerHTML = converterToBinary();
            inputBtn.value = "";
        } else
        {
            Swal.fire(fire_error);
        }
    });

}

setBinaryToUi();

const converterToString = _ =>
{
    let switchToString = "";
    user_value = user_value.split(" ");
    // Select Object Keys And Values to Get Current Result To Set It in UI  
    const objectKeys = Object.keys(binary_object);
    const objectValues = Object.values(binary_object);
    for (let i = 0; i < objectValues.length; i++)
    {
        if (objectValues.includes(user_value[i]))
        {
            // objectValues[10] === space 
            if (user_value[i] == objectValues[10])
            {
                switchToString += " ";
            } else if (user_value[i] == "\n")
            {
                switchToString += "<br>";
            } else
            {
                let current_letter = objectValues.indexOf(user_value[i]);
                switchToString += objectKeys[current_letter];
            }
        }
    }
    return switchToString;
}

const setStringToUi = _ =>
{
    stringBtn.addEventListener("click", () =>
    {
        if (inputBtn.value)
        {
            converting_result_div.innerHTML = converterToString();
            inputBtn.value = "";
        } else
        {
            Swal.fire(fire_error);
        }
    });
}

setStringToUi();
