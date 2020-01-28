function Movie (name,rating,times){
  this.name = name;
  this.rating = rating;
  this.times = times;
}
// function Ticket (name,time,rating){
//   this.name = name;
//   this.time = time;
//   this.rating = rating;
// }

function Ticket (movieObj, time) {
  this.name = movieObj.name;
  this.rating = movieObj.rating;
  this.time = time;
}

$(document).ready(function(){
  $().submit(function(event) {
    
    var cinderellaMovie = new Movie ("cinderlla","PG",["2","4"]);
    // var ticket = new Ticket ("cinderlla","2","pg");
    var ticket = new Ticket(cinderellaMovie);




  });

});








var cinderella = new Movie("cinderella", "PG", [3, 2, 4]);
var desiredTime = cinderella.times[1]
var cinderellaTicket1 = new Ticket(cinderella.title, desiredTime);