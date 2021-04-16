
//https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/
function search_vehicles() { 
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase(); 
    let vehicle_values = document.getElementsByClassName('vehicles'); 
    for (i = 0; i < vehicle_values.length; i++) {  
        if (!vehicle_values[i].innerHTML.toLowerCase().includes(input)) { 
            vehicle_values[i].style.display="none"; 
        } 
        else { 
            vehicle_values[i].style.display="list-item";                  
        } 
    } 
} 
function length(){

}
var arr = ["jane", "mary"]
arr.length