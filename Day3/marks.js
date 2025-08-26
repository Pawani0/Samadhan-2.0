function calculateMarks(marks) {
  let total = 0;

  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }

  let average = total / marks.length;
  let grade = "";

  if (average >= 90) grade = "A+";
  else if (average >= 75) grade = "A";
  else if (average >= 60) grade = "B";
  else if (average >= 40) grade = "C";
  else grade = "Fail";

  return {
    total: total,
    average: average.toFixed(2),
    grade: grade
  };
}

let studentMarks = [85, 78, 92];
let result = calculateMarks(studentMarks);

console.log("Total Marks:", result.total);
console.log("Average:", result.average);
console.log("Grade:", result.grade);
