// import { pingPong } from './ping-pong';
import './styles.css';

// $(document).ready(function() {
//   $('#ping-pong-form').submit(function(event) {
//     event.preventDefault();
//     var goal = $('#goal').val();
//     var output = pingPong(goal);
//     output.forEach(function(element) {
//       $('#solution').append("<li>" + element + "</li>");
//     });
//   });
// });
function nTriangle(side1, side2, side3) {
  if((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side1 + side3 <= side2)) {
    return true;
  } else {
    return false;
  }
}

function equilateral(side1, side2, side3) {
  if(side1 === side2 && side2 === side3) {
    return true;
  } else {
    return false;
  }
}

function isosceles(side1, side2, side3) {
  if(side1 === side2 || side1 === side3 || side2 === side3) {
    return true;
  } else {
    return false;
  }
}
//
// function scalene(side1, side2, side3) {
//   if(side1 !== side2 && side1 !== side3 && side2 !== side3) {
//     return true;
//   } else {
//     return false;
//   }
// }


//jQuery shit

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    let side1 = parseFloat($('#side1Length').val());
    let side2 = parseFloat($('#side2Length').val());
    let side3 = parseFloat($('#side3Length').val());
    let result = "";

    if (nTriangle(side1, side2, side3) === true) {
      result = "Not a Triangle";
    } else if(equilateral(side1, side2, side3) === true) {
      result = "Equilateral Triangle";
    } else if(isosceles(side1, side2, side3) === true) {
      result = "Isoceles Triangle";
    } else {
      result = "Scalene Triangle";
    }


    $("#output-nTriangle").text(result);
  });
});
