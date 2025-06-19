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
      { input: [[1, 5, 3, 7], 8], expected: [0, 3] },
      { input: [[0, 4, 3, 0], 0], expected: [0, 3] }
    ],
    functionName: "twoSum",
    difficulty: "easy",
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
      { input: ["a"], expected: "a" },
      { input: ["ab"], expected: "ba" }
    ],
    functionName: "reverseString",
    difficulty: "easy",
  },
  {
  name: "Best Time to Buy and Sell Stock",
  description: (
    <>
      You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.
      <br />
      You want to maximize your profit by choosing a **single day to buy one stock** and choosing a **different day in the future to sell that stock**.
      <br />
      Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return <code>0</code>.
      <br /><br />
      <b>Example:</b><br />
      <code>maxProfit([7,1,5,3,6,4])</code> returns <code>5</code> (buy at 1, sell at 6)
    </>
  ),
  starterCode: `function maxProfit(prices) {
  // Your code here
}`,
  tests: [
    { input: [[7, 1, 5, 3, 6, 4]], expected: 5 },
    { input: [[7, 6, 4, 3, 1]], expected: 0 },
    { input: [[1, 2, 4, 2, 5, 7, 2, 4, 9, 0]], expected: 8 },
    { input: [[2, 1, 2, 1, 0, 1, 2]], expected: 2 },
    { input: [[2, 4, 1]], expected: 2 }
  ],
  functionName: "maxProfit",
  difficulty: "easy"
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
    { input: ["(((())))"], expected: true },
    { input: ["((((((("], expected: false }
  ],
  functionName: "isValid",
  difficulty: "easy",
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
    { input: ["dvdf"], expected: 3 },
    { input: ["anviaj"], expected: 5 }
  ],
  functionName: "lengthOfLongestSubstring",
  difficulty: "medium",
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
      { input: [[2, 5, 7], [1, 3, 6]], expected: [1, 2, 3, 5, 6, 7] },
      { input: [[1], []], expected: [1] }
    ],
    functionName: "mergeTwoLists",
    difficulty: "medium",
  },
  {
    name: "Group Anagrams",
    description: (
      <>
        Write a function <code>groupAnagrams(strs)</code> that groups an array of strings into anagrams.
        <br />
        <b>Example:</b> <code>groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])</code> should return <br />
        <code>[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]</code>
        <br />
        The order of the output and inner arrays does not matter.
      </>
    ),
    starterCode: `function groupAnagrams(strs) {
  // Your code here
}`,
    tests: [
      { input: [["eat", "tea", "tan", "ate", "nat", "bat"]], expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]] },
      { input: [[""]], expected: [[""]] },
      { input: [["a"]], expected: [["a"]] },
      { input: [["abc", "cab", "bca", "xyz", "yxz", "zxy", "foo", "ofo"]], expected: [["abc", "cab", "bca"], ["xyz", "yxz", "zxy"], ["foo", "ofo"]] },
      { input: [["listen", "silent", "enlist", "google", "goleog"]], expected: [["listen", "silent", "enlist"], ["google", "goleog"]] },
      { input: [["", "", ""]], expected: [["", "", ""]] },
      { input: [["abc", "def", "ghi"]], expected: [["abc"], ["def"], ["ghi"]] }
    ],
    functionName: "groupAnagrams",
    difficulty: "medium",
  },
  {
  name: "Maximum Subarray",
  description: (
    <>
      Given an integer array <code>nums</code>, find the contiguous subarray (containing at least one number) 
      which has the largest sum and return its sum.
      <br />
      <br />
      <b>Example:</b><br />
      <code>maxSubArray([-2,1,-3,4,-1,2,1,-5,4])</code> returns <code>6</code> because [4,-1,2,1] has the largest sum = 6.
    </>
  ),
  starterCode: `function maxSubArray(nums) {
  // Your code here
}`,
  tests: [
    { input: [[-2,1,-3,4,-1,2,1,-5,4]], expected: 6 },
    { input: [[1]], expected: 1 },
    { input: [[5,4,-1,7,8]], expected: 23 },
    { input: [[-1,-2,-3]], expected: -1 },
    { input: [[1,2,3,4]], expected: 10 },
    { input: [[-2,-1]], expected: -1 }
  ],
  functionName: "maxSubArray",
  difficulty: "medium"
},
{
  name: "Max Subarray Sum With One Deletion",
  description: (
    <>
      Given an array of integers <code>arr</code>, return the maximum sum of a subarray, 
      with the option to **delete at most one element**.
      <br />
      <br />
      <b>Note:</b> The subarray must be **non-empty** and can’t be empty after the deletion.
      <br />
      <b>Example:</b><br />
      <code>maximumSum([1, -2, 0, 3])</code> returns <code>4</code><br />
      Delete -2 to get [1, 0, 3], sum = 4.
    </>
  ),
  starterCode: `function maximumSum(arr) {
  // Your code here
}`,
  tests: [
    { input: [[1, -2, 0, 3]], expected: 4 },
    { input: [[1, -2, -2, 3]], expected: 3 },
    { input: [[-1, -1, -1, -1]], expected: -1 },
    { input: [[1, -1, 5, -3, 4]], expected: 8 },
    { input: [[2, 1, -2, 3, -5, 2]], expected: 6 },
    { input: [[1]], expected: 1 }
  ],
  functionName: "maximumSum",
  difficulty: "hard"
}
  
];

export default exercises;