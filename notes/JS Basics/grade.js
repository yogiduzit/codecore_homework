let mark = process.argv[2];
let grade;

if (mark <= 100 && mark >= 0) {
  if (mark >= 86) {
    grade = 'A';
  } else if (mark <= 85 && mark >= 73) {
    grade = 'B';
  } else if (mark <= 72 && mark >= 67) {
    grade = 'C+';
  } else if (mark <= 66 && mark >= 60) {
    grade = 'C';
  } else if (mark <= 59 && mark >= 50) {
    grade = 'C-';
  } else if (mark <= 49) {
    grade = 'F';
  }
  console.log(grade);
} else {
  console.log("Invalid grade");
}
