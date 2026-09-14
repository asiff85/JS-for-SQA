console.log("Hello, World!");
let a = 5;
let b = 10;

const sum = (x, y) => console.log(`The sum of ${x} and ${y} is ${x + y}`);
sum(a, b);  

const user = () => ({
    name: "John",
    age: 30,
    city: "New York", sayName: function() {
        console.log(`My name is ${this.name}`);
    }
});
user().sayName();

const JsPractice=() => {
    let numbers = [1, 2, 3, 4, 5];
    let squaredNumbers = numbers.map(num => num * num);
    console.log(`Squared Numbers: ${squaredNumbers}`);
    let testCases=[
        {id: 1,
        title: "Login with valid credentials",
        status: "passed",
        priority: "high"},
        {id: 2,
        title: "Login with invalid credentials",
        status: "failed",
        priority: "high"},
        {id: 3,
        title: "Password reset",
        status: "passed",
        priority: "medium"}
    ];
    return {testCases};
    
}
 console.log("Test Cases:", JsPractice().testCases);

const passedTestCases = JsPractice().testCases.filter(testCase => testCase.status === "passed");
const failedTestCases = JsPractice().testCases.filter(testCase => testCase.status === "failed");

console.log("Filtered Test Cases (Passed):", passedTestCases);
console.log("Filtered Test Cases (Failed):", failedTestCases);
console.log("Count of Passed Test Cases:", passedTestCases.length);
console.log("Count of Passed Test Cases:", failedTestCases.length);
