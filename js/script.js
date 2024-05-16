
function newItem(){

    // jquery
    // 1. Adding a new item to the list of items:
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("Your must write something!");
       } else {
       let list = $('#list');
       list.append(li);
    }
 

    // jquery
    // 2. Crossing out an item from the list of items:
    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    })

    
    // jquery
    // 3(i). Adding the delete button "X":
        let crossOutButton = $('<crossOutButton></crossOutButton>');
        crossOutButton.append(document.createTextNode("X"));
        li.append(crossOutButton);

        crossOutButton.on('click', deleteListItem);

    // 3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
        function deleteListItem() {
            li.addClass("delete");
        }
    
    // jquery
    // 4. Reordering the items:
        $('#list').sortable();
} 