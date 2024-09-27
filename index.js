// 1) defines saturdayFun function declaration as specified
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// 2) defines mondayWork function expression as specified
const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// 3) defines wrapAdjective function according to the specification
function wrapAdjective(wrapper = "*") {
  return function (adjective = "special") {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}

// Test cases

// Testing saturdayFun
console.log(saturdayFun()); // Output: "This Saturday, I want to roller-skate!"
console.log(saturdayFun("go hiking")); // Output: "This Saturday, I want to go hiking!"

// Testing mondayWork
console.log(mondayWork()); // Output: "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // Output: "This Monday, I will work from home."

// Testing wrapAdjective
let highlightWithStars = wrapAdjective("*");
console.log(highlightWithStars("a hard worker")); // Output: "You are *a hard worker*!"

let highlightWithBars = wrapAdjective("||");
console.log(highlightWithBars("amazing")); // Output: "You are ||amazing||!"
