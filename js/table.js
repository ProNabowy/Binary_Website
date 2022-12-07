
import {binary_object} from "./binary_data.js";
const HTMLObject = {};
for (const key in binary_object)
{
    HTMLObject[key] = [binary_object[key], `${key.charCodeAt(0)}`];
}
// Darw HTML Table
const darwTable = _ =>
{
    for (const key in HTMLObject)
    {
        const table_tbody = document.querySelector("table tbody");
        const tbody_html = `<tr>
                        <td>${key}</td>
                        <td>${HTMLObject[key][1]}</td>
                        <td>${HTMLObject[key][0]}</td>
                    </tr>`;
        table_tbody.innerHTML += tbody_html;
    }
}
darwTable();
