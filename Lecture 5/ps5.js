function menuIcon() {
    var x = document.getElementById('menu');
    var y = document.getElementById('header');
    document.getElementById('search').classList.toggle("hide");
    x.classList.toggle("change");
    y.classList.toggle("show");
  }


/**var text = '{"vehicle":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.employees[1].firstName + " " + obj.employees[1].lastName;**/