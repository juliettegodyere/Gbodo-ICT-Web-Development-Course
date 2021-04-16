function menuIcon() {
  var x = document.getElementById('menu');
  var y = document.getElementById('header');
  document.getElementById('search').classList.toggle("hide");
  x.classList.toggle("change");
  y.classList.toggle("show");
}

function searchBar() {
  document.getElementById('search-bar').style.display = "block";


}


var text = '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(text);

<p id="demo"></p>


document.getElementById("demo").innerHTML =
  obj.employees[1].firstName + " " + obj.employees[1].lastName;