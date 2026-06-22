import React, { useState, useEffect, useMemo } from 'react';
import { Search, Filter, BookOpen, CheckCircle, Circle, ChevronDown, ChevronUp, Edit3, ExternalLink } from 'lucide-react';
import { roadmapData } from './data/roadmapData';

const themeStyles = {
  cyan: {
    navActive: 'bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]',
    text: 'text-cyan-400',
    bg: 'bg-cyan-500',
    bgLight: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    dayHover: 'hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]',
    textIcon: 'text-cyan-500',
    bgCardAchieve: 'bg-cyan-500/5 border-cyan-500/10',
    dot: 'bg-cyan-500'
  },
  emerald: {
    navActive: 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]',
    text: 'text-emerald-400',
    bg: 'bg-emerald-500',
    bgLight: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    dayHover: 'hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]',
    textIcon: 'text-emerald-500',
    bgCardAchieve: 'bg-emerald-500/5 border-emerald-500/10',
    dot: 'bg-emerald-500'
  },
  purple: {
    navActive: 'bg-purple-500/20 text-purple-300 ring-1 ring-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)]',
    text: 'text-purple-400',
    bg: 'bg-purple-500',
    bgLight: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    dayHover: 'hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.1)]',
    textIcon: 'text-purple-500',
    bgCardAchieve: 'bg-purple-500/5 border-purple-500/10',
    dot: 'bg-purple-500'
  },
  amber: {
    navActive: 'bg-amber-500/20 text-amber-300 ring-1 ring-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]',
    text: 'text-amber-400',
    bg: 'bg-amber-500',
    bgLight: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    dayHover: 'hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)]',
    textIcon: 'text-amber-500',
    bgCardAchieve: 'bg-amber-500/5 border-amber-500/10',
    dot: 'bg-amber-500'
  },
  sky: {
    navActive: 'bg-sky-500/20 text-sky-300 ring-1 ring-sky-500/50 shadow-[0_0_15px_rgba(14,165,233,0.2)]',
    text: 'text-sky-400',
    bg: 'bg-sky-500',
    bgLight: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    dayHover: 'hover:border-sky-500/50 hover:shadow-[0_0_15px_rgba(14,165,233,0.1)]',
    textIcon: 'text-sky-500',
    bgCardAchieve: 'bg-sky-500/5 border-sky-500/10',
    dot: 'bg-sky-500'
  },
  rose: {
    navActive: 'bg-rose-500/20 text-rose-300 ring-1 ring-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.2)]',
    text: 'text-rose-400',
    bg: 'bg-rose-500',
    bgLight: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    dayHover: 'hover:border-rose-500/50 hover:shadow-[0_0_15px_rgba(244,63,94,0.1)]',
    textIcon: 'text-rose-500',
    bgCardAchieve: 'bg-rose-500/5 border-rose-500/10',
    dot: 'bg-rose-500'
  },
  teal: {
    navActive: 'bg-teal-500/20 text-teal-300 ring-1 ring-teal-500/50 shadow-[0_0_15px_rgba(20,184,166,0.2)]',
    text: 'text-teal-400',
    bg: 'bg-teal-500',
    bgLight: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    dayHover: 'hover:border-teal-500/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.1)]',
    textIcon: 'text-teal-500',
    bgCardAchieve: 'bg-teal-500/5 border-teal-500/10',
    dot: 'bg-teal-500'
  }
};

// Short labels for the nav tabs so they all fit without scrolling
const shortLabels = {
  'System Design & Architecture': 'System Design',
  'Spring Boot & Microservices': 'Spring Boot',
  'Gen AI & LLM Engineering': 'Gen AI & LLM',
  'Linux, OS & Databases': 'Linux & DB',
  'DevOps, Cloud & MLOps': 'DevOps & Cloud',
  'Java Core & Advanced': 'Java Core',
  'Master DSA Roadmap': 'DSA'
};

