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

const JsPractice = () => {
    let numbers = [1, 2, 3, 4, 5];
    let squaredNumbers = numbers.map(num => num * num);
    console.log(`Squared Numbers: ${squaredNumbers}`);

    let testCases = [
        {
            id: 1,
            title: "Login with valid credentials",
            status: "passed",
            priority: "high"
        },
        {
            id: 2,
            title: "Login with invalid credentials",
            status: "failed",
            priority: "high"
        },
        {
            id: 3,
            title: "Password reset",
            status: "passed",
            priority: "medium"
        }
    ];

    const addTestCase = (id, title, status, priority) => {
        const newTestCase = { id, title, status, priority };
        testCases.push(newTestCase);
    };

    return { testCases, addTestCase };
};

const practice = JsPractice();
practice.addTestCase(4, "User registration", "passed", "medium");

console.log("Test Cases:", practice.testCases);

const passedTestCases = practice.testCases.filter(testCase => testCase.status === "passed");
const failedTestCases = practice.testCases.filter(testCase => testCase.status === "failed");

// console.log("Filtered Test Cases (Passed):", passedTestCases);
// console.log("Filtered Test Cases (Failed):", failedTestCases);
// console.log("Count of Passed Test Cases:", passedTestCases.length);
// console.log("Count of Failed Test Cases:", failedTestCases.length);

let updatedTestCases = practice.testCases.map(testCase => {
    if (testCase.status === "failed") {
        return { ...testCase, status: "passed" };
    }
    return testCase;
});
console.log("Updated Test Cases:", updatedTestCases);