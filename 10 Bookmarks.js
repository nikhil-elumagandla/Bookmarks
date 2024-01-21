// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let submitBtn = document.getElementById("submitBtn");
let bookmarksList = document.getElementById("bookmarksList");

bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
});

submitBtn.onclick = function() {
    if (siteNameInput.value !== "" && siteUrlInput.value !== "") {
        let listItem = document.createElement('li');
        bookmarksList.appendChild(listItem);
        listItem.classList.add("items");
        listItem.type = "none";

        let spanEl = document.createElement('span');
        listItem.appendChild(spanEl);
        spanEl.style.fontWeight = "bold";
        spanEl.textContent = siteNameInput.value;

        let br = document.createElement('br');
        listItem.appendChild(br);

        let anchorEl = document.createElement('a');
        listItem.appendChild(anchorEl);
        anchorEl.href = siteUrlInput.value;
        anchorEl.textContent = siteUrlInput.value;
    } else if (siteNameInput.value === "" && siteUrlInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
        siteUrlErrMsg.textContent = "Required*";
    } else if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    }
};

siteNameInput.addEventListener("change", function() {
    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
});

siteUrlInput.addEventListener("change", function() {
    if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
});