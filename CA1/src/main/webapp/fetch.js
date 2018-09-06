const PERSONID = document.querySelector("#getuser");
var url;
PERSONID.addEventListener("click", function (event) {
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
                    var toBePrinted = "Name: " + data.name + "<br>Phone: " + data.phone +
                            "<br><br>" + "<b>Address: </b><br>Street: " + data.address.street +
                            "<br>City: " + data.address.city + "<br>Zip: " + data.address.zipcode +
                            "<br>Geo (lat, long): " + data.address.geo.lat + ", " + data.address.geo.lng;
                    document.getElementById("userinfo").innerHTML = toBePrinted;

                });
            })
            .catch(function (error) {
                console.log("Error occured...", error);
            });

}, false);



const GETALL = document.querySelector("#getall");
GETALL.addEventListener("click", function (event) {

    fetch("https://jsonplaceholder.typicode.com/users/")
            .then(function (response) {
                if (response.status !== 200)
                {
                    console.log("Problem occured... Status Code: " + response.status);
                    return;
                }
                response.json().then(function (data) {
                    console.log(data);

                    var toBePrinted = "<table><tr><th>Name</th><th>Phone</th></tr>";
                    data.forEach(element => {
                        toBePrinted += "<tr><td>" + element.name + "</td><td>" + element.phone + "</td></tr>";
                    });
                    toBePrinted += "</table>";
                    document.getElementById("userinfo").innerHTML = toBePrinted;
                });
            })
            .catch(function (error) {
                console.log("Error occured...", error);
            });

}, false);
