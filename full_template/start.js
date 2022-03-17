function onTableClick(ev) {
    console.log("the user clicked on the table!");
}

function main () {
    console.log("this javascript file just loaded");

    let ftable = document.getElementById("first-table");
    
    console.log(ftable);

    ftable.onclick = onTableClick;

    let addBtn = document.getElementById("add-btn");
    addBtn.onclick = (ev) => {
        // get the text from the input box
        let todoTxt = document.getElementById("todo-item").value;
        
        let todosList = document.getElementById("todos");

        let li = document.createElement("li");
        li.appendChild(document.createTextNode(todoTxt));
        todosList.appendChild(li);

        // clear the contents of the text box
        document.getElementById("todo-item").value = "";
    };

}
main();
