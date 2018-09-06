var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var all = boys.concat(girls);

const GIRLS_LIST = document.getElementById("girls");
const BOYS_LIST = document.getElementById("boys");
const ALL = document.getElementById("all");
printLists();

// prints all lists
function printLists() {
    var boysString = boys.map(element => {
        return element + "<br>";
    });
    var girlsString = girls.map(element => {
        return element + "<br>";
    });
    var allString = all.map(element => {
        return element + "<br>";
    });
    BOYS_LIST.innerHTML = boysString.join("");
    GIRLS_LIST.innerHTML = girlsString.join("");
    ALL.innerHTML = allString.join("");
}

// adds to lists
const ADD_BOY = document.querySelector("#addboy");
ADD_BOY.addEventListener("click", function (event) {
    event.preventDefault();
    var boyInput = document.getElementById("newboy").value;
    boys.push(boyInput);
    all = boys.concat(girls);
    printLists();
}, false);
const ADD_GIRL = document.querySelector("#addgirl");
ADD_GIRL.addEventListener("click", function (event) {
    event.preventDefault();
    var girlInput = document.getElementById("newgirl").value;
    girls.push(girlInput);
    all = boys.concat(girls);
    printLists();
}, false);

// removes from lists
const REMOVE_BOY = document.querySelector("#removeboy");
REMOVE_BOY.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(document.getElementById("first").checked);
    if (document.getElementById("first").checked) {
        boys.shift();
    } else {
        boys.pop();
    }
    all = boys.concat(girls);
    printLists();
}, false);
const REMOVE_GIRL = document.querySelector("#removegirl");
REMOVE_GIRL.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(document.getElementById("first").checked);
    if (document.getElementById("first").checked) {
        girls.shift();
    } else {
        girls.pop();
    }
    all = boys.concat(girls);
    printLists();
}, false);

//reverses all-list
const REVERSE = document.querySelector("#reverse");
REVERSE.addEventListener("click", function (event) {
    event.preventDefault();
    all.reverse();
    printLists();
}, false);

// sorts all-list, toggling ascending/descending
const SORT = document.querySelector("#sort");
SORT.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.name == 'ascending') {
        var sortFunction = function (a, b) {
            if (a.toUpperCase() < b.toUpperCase())
                return -1;
            if (a.toUpperCase() > b.toUpperCase())
                return 1;
            if (a.toUpperCase() == b.toUpperCase())
                return 0;
        }
        all.sort(sortFunction);
        printLists();
        event.target.name = 'descending';
    } else {
        var sortFunction = function (a, b) {
            if (a.toUpperCase() > b.toUpperCase())
                return -1;
            if (a.toUpperCase() < b.toUpperCase())
                return 1;
            if (a.toUpperCase() == b.toUpperCase())
                return 0;
        }
        all.sort(sortFunction);
        printLists();
        event.target.name = 'ascending';
    }
}, false);