// ─── 50+ FAQ Questions for College Placements ───
const faqQuestions = [
  { id: 'nc-1', category: 'Arrays & Hashing', name: 'Contains Duplicate', link: 'https://leetcode.com/problems/contains-duplicate/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-2', category: 'Arrays & Hashing', name: 'Valid Anagram', link: 'https://leetcode.com/problems/valid-anagram/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-3', category: 'Arrays & Hashing', name: 'Two Sum', link: 'https://leetcode.com/problems/two-sum/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-4', category: 'Arrays & Hashing', name: 'Group Anagrams', link: 'https://leetcode.com/problems/group-anagrams/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-5', category: 'Arrays & Hashing', name: 'Top K Frequent Elements', link: 'https://leetcode.com/problems/top-k-frequent-elements/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-6', category: 'Arrays & Hashing', name: 'Product of Array Except Self', link: 'https://leetcode.com/problems/product-of-array-except-self/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-7', category: 'Arrays & Hashing', name: 'Valid Sudoku', link: 'https://leetcode.com/problems/valid-sudoku/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-8', category: 'Arrays & Hashing', name: 'Longest Consecutive Sequence', link: 'https://leetcode.com/problems/longest-consecutive-sequence/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-9', category: 'Two Pointers', name: 'Valid Palindrome', link: 'https://leetcode.com/problems/valid-palindrome/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-10', category: 'Two Pointers', name: 'Two Sum II', link: 'https://leetcode.com/problems/two-sum-ii/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-11', category: 'Two Pointers', name: '3Sum', link: 'https://leetcode.com/problems/3sum/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-12', category: 'Two Pointers', name: 'Container With Most Water', link: 'https://leetcode.com/problems/container-with-most-water/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-13', category: 'Two Pointers', name: 'Trapping Rain Water', link: 'https://leetcode.com/problems/trapping-rain-water/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-14', category: 'Sliding Window', name: 'Best Time to Buy and Sell Stock', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-15', category: 'Sliding Window', name: 'Longest Substring Without Repeating Characters', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-16', category: 'Sliding Window', name: 'Longest Repeating Character Replacement', link: 'https://leetcode.com/problems/longest-repeating-character-replacement/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-17', category: 'Sliding Window', name: 'Permutation in String', link: 'https://leetcode.com/problems/permutation-in-string/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-18', category: 'Sliding Window', name: 'Minimum Window Substring', link: 'https://leetcode.com/problems/minimum-window-substring/', difficulty: 'Hard', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-19', category: 'Sliding Window', name: 'Sliding Window Maximum', link: 'https://leetcode.com/problems/sliding-window-maximum/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-20', category: 'Stack', name: 'Valid Parentheses', link: 'https://leetcode.com/problems/valid-parentheses/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-21', category: 'Stack', name: 'Min Stack', link: 'https://leetcode.com/problems/min-stack/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-22', category: 'Stack', name: 'Evaluate Reverse Polish Notation', link: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-23', category: 'Stack', name: 'Generate Parentheses', link: 'https://leetcode.com/problems/generate-parentheses/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-24', category: 'Stack', name: 'Daily Temperatures', link: 'https://leetcode.com/problems/daily-temperatures/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-25', category: 'Stack', name: 'Car Fleet', link: 'https://leetcode.com/problems/car-fleet/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-26', category: 'Stack', name: 'Largest Rectangle in Histogram', link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-27', category: 'Binary Search', name: 'Binary Search', link: 'https://leetcode.com/problems/binary-search/', difficulty: 'Easy', source: 'NeetCode 150' },
  { id: 'nc-28', category: 'Binary Search', name: 'Search a 2D Matrix', link: 'https://leetcode.com/problems/search-a-2d-matrix/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-29', category: 'Binary Search', name: 'Koko Eating Bananas', link: 'https://leetcode.com/problems/koko-eating-bananas/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-30', category: 'Binary Search', name: 'Find Minimum in Rotated Sorted Array', link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-31', category: 'Binary Search', name: 'Search in Rotated Sorted Array', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-32', category: 'Binary Search', name: 'Time Based Key-Value Store', link: 'https://leetcode.com/problems/time-based-key-value-store/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-33', category: 'Binary Search', name: 'Median of Two Sorted Arrays', link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-34', category: 'Linked List', name: 'Reverse Linked List', link: 'https://leetcode.com/problems/reverse-linked-list/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-35', category: 'Linked List', name: 'Merge Two Sorted Lists', link: 'https://leetcode.com/problems/merge-two-sorted-lists/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-36', category: 'Linked List', name: 'Linked List Cycle', link: 'https://leetcode.com/problems/linked-list-cycle/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-37', category: 'Linked List', name: 'Reorder List', link: 'https://leetcode.com/problems/reorder-list/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-38', category: 'Linked List', name: 'Remove Nth Node From End of List', link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-39', category: 'Linked List', name: 'Copy List with Random Pointer', link: 'https://leetcode.com/problems/copy-list-with-random-pointer/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-40', category: 'Linked List', name: 'Add Two Numbers', link: 'https://leetcode.com/problems/add-two-numbers/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-41', category: 'Linked List', name: 'Find the Duplicate Number', link: 'https://leetcode.com/problems/find-the-duplicate-number/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-42', category: 'Linked List', name: 'LRU Cache', link: 'https://leetcode.com/problems/lru-cache/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-43', category: 'Linked List', name: 'Merge k Sorted Lists', link: 'https://leetcode.com/problems/merge-k-sorted-lists/', difficulty: 'Hard', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-44', category: 'Linked List', name: 'Reverse Nodes in k-Group', link: 'https://leetcode.com/problems/reverse-nodes-in-k-group/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-45', category: 'Trees', name: 'Invert Binary Tree', link: 'https://leetcode.com/problems/invert-binary-tree/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-46', category: 'Trees', name: 'Maximum Depth of Binary Tree', link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-47', category: 'Trees', name: 'Diameter of Binary Tree', link: 'https://leetcode.com/problems/diameter-of-binary-tree/', difficulty: 'Easy', source: 'NeetCode 150' },
  { id: 'nc-48', category: 'Trees', name: 'Balanced Binary Tree', link: 'https://leetcode.com/problems/balanced-binary-tree/', difficulty: 'Easy', source: 'NeetCode 150' },
  { id: 'nc-49', category: 'Trees', name: 'Same Tree', link: 'https://leetcode.com/problems/same-tree/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-50', category: 'Trees', name: 'Subtree of Another Tree', link: 'https://leetcode.com/problems/subtree-of-another-tree/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-51', category: 'Trees', name: 'Lowest Common Ancestor of a Binary Search Tree', link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-52', category: 'Trees', name: 'Binary Tree Level Order Traversal', link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-53', category: 'Trees', name: 'Binary Tree Right Side View', link: 'https://leetcode.com/problems/binary-tree-right-side-view/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-54', category: 'Trees', name: 'Count Good Nodes in Binary Tree', link: 'https://leetcode.com/problems/count-good-nodes-in-binary-tree/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-55', category: 'Trees', name: 'Validate Binary Search Tree', link: 'https://leetcode.com/problems/validate-binary-search-tree/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-56', category: 'Trees', name: 'Kth Smallest Element in a BST', link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-57', category: 'Trees', name: 'Construct Binary Tree from Preorder and Inorder Traversal', link: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-58', category: 'Trees', name: 'Binary Tree Maximum Path Sum', link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/', difficulty: 'Hard', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-59', category: 'Trees', name: 'Serialize and Deserialize Binary Tree', link: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/', difficulty: 'Hard', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-60', category: 'Tries', name: 'Implement Trie Prefix Tree', link: 'https://leetcode.com/problems/implement-trie-prefix-tree/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-61', category: 'Tries', name: 'Design Add and Search Words Data Structure', link: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-62', category: 'Tries', name: 'Word Search II', link: 'https://leetcode.com/problems/word-search-ii/', difficulty: 'Hard', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-63', category: 'Heap / Priority Queue', name: 'Kth Largest Element in a Stream', link: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/', difficulty: 'Easy', source: 'NeetCode 150' },
  { id: 'nc-64', category: 'Heap / Priority Queue', name: 'Last Stone Weight', link: 'https://leetcode.com/problems/last-stone-weight/', difficulty: 'Easy', source: 'NeetCode 150' },
  { id: 'nc-65', category: 'Heap / Priority Queue', name: 'K Closest Points to Origin', link: 'https://leetcode.com/problems/k-closest-points-to-origin/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-66', category: 'Heap / Priority Queue', name: 'Kth Largest Element in an Array', link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-67', category: 'Heap / Priority Queue', name: 'Task Scheduler', link: 'https://leetcode.com/problems/task-scheduler/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-68', category: 'Heap / Priority Queue', name: 'Design Twitter', link: 'https://leetcode.com/problems/design-twitter/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-69', category: 'Heap / Priority Queue', name: 'Find Median from Data Stream', link: 'https://leetcode.com/problems/find-median-from-data-stream/', difficulty: 'Hard', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-70', category: 'Backtracking', name: 'Subsets', link: 'https://leetcode.com/problems/subsets/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-71', category: 'Backtracking', name: 'Combination Sum', link: 'https://leetcode.com/problems/combination-sum/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-72', category: 'Backtracking', name: 'Permutations', link: 'https://leetcode.com/problems/permutations/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-73', category: 'Backtracking', name: 'Subsets II', link: 'https://leetcode.com/problems/subsets-ii/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-74', category: 'Backtracking', name: 'Combination Sum II', link: 'https://leetcode.com/problems/combination-sum-ii/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-75', category: 'Backtracking', name: 'Word Search', link: 'https://leetcode.com/problems/word-search/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-76', category: 'Backtracking', name: 'Palindrome Partitioning', link: 'https://leetcode.com/problems/palindrome-partitioning/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-77', category: 'Backtracking', name: 'N-Queens', link: 'https://leetcode.com/problems/n-queens/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-78', category: 'Graphs', name: 'Number of Islands', link: 'https://leetcode.com/problems/number-of-islands/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-79', category: 'Graphs', name: 'Max Area of Island', link: 'https://leetcode.com/problems/max-area-of-island/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-80', category: 'Graphs', name: 'Clone Graph', link: 'https://leetcode.com/problems/clone-graph/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-81', category: 'Graphs', name: 'Walls and Gates', link: 'https://leetcode.com/problems/walls-and-gates/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-82', category: 'Graphs', name: 'Rotting Oranges', link: 'https://leetcode.com/problems/rotting-oranges/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-83', category: 'Graphs', name: 'Pacific Atlantic Water Flow', link: 'https://leetcode.com/problems/pacific-atlantic-water-flow/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-84', category: 'Graphs', name: 'Surrounded Regions', link: 'https://leetcode.com/problems/surrounded-regions/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-85', category: 'Graphs', name: 'Course Schedule', link: 'https://leetcode.com/problems/course-schedule/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-86', category: 'Graphs', name: 'Course Schedule II', link: 'https://leetcode.com/problems/course-schedule-ii/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-87', category: 'Graphs', name: 'Redundant Connection', link: 'https://leetcode.com/problems/redundant-connection/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-88', category: 'Graphs', name: 'Graph Valid Tree', link: 'https://neetcode.io/problems/graph-valid-tree', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-89', category: 'Graphs', name: 'Number of Connected Components in an Undirected Graph', link: 'https://neetcode.io/problems/number-of-connected-components-in-an-undirected-graph', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-90', category: 'Graphs', name: 'Word Ladder', link: 'https://leetcode.com/problems/word-ladder/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-91', category: 'Advanced Graphs', name: 'Reconstruct Itinerary', link: 'https://leetcode.com/problems/reconstruct-itinerary/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-92', category: 'Advanced Graphs', name: 'Min Cost to Connect All Points', link: 'https://leetcode.com/problems/min-cost-to-connect-all-points/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-93', category: 'Advanced Graphs', name: 'Network Delay Time', link: 'https://leetcode.com/problems/network-delay-time/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-94', category: 'Advanced Graphs', name: 'Swim in Rising Water', link: 'https://leetcode.com/problems/swim-in-rising-water/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-95', category: 'Advanced Graphs', name: 'Alien Dictionary', link: 'https://neetcode.io/problems/alien-dictionary', difficulty: 'Hard', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-96', category: 'Advanced Graphs', name: 'Cheapest Flights Within K Stops', link: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-97', category: '1-D DP', name: 'Climbing Stairs', link: 'https://leetcode.com/problems/climbing-stairs/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-98', category: '1-D DP', name: 'Min Cost Climbing Stairs', link: 'https://leetcode.com/problems/min-cost-climbing-stairs/', difficulty: 'Easy', source: 'NeetCode 150' },
  { id: 'nc-99', category: '1-D DP', name: 'House Robber', link: 'https://leetcode.com/problems/house-robber/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-100', category: '1-D DP', name: 'House Robber II', link: 'https://leetcode.com/problems/house-robber-ii/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-101', category: '1-D DP', name: 'Longest Palindromic Substring', link: 'https://leetcode.com/problems/longest-palindromic-substring/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-102', category: '1-D DP', name: 'Palindromic Substrings', link: 'https://leetcode.com/problems/palindromic-substrings/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-103', category: '1-D DP', name: 'Decode Ways', link: 'https://leetcode.com/problems/decode-ways/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-104', category: '1-D DP', name: 'Coin Change', link: 'https://leetcode.com/problems/coin-change/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-105', category: '1-D DP', name: 'Maximum Product Subarray', link: 'https://leetcode.com/problems/maximum-product-subarray/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-106', category: '1-D DP', name: 'Word Break', link: 'https://leetcode.com/problems/word-break/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-107', category: '1-D DP', name: 'Longest Increasing Subsequence', link: 'https://leetcode.com/problems/longest-increasing-subsequence/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-108', category: '1-D DP', name: 'Partition Equal Subset Sum', link: 'https://leetcode.com/problems/partition-equal-subset-sum/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-109', category: '2-D DP', name: 'Unique Paths', link: 'https://leetcode.com/problems/unique-paths/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-110', category: '2-D DP', name: 'Longest Common Subsequence', link: 'https://leetcode.com/problems/longest-common-subsequence/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-111', category: '2-D DP', name: 'Best Time to Buy and Sell Stock with Cooldown', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-112', category: '2-D DP', name: 'Coin Change II', link: 'https://leetcode.com/problems/coin-change-ii/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-113', category: '2-D DP', name: 'Target Sum', link: 'https://leetcode.com/problems/target-sum/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-114', category: '2-D DP', name: 'Interleaving String', link: 'https://leetcode.com/problems/interleaving-string/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-115', category: '2-D DP', name: 'Longest Increasing Path in a Matrix', link: 'https://leetcode.com/problems/longest-increasing-path-in-a-matrix/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-116', category: '2-D DP', name: 'Distinct Subsequences', link: 'https://leetcode.com/problems/distinct-subsequences/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-117', category: '2-D DP', name: 'Edit Distance', link: 'https://leetcode.com/problems/edit-distance/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-118', category: '2-D DP', name: 'Burst Balloons', link: 'https://leetcode.com/problems/burst-balloons/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-119', category: '2-D DP', name: 'Regular Expression Matching', link: 'https://leetcode.com/problems/regular-expression-matching/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-120', category: 'Greedy', name: 'Maximum Subarray', link: 'https://leetcode.com/problems/maximum-subarray/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-121', category: 'Greedy', name: 'Jump Game', link: 'https://leetcode.com/problems/jump-game/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-122', category: 'Greedy', name: 'Jump Game II', link: 'https://leetcode.com/problems/jump-game-ii/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-123', category: 'Greedy', name: 'Gas Station', link: 'https://leetcode.com/problems/gas-station/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-124', category: 'Greedy', name: 'Hand of Straights', link: 'https://leetcode.com/problems/hand-of-straights/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-125', category: 'Greedy', name: 'Merge Triplets to Form Target Triplet', link: 'https://leetcode.com/problems/merge-triplets-to-form-target-triplet/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-126', category: 'Greedy', name: 'Partition Labels', link: 'https://leetcode.com/problems/partition-labels/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-127', category: 'Greedy', name: 'Valid Parenthesis String', link: 'https://leetcode.com/problems/valid-parenthesis-string/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-128', category: 'Intervals', name: 'Meeting Rooms', link: 'https://neetcode.io/problems/meeting-rooms', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-129', category: 'Intervals', name: 'Insert Interval', link: 'https://leetcode.com/problems/insert-interval/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-130', category: 'Intervals', name: 'Merge Intervals', link: 'https://leetcode.com/problems/merge-intervals/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-131', category: 'Intervals', name: 'Non-Overlapping Intervals', link: 'https://leetcode.com/problems/non-overlapping-intervals/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-132', category: 'Intervals', name: 'Meeting Rooms II', link: 'https://neetcode.io/problems/meeting-rooms-ii', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-133', category: 'Intervals', name: 'Minimum Interval to Include Each Query', link: 'https://leetcode.com/problems/minimum-interval-to-include-each-query/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-134', category: 'Math & Geometry', name: 'Happy Number', link: 'https://leetcode.com/problems/happy-number/', difficulty: 'Easy', source: 'NeetCode 150' },
  { id: 'nc-135', category: 'Math & Geometry', name: 'Plus One', link: 'https://leetcode.com/problems/plus-one/', difficulty: 'Easy', source: 'NeetCode 150' },
  { id: 'nc-136', category: 'Math & Geometry', name: 'Rotate Image', link: 'https://leetcode.com/problems/rotate-image/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-137', category: 'Math & Geometry', name: 'Spiral Matrix', link: 'https://leetcode.com/problems/spiral-matrix/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-138', category: 'Math & Geometry', name: 'Set Matrix Zeroes', link: 'https://leetcode.com/problems/set-matrix-zeroes/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-139', category: 'Math & Geometry', name: 'Pow(x n)', link: 'https://leetcode.com/problems/powx-n/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-140', category: 'Math & Geometry', name: 'Multiply Strings', link: 'https://leetcode.com/problems/multiply-strings/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-141', category: 'Math & Geometry', name: 'Detect Squares', link: 'https://leetcode.com/problems/detect-squares/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-142', category: 'Bit Manipulation', name: 'Single Number', link: 'https://leetcode.com/problems/single-number/', difficulty: 'Easy', source: 'NeetCode 150' },
  { id: 'nc-143', category: 'Bit Manipulation', name: 'Number of 1 Bits', link: 'https://leetcode.com/problems/number-of-1-bits/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-144', category: 'Bit Manipulation', name: 'Counting Bits', link: 'https://leetcode.com/problems/counting-bits/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-145', category: 'Bit Manipulation', name: 'Reverse Bits', link: 'https://leetcode.com/problems/reverse-bits/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-146', category: 'Bit Manipulation', name: 'Missing Number', link: 'https://leetcode.com/problems/missing-number/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-147', category: 'Bit Manipulation', name: 'Sum of Two Integers', link: 'https://leetcode.com/problems/sum-of-two-integers/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-148', category: 'Bit Manipulation', name: 'Reverse Integer', link: 'https://leetcode.com/problems/reverse-integer/', difficulty: 'Medium', source: 'NeetCode 150' },
];


function App() {
  const [activeRoadmap, setActiveRoadmap] = useState(1);
  const [completedTasks, setCompletedTasks] = useState(() => {
    const saved = localStorage.getItem('roadmap_completed_tasks');
    return saved ? JSON.parse(saved) : {};
  });
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('roadmap_notes');
    return saved ? JSON.parse(saved) : {};
  });
  const [faqCompleted, setFaqCompleted] = useState(() => {
    const saved = localStorage.getItem('roadmap_faq_completed');
    return saved ? JSON.parse(saved) : {};
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [filterPriority, setFilterPriority] = useState('ALL');
  const [filterStatus, setFilterStatus] = useState('ALL');

  useEffect(() => {
    localStorage.setItem('roadmap_completed_tasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  useEffect(() => {
    localStorage.setItem('roadmap_notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('roadmap_faq_completed', JSON.stringify(faqCompleted));
  }, [faqCompleted]);

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const toggleFaq = (faqId) => {
    setFaqCompleted(prev => ({
      ...prev,
      [faqId]: !prev[faqId]
    }));
  };

  const updateNote = (taskId, text) => {
    setNotes(prev => ({
      ...prev,
      [taskId]: text
    }));
  };

  // Compute Global Progress
  const globalProgress = useMemo(() => {
    let total = 0;
    let completed = 0;
    roadmapData.forEach(roadmap => {
      roadmap.phases.forEach(phase => {
        phase.items.forEach(item => {
          total++;
          if (completedTasks[`${roadmap.id}-${phase.id}-${item.day}`]) {
            completed++;
          }
        });
      });
    });
    return { total, completed, percentage: total === 0 ? 0 : Math.round((completed / total) * 100) };
  }, [completedTasks]);

  // Compute Active Roadmap Progress
  const activeProgress = useMemo(() => {
    let total = 0;
    let completed = 0;
    const roadmap = roadmapData.find(r => r.id === activeRoadmap);
    if (roadmap) {
      roadmap.phases.forEach(phase => {
        phase.items.forEach(item => {
          total++;
          if (completedTasks[`${roadmap.id}-${phase.id}-${item.day}`]) {
            completed++;
          }
        });
      });
    }
    return { total, completed, percentage: total === 0 ? 0 : Math.round((completed / total) * 100) };
  }, [activeRoadmap, completedTasks]);

  // FAQ progress
  const faqProgress = useMemo(() => {
    const total = faqQuestions.length;
    const completed = faqQuestions.filter(q => faqCompleted[q.id]).length;
    return { total, completed, percentage: total === 0 ? 0 : Math.round((completed / total) * 100) };
  }, [faqCompleted]);

  const currentRoadmap = roadmapData.find(r => r.id === activeRoadmap);
  const currentStyles = themeStyles[currentRoadmap.color] || themeStyles.indigo;

  // Check if the current roadmap is DSA (id 7) to show FAQ section
  const isDSA = currentRoadmap.id === 7;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans pb-20">
      {/* Header & Global Progress */}
      <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-500/20 rounded-lg">
                <BookOpen className="w-6 h-6 text-indigo-400" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-zinc-100">{globalProgress.total}-Day Master Roadmap</h1>
            </div>
            
            <div className="w-full md:w-1/3">
              <div className="flex justify-between text-xs font-medium text-zinc-400 mb-1">
                <span>Global Progress</span>
                <span>{globalProgress.percentage}% ({globalProgress.completed}/{globalProgress.total})</span>
              </div>
              <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                  style={{ width: `${globalProgress.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs — smaller text, flex-wrap so they fit */}
          <nav className="flex flex-wrap gap-1.5 mt-5 pb-1">
            {roadmapData.map(roadmap => {
              const styles = themeStyles[roadmap.color] || themeStyles.indigo;
              const label = shortLabels[roadmap.title] || roadmap.title;
              return (
                <button
                  key={roadmap.id}
                  onClick={() => setActiveRoadmap(roadmap.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    activeRoadmap === roadmap.id 
                      ? styles.navActive
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${styles.dot}`}></span>
                  {label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Controls: Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-zinc-900 rounded-xl border border-zinc-800">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Search concepts, tools, or skills..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-2 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>
          <div className="flex gap-2">
            <select 
              value={filterPriority}
              onChange={e => setFilterPriority(e.target.value)}
              className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            >
              <option value="ALL">All Priorities</option>
              <option value="MUST KNOW">Must Know</option>
              <option value="IMPORTANT">Important</option>
              <option value="GOOD TO KNOW">Good to Know</option>
            </select>
            <select 
              value={filterStatus}
              onChange={e => setFilterStatus(e.target.value)}
              className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            >
              <option value="ALL">All Status</option>
              <option value="INCOMPLETE">Incomplete</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>
        </div>

        {/* Roadmap Active Header */}
        <div className="mb-8">
          <h2 className={`text-3xl font-bold mb-2 ${currentStyles.text}`}>{currentRoadmap.title}</h2>
          <div className="flex items-center gap-4">
            <span className="text-zinc-500">{currentRoadmap.days} Days Total</span>
            <div className="h-1.5 flex-1 max-w-md bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 ${currentStyles.bg}`}
                style={{ width: `${activeProgress.percentage}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-zinc-400">{activeProgress.percentage}%</span>
          </div>
        </div>

        {/* Phases & Days */}
        <div className="space-y-12">
          {currentRoadmap.phases.map(phase => {
            // Skip FAQ phase — we render it separately below
            if (phase.title.includes('FREQUENTLY ASKED')) return null;

            // Filter items in this phase
            const filteredItems = phase.items.filter(item => {
              const matchesSearch = item.topic.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                    item.tasks.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                    item.achievement.toLowerCase().includes(searchQuery.toLowerCase());
              const matchesPriority = filterPriority === 'ALL' || item.priority === filterPriority;
              const isCompleted = completedTasks[`${currentRoadmap.id}-${phase.id}-${item.day}`];
              const matchesStatus = filterStatus === 'ALL' || 
                                   (filterStatus === 'COMPLETED' && isCompleted) || 
                                   (filterStatus === 'INCOMPLETE' && !isCompleted);
              
              return matchesSearch && matchesPriority && matchesStatus;
            });

            if (filteredItems.length === 0) return null;

            return (
              <div key={phase.id} className="relative">
                {/* Phase Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`px-3 py-1 rounded text-xs font-bold tracking-wider border ${currentStyles.bgLight}`}>
                    {phase.days}
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-100">{phase.title}</h3>
                  <div className="flex-1 h-px bg-zinc-800"></div>
                </div>

                {/* Day Items Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {filteredItems.map(item => {
                    const taskId = `${currentRoadmap.id}-${phase.id}-${item.day}`;
                    const isCompleted = !!completedTasks[taskId];
                    const noteText = notes[taskId] || '';

                    return (
                      <DayCard 
                        key={taskId}
                        item={item} 
                        isCompleted={isCompleted} 
                        onToggle={() => toggleTask(taskId)}
                        styles={currentStyles}
                        noteText={noteText}
                        onUpdateNote={(text) => updateNote(taskId, text)}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── FAQ Checklist Section (only for DSA roadmap) ─── */}
        {isDSA && (
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-6">
              <div className={`px-3 py-1 rounded text-xs font-bold tracking-wider border ${currentStyles.bgLight}`}>
                Day 389
              </div>
              <h3 className="text-xl font-semibold text-zinc-100">🔥 Blind 75 & NeetCode 150 (Complete Checklist)</h3>
              <div className="flex-1 h-px bg-zinc-800"></div>
            </div>
            
            {/* FAQ Progress Bar */}
            <div className="mb-6 p-4 bg-zinc-900 rounded-xl border border-zinc-800">
              <div className="flex justify-between text-sm font-medium text-zinc-400 mb-2">
                <span>Questions Solved</span>
                <span className={faqProgress.percentage === 100 ? 'text-emerald-400' : ''}>{faqProgress.completed}/{faqProgress.total} ({faqProgress.percentage}%)</span>
              </div>
              <div className="h-2.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 ${currentStyles.bg}`}
                  style={{ width: `${faqProgress.percentage}%` }}
                ></div>
              </div>
            </div>

            {/* FAQ Questions grouped by category */}
            <FaqChecklist 
              questions={faqQuestions} 
              completed={faqCompleted} 
              onToggle={toggleFaq} 
              styles={currentStyles}
            />
          </div>
        )}

      </main>
    </div>
  );
}

// ─── FAQ Checklist Component ───
function FaqChecklist({ questions, completed, onToggle, styles }) {
  // Group by category
  const categories = {};
  questions.forEach(q => {
    if (!categories[q.category]) categories[q.category] = [];
    categories[q.category].push(q);
  });

  const diffColors = {
    'Easy': 'text-emerald-400 bg-emerald-400/10',
    'Medium': 'text-amber-400 bg-amber-400/10',
    'Hard': 'text-red-400 bg-red-400/10',
  };

  return (
    <div className="space-y-6">
      {Object.entries(categories).map(([cat, qs]) => {
        const catCompleted = qs.filter(q => completed[q.id]).length;
        return (
          <div key={cat} className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
            {/* Category Header */}
            <div className="flex items-center justify-between px-5 py-3 bg-zinc-800/50 border-b border-zinc-800">
              <h4 className="text-sm font-bold text-zinc-100">{cat}</h4>
              <span className="text-xs text-zinc-400">{catCompleted}/{qs.length} solved</span>
            </div>
            {/* Question Rows */}
            <div className="divide-y divide-zinc-800/60">
              {qs.map((q, idx) => {
                const done = !!completed[q.id];
                return (
                  <div key={q.id} className={`flex items-center gap-3 px-5 py-3 transition-all ${done ? 'opacity-50' : 'hover:bg-zinc-800/30'}`}>
                    {/* Checkbox */}
                    <button onClick={() => onToggle(q.id)} className="flex-shrink-0 focus:outline-none">
                      {done ? (
                        <CheckCircle className={`w-5 h-5 ${styles.textIcon}`} />
                      ) : (
                        <Circle className="w-5 h-5 text-zinc-600 hover:text-zinc-400 transition-colors" />
                      )}
                    </button>
                    {/* Number */}
                    <span className="text-xs text-zinc-500 w-6 text-right">{idx + 1}.</span>
                    {/* Name */}
                    <span className={`flex-1 text-sm font-medium ${done ? 'line-through text-zinc-500' : 'text-zinc-200'}`}>
                      {q.name}
                    </span>
                    {/* Difficulty Badge */}
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider ${diffColors[q.difficulty] || ''}`}>
                      {q.difficulty.toUpperCase()}
                    </span>
                    {/* Link */}
                    <a href={q.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Sub-component for individual days
function DayCard({ item, isCompleted, onToggle, styles, noteText, onUpdateNote }) {
  const [notesOpen, setNotesOpen] = useState(false);

  // Priority color mapping
  const priorityColors = {
    'MUST KNOW': 'text-red-400 bg-red-400/10 ring-red-400/20',
    'IMPORTANT': 'text-amber-400 bg-amber-400/10 ring-amber-400/20',
    'GOOD TO KNOW': 'text-blue-400 bg-blue-400/10 ring-blue-400/20',
    'NICE TO HAVE': 'text-sky-400 bg-sky-400/10 ring-sky-400/20',
  };

  return (
    <div className={`flex flex-col p-5 rounded-xl border transition-all duration-300 ${
      isCompleted 
        ? 'bg-zinc-900/50 border-zinc-800/50 opacity-60' 
        : `bg-zinc-900 border-zinc-800 ${styles.dayHover}`
    }`}>
      
      <div className="flex items-start gap-4">
        {/* Checkbox */}
        <button 
          onClick={onToggle}
          className="mt-1 flex-shrink-0 focus:outline-none"
        >
          {isCompleted ? (
            <CheckCircle className={`w-6 h-6 ${styles.textIcon}`} />
          ) : (
            <Circle className="w-6 h-6 text-zinc-600 hover:text-zinc-400 transition-colors" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="text-sm font-medium text-zinc-500">Day {item.day}</span>
            <h4 className={`text-lg font-bold truncate ${isCompleted ? 'line-through text-zinc-500' : 'text-zinc-100'}`}>
              {item.topic}
            </h4>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider ring-1 ${priorityColors[item.priority] || priorityColors['IMPORTANT']}`}>
              {item.priority}
            </span>
          </div>

          <div className="space-y-3">
            <div>
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-1">What to do</span>
              <p className="text-sm text-zinc-300 leading-relaxed">{item.tasks}</p>
            </div>
            
            <div className={`p-3 rounded-lg border ${isCompleted ? 'bg-zinc-950/50 border-zinc-800/50' : styles.bgCardAchieve}`}>
              <span className={`text-xs font-semibold uppercase tracking-wider block mb-1 ${isCompleted ? 'text-zinc-500' : styles.text}`}>Achievement</span>
              <p className={`text-sm ${isCompleted ? 'text-zinc-400' : 'text-zinc-200'}`}>{item.achievement}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Toggle */}
      <div className="mt-4 pt-4 border-t border-zinc-800/50 flex flex-col">
        <button 
          onClick={() => setNotesOpen(!notesOpen)}
          className="flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors self-start"
        >
          <Edit3 className="w-3.5 h-3.5" />
          {notesOpen ? 'Close Notes' : noteText ? 'Edit Notes' : 'Add Notes'}
          {notesOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {/* Notes Area */}
        {notesOpen && (
          <div className="mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <textarea
              value={noteText}
              onChange={(e) => onUpdateNote(e.target.value)}
              placeholder="Jot down key takeaways, markdown notes, or useful links..."
              className="w-full h-24 bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-600 resize-y"
            />
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
