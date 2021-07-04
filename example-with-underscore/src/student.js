import _ from "underscore";

let enrollment = [
  { enrolled: 1, grade: 100 },
  { enrolled: 2, grade: 80 },
  { enrolled: 2, grade: 89 },
];

function avg(arr) {
  return _.reduce(arr, (memo, num) => memo + num, 0) / arr.length;
}

const grades = _.chain(enrollment)
  .filter((student) => student.enrolled > 1)
  .pluck("grade")
  .value();

document.querySelector("#enrollments").innerHTML = JSON.stringify(
  enrollment,
  null,
  2
);
document.querySelector("#average").innerHTML = avg(grades);
