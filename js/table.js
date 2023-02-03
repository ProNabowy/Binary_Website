let letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' space', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '?', ';', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '/', '.', '"', "'", '\\', '|', ':']
const HTMLObject = {};
for (const key of letters)
{
    HTMLObject[key] = [key.charCodeAt(0).toString(2), `${key.charCodeAt(0)}`];
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
