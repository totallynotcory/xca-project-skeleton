//1. Create a condtional that checks if a a string representing a color is equal to blue. If it is then log It's Blue

//2. Adding on to the first question add additional logic to check if the color is not blue. If the color is not blue log "It's not blue"

//3. Create an if statement to log "x is greater" if x is greater than y

//4. Adding on the last question create cases for if x is less than y and if x is equal to y

//5. Write a program that accepts the name of a day ("Monday"), then shows the name of the following day ("Tuesday"). Incorrect inputs must be taken into account.

//Bonus: Take a look at three instances of this code. Without running it figure out the final values of all three variables for each instance

let nb1 = 13;
let nb2 = 7;
let nb3 = 26;

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);
 // --------------------------------------------
let nb1 = 4;
let nb2 = 29;
let nb3 = 6;

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);
 // --------------------------------------------

let nb1 = 12;
let nb2 = 18;
let nb3 = 26;

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);