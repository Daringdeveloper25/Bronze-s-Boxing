// Finds every element in the HTML that has the class "tab-button"
// and stores all of those buttons inside the variable called "buttons".
var buttons = document.querySelectorAll(".tab-button");


// Finds every element in the HTML that has the class "tab-content"
// and stores all of those content sections inside the variable called "contents".
var contents = document.querySelectorAll(".tab-content");


// Loops through every button inside the "buttons" collection.
// During each loop, the current button is called "button".
buttons.forEach(function (button) {

    // Adds a click event to the current button.
    // Everything inside this function runs when that button is clicked.
    button.addEventListener("click", function () {

        // Gets the value from the clicked button's "data-tab" attribute.
        //
        // Example:
        // <button class="tab-button" data-tab="about">About</button>
        //
        // button.dataset.tab would return:
        // "about"
        //
        // So the variable "tab" would contain "about".
        var tab = button.dataset.tab;


        // Loops through every element with the class "tab-content".
        contents.forEach(function (content) {

            // Removes the "active" class from every content section.
            // This makes sure the previously opened tab is no longer active.
            content.classList.remove("active");
        });


        // Loops through every tab button.
        buttons.forEach(function (btn) {

            // Removes the "active" class from every button.
            // This makes sure no previously selected button stays active.
            btn.classList.remove("active");
        });


        // Finds the element whose ID matches the value stored in "tab".
        //
        // For example, if:
        // tab = "about"
        //
        // then this becomes:
        // document.getElementById("about")
        //
        // It would find something like:
        // <div id="about" class="tab-content">
        //
        // Then it adds the "active" class to that content section.
        document.getElementById(tab).classList.add("active");


        // Adds the "active" class to the specific button that was clicked.
        // This can be used to visually highlight the selected button.
        button.classList.add("active");
    });

});