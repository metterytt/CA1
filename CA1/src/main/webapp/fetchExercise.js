
const PERSONID = document.querySelector("#getuser");
const ALL = document.querySelector("#getall");



var urlP;
PERSONID.addEventListener("click", function (event) {
    event.preventDefault();
    var usernumber = document.getElementById("personid").value;
    url = "https://jsonplaceholder.typicode.com/users/" + usernumber;


    fetch(url)
            .then(function (response) {
                if (response.status !== 200)
                {
                    console.log("Problem occured... Status Code: " + response.status);
                    return;
                }
                response.json().then(function (data) {
//                    console.log(data);
                    //console.log(data.name);
                    var printed = "Name: " + data.name + "<br> Phone: " + data.phone
                    + "<br> <br> <b>Address:</b> <br> Street: " + data.address.street + 
                    "<br> Suite: " + data.address.suite + "<br> City: " + data.address.city
                    + "<br> Zipcode: " + data.address.zipcode + "<br> Geo: " + 
                    "lat: " + data.address.geo.lat + " lng: " + data.address.geo.lng;
                    document.getElementById("userinfo").innerHTML = printed;

                });
            })
            .catch(function (error) {
                console.log("Error occured...", error);
            });
}, false);

var urlA;
ALL.addEventListener("click", function (event) {
    event.preventDefault();
    urlA = "https://jsonplaceholder.typicode.com/users/";


    fetch(urlA)
            .then(function (response) {
                if (response.status !== 200)
                {
                    console.log("Problem occured... Status Code: " + response.status);
                    return;
                }
                response.json().then(function (data) {
                    
                    var printAll = "<br><br><table><tr><th>Name</th><th>Phone</th></tr>";
                    data.forEach(element => {
                        printAll += "<tr><td>" + element.name + "</td>" + "<td>" + element.phone + "</td></tr>";
                    });
                    printAll += "</table>";
                    
                    document.getElementById("userinfo").innerHTML = printAll;

                });
            })
            .catch(function (error) {
                console.log("Error occured...", error);
            });
}, false);