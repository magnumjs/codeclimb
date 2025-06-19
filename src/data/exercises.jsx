const exercises = [
  {
    name: "Two Sum",
    description: (
      <>
        Write a function <code>twoSum(nums, target)</code> that returns indices
        of the two numbers such that they add up to target.
      </>
    ),
    starterCode: `function twoSum(nums, target) {
  // Your code here
}`,
    tests: [
      { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { input: [[3, 2, 4], 6], expected: [1, 2] },
      { input: [[3, 3], 6], expected: [0, 1] },
    ],
    functionName: "twoSum",
  },
  {
    name: "Reverse String",
    description: (
      <>
        Write a function <code>reverseString(s)</code> that returns the reversed
        string.<br />
        <b>Example:</b> <code>reverseString("hello")</code> should return
        <code>"olleh"</code>
      </>
    ),
    starterCode: `function reverseString(s) {
  // Your code here
}`,
    tests: [
      { input: ["hello"], expected: "olleh" },
      { input: ["LeetCode"], expected: "edoCteeL" },
      { input: [""], expected: "" },
    ],
    functionName: "reverseString",
  },
  {
  name: "Valid Parentheses",
  description: (
    <>
      Write a function <code>isValid(s)</code> that determines if the input string of brackets is valid.
      A string is valid if open brackets are closed by the same type of brackets and in the correct order.
    </>
  ),
  starterCode: `function isValid(s) {
  // Your code here
}`,
  tests: [
    { input: ["()"], expected: true },
    { input: ["()[]{}"], expected: true },
    { input: ["(]"], expected: false },
    { input: ["([)]"], expected: false },
    { input: ["{[]}"], expected: true },
  ],
  functionName: "isValid",
},
{
  name: "Longest Substring Without Repeating Characters",
  description: (
    <>
      Write a function <code>lengthOfLongestSubstring(s)</code> that finds the length of the longest substring 
      without repeating characters.
      <br />
      <b>Example:</b> <code>lengthOfLongestSubstring("abcabcbb")</code> should return <code>3</code> because the longest substring without repeating characters is "abc".
    </>
  ),
  starterCode: `function lengthOfLongestSubstring(s) {
  // Your code here
}`,
  tests: [
    { input: ["abcabcbb"], expected: 3 },
    { input: ["bbbbb"], expected: 1 },
    { input: ["pwwkew"], expected: 3 },
    { input: [""], expected: 0 },
    { input: [" "], expected: 1 },
  ],
  functionName: "lengthOfLongestSubstring",
},
  {
    name: "Merge Two Sorted Lists",
    description: (
      <>
        Write a function <code>mergeTwoLists(l1, l2)</code> that merges two sorted linked lists and returns it as a new sorted list.
      </>
    ),
    starterCode: `function mergeTwoLists(l1, l2) {
  // Your code here
}`,
    tests: [
      { input: [[1, 2, 4], [1, 3, 4]], expected: [1, 1, 2, 3, 4, 4] },
      { input: [[], []], expected: [] },
      { input: [[0], [0]], expected: [0, 0] },
    ],
    functionName: "mergeTwoLists",
  },
  
];

export default exercises;