// json data

const jsonData = {
    "header": [
        [
            "Item ID",
            "Item Detail",
            "",
            ""
        ],
        [
            "Item Price",
            "Item Operate",
            "",
            "",
            ""
        ]
    ],
    "data": [
        {
            "Item Price": 0,
            "Item Operate": "Item 0",
            "": 0
        },
        {
            "Item Price": "",
            "Item Operate": 0,
            "": "$1",
            "undefined": 0
        },
        {
            "Item Price": 2,
            "Item Operate": "Item 2",
            "": 0
        },
        {
            "Item Price": 3,
            "Item Operate": "Item 3",
            "": 0
        },
        {
            "Item Price": 4,
            "Item Operate": "Item 4",
            "": 0
        },
        {
            "Item Price": 5,
            "Item Operate": "Item 5",
            "": 0
        },
        {
            "Item Price": 6,
            "Item Operate": "Item 6",
            "": 0
        },
        {
            "Item Price": 7,
            "Item Operate": "Item 7",
            "": 0
        },
        {
            "Item Price": 8,
            "Item Operate": "Item 8",
            "": 0
        },
        {
            "Item Price": 9,
            "Item Operate": "Item 9",
            "": 0
        }
    ]
};
console.log(jsonData);

// To delete list
const deleteButtons = document.querySelectorAll('.deleteBtn')

deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const row = event.target.closest('tr');
        const rowHidden = row.nextElementSibling;
        deleteRow(row, rowHidden);
    });
});
function deleteRow(row,rowHidden) {
    row.parentNode.removeChild(row);
    rowHidden.parentNode.removeChild(rowHidden);
}



// Expandable table
document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-button");

    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const row = button.closest(".toggle-row");
            const hiddenRow = row.nextElementSibling;

            hiddenRow.classList.toggle("hidden");
            button.textContent = hiddenRow.classList.contains("hidden") ? "+" : "-";
            // ? "+" : "-" to know - conditional statement insterd of using if statement
        });
    });
});




