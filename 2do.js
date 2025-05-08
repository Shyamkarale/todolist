const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addtask() {
    if (inputbox.value === '') {
        alert("You must write something");
    } else {
        // Check for duplicates
        const items = listcontainer.getElementsByTagName('li');
        let isDuplicate = false;
        for (let item of items) {
            if (item.firstChild.textContent === inputbox.value.trim()) {
                isDuplicate = true;
                break;
                consol.log("shyam")
            }
        }

        if (isDuplicate) {
            alert("This task already exists!");
        } else {
            // Create new list item
            let li = document.createElement("li");
            li.textContent = inputbox.value.trim();  // Using textContent instead of innerHTML
            listcontainer.appendChild(li);

            // Create delete button
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
            consol.log("spam")
        }
    }
    inputbox.value = "";
    console.log("Something is nothung");
    savedata();
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata(); // Save data after removing an item
    }
}, false);

function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
    const data = localStorage.getItem("data");
    if (data) {
        listcontainer.innerHTML = data;
    }
}

showTask();
