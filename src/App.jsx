import { useState, useEffect, useMemo, useRef } from 'react';
import { Search, BookOpen, CheckCircle, Circle, ChevronDown, ChevronUp, Edit3, ExternalLink, RefreshCw, Copy, Check, Clock, Settings, Lock, Calendar } from 'lucide-react';
import { roadmapData } from './data/roadmapData';
import { db, isFirebaseConfigured } from './firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

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
  { id: 'nc-1', category: 'Arrays & Hashing', name: 'Contains Duplicate', link: 'https://leetcode.com/problems/contains-duplicate/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-2', category: 'Arrays & Hashing', name: 'Valid Anagram', link: 'https://leetcode.com/problems/valid-anagram/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-3', category: 'Arrays & Hashing', name: 'Two Sum', link: 'https://leetcode.com/problems/two-sum/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150 & Top 60 & Striver A2Z' },
  { id: 'nc-4', category: 'Arrays & Hashing', name: 'Group Anagrams', link: 'https://leetcode.com/problems/group-anagrams/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-5', category: 'Arrays & Hashing', name: 'Top K Frequent Elements', link: 'https://leetcode.com/problems/top-k-frequent-elements/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-6', category: 'Arrays & Hashing', name: 'Encode and Decode Strings', link: 'https://neetcode.io/problems/encode-and-decode-strings', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-7', category: 'Arrays & Hashing', name: 'Product of Array Except Self', link: 'https://leetcode.com/problems/product-of-array-except-self/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-8', category: 'Arrays & Hashing', name: 'Valid Sudoku', link: 'https://leetcode.com/problems/valid-sudoku/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-9', category: 'Arrays & Hashing', name: 'Longest Consecutive Sequence', link: 'https://leetcode.com/problems/longest-consecutive-sequence/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Striver A2Z' },
  { id: 'nc-10', category: 'Two Pointers', name: 'Valid Palindrome', link: 'https://leetcode.com/problems/valid-palindrome/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-11', category: 'Two Pointers', name: 'Two Sum II', link: 'https://leetcode.com/problems/two-sum-ii/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-12', category: 'Two Pointers', name: '3Sum', link: 'https://leetcode.com/problems/3sum/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-13', category: 'Two Pointers', name: 'Container With Most Water', link: 'https://leetcode.com/problems/container-with-most-water/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-14', category: 'Two Pointers', name: 'Trapping Rain Water', link: 'https://leetcode.com/problems/trapping-rain-water/', difficulty: 'Hard', source: 'NeetCode 150 & Top 60' },
  { id: 'nc-15', category: 'Sliding Window', name: 'Best Time to Buy and Sell Stock', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150 & Top 60 & Striver A2Z' },
  { id: 'nc-16', category: 'Sliding Window', name: 'Longest Substring Without Repeating Characters', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60 & Striver A2Z' },
  { id: 'nc-17', category: 'Sliding Window', name: 'Longest Repeating Character Replacement', link: 'https://leetcode.com/problems/longest-repeating-character-replacement/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-18', category: 'Sliding Window', name: 'Permutation in String', link: 'https://leetcode.com/problems/permutation-in-string/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-19', category: 'Sliding Window', name: 'Minimum Window Substring', link: 'https://leetcode.com/problems/minimum-window-substring/', difficulty: 'Hard', source: 'Blind 75 & NeetCode 150 & Striver A2Z' },
  { id: 'nc-20', category: 'Sliding Window', name: 'Sliding Window Maximum', link: 'https://leetcode.com/problems/sliding-window-maximum/', difficulty: 'Hard', source: 'NeetCode 150 & Top 60' },
  { id: 'nc-21', category: 'Stack', name: 'Valid Parentheses', link: 'https://leetcode.com/problems/valid-parentheses/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-22', category: 'Stack', name: 'Min Stack', link: 'https://leetcode.com/problems/min-stack/', difficulty: 'Medium', source: 'NeetCode 150 & Top 60' },
  { id: 'nc-23', category: 'Stack', name: 'Evaluate Reverse Polish Notation', link: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/', difficulty: 'Medium', source: 'NeetCode 150 & Top 60' },
  { id: 'nc-24', category: 'Stack', name: 'Generate Parentheses', link: 'https://leetcode.com/problems/generate-parentheses/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-25', category: 'Stack', name: 'Daily Temperatures', link: 'https://leetcode.com/problems/daily-temperatures/', difficulty: 'Medium', source: 'NeetCode 150 & Top 60' },
  { id: 'nc-26', category: 'Stack', name: 'Car Fleet', link: 'https://leetcode.com/problems/car-fleet/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-27', category: 'Stack', name: 'Largest Rectangle in Histogram', link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/', difficulty: 'Hard', source: 'NeetCode 150 & Top 60' },
  { id: 'nc-28', category: 'Binary Search', name: 'Binary Search', link: 'https://leetcode.com/problems/binary-search/', difficulty: 'Easy', source: 'NeetCode 150 & Top 60' },
  { id: 'nc-29', category: 'Binary Search', name: 'Search a 2D Matrix', link: 'https://leetcode.com/problems/search-a-2d-matrix/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-30', category: 'Binary Search', name: 'Koko Eating Bananas', link: 'https://leetcode.com/problems/koko-eating-bananas/', difficulty: 'Medium', source: 'NeetCode 150 & Top 60' },
  { id: 'nc-31', category: 'Binary Search', name: 'Find Minimum in Rotated Sorted Array', link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-32', category: 'Binary Search', name: 'Search in Rotated Sorted Array', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-33', category: 'Binary Search', name: 'Time Based Key-Value Store', link: 'https://leetcode.com/problems/time-based-key-value-store/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-34', category: 'Binary Search', name: 'Median of Two Sorted Arrays', link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', difficulty: 'Hard', source: 'NeetCode 150 & Top 60' },
  { id: 'nc-35', category: 'Linked List', name: 'Reverse Linked List', link: 'https://leetcode.com/problems/reverse-linked-list/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-36', category: 'Linked List', name: 'Merge Two Sorted Lists', link: 'https://leetcode.com/problems/merge-two-sorted-lists/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-37', category: 'Linked List', name: 'Linked List Cycle', link: 'https://leetcode.com/problems/linked-list-cycle/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-38', category: 'Linked List', name: 'Reorder List', link: 'https://leetcode.com/problems/reorder-list/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-39', category: 'Linked List', name: 'Remove Nth Node From End of List', link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-40', category: 'Linked List', name: 'Copy List with Random Pointer', link: 'https://leetcode.com/problems/copy-list-with-random-pointer/', difficulty: 'Medium', source: 'NeetCode 150 & Top 60' },
  { id: 'nc-41', category: 'Linked List', name: 'Add Two Numbers', link: 'https://leetcode.com/problems/add-two-numbers/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-42', category: 'Linked List', name: 'Find the Duplicate Number', link: 'https://leetcode.com/problems/find-the-duplicate-number/', difficulty: 'Medium', source: 'NeetCode 150 & Striver A2Z' },
  { id: 'nc-43', category: 'Linked List', name: 'LRU Cache', link: 'https://leetcode.com/problems/lru-cache/', difficulty: 'Medium', source: 'NeetCode 150 & Top 60' },
  { id: 'nc-44', category: 'Linked List', name: 'Merge k Sorted Lists', link: 'https://leetcode.com/problems/merge-k-sorted-lists/', difficulty: 'Hard', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-45', category: 'Linked List', name: 'Reverse Nodes in k-Group', link: 'https://leetcode.com/problems/reverse-nodes-in-k-group/', difficulty: 'Hard', source: 'NeetCode 150 & Striver A2Z' },
  { id: 'nc-46', category: 'Trees', name: 'Invert Binary Tree', link: 'https://leetcode.com/problems/invert-binary-tree/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-47', category: 'Trees', name: 'Maximum Depth of Binary Tree', link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-48', category: 'Trees', name: 'Diameter of Binary Tree', link: 'https://leetcode.com/problems/diameter-of-binary-tree/', difficulty: 'Easy', source: 'NeetCode 150 & Top 60' },
  { id: 'nc-49', category: 'Trees', name: 'Balanced Binary Tree', link: 'https://leetcode.com/problems/balanced-binary-tree/', difficulty: 'Easy', source: 'NeetCode 150' },
  { id: 'nc-50', category: 'Trees', name: 'Same Tree', link: 'https://leetcode.com/problems/same-tree/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-51', category: 'Trees', name: 'Subtree of Another Tree', link: 'https://leetcode.com/problems/subtree-of-another-tree/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-52', category: 'Trees', name: 'Lowest Common Ancestor of a Binary Search Tree', link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-53', category: 'Trees', name: 'Binary Tree Level Order Traversal', link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-54', category: 'Trees', name: 'Binary Tree Right Side View', link: 'https://leetcode.com/problems/binary-tree-right-side-view/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-55', category: 'Trees', name: 'Count Good Nodes in Binary Tree', link: 'https://leetcode.com/problems/count-good-nodes-in-binary-tree/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-56', category: 'Trees', name: 'Validate Binary Search Tree', link: 'https://leetcode.com/problems/validate-binary-search-tree/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60 & Striver A2Z' },
  { id: 'nc-57', category: 'Trees', name: 'Kth Smallest Element in a BST', link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60 & Striver A2Z' },
  { id: 'nc-58', category: 'Trees', name: 'Construct Binary Tree from Preorder and Inorder Traversal', link: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-59', category: 'Trees', name: 'Binary Tree Maximum Path Sum', link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/', difficulty: 'Hard', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-60', category: 'Trees', name: 'Serialize and Deserialize Binary Tree', link: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/', difficulty: 'Hard', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-61', category: 'Tries', name: 'Implement Trie Prefix Tree', link: 'https://leetcode.com/problems/implement-trie-prefix-tree/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-62', category: 'Tries', name: 'Design Add and Search Words Data Structure', link: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-63', category: 'Tries', name: 'Word Search II', link: 'https://leetcode.com/problems/word-search-ii/', difficulty: 'Hard', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-64', category: 'Heap / Priority Queue', name: 'Kth Largest Element in a Stream', link: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/', difficulty: 'Easy', source: 'NeetCode 150' },
  { id: 'nc-65', category: 'Heap / Priority Queue', name: 'Last Stone Weight', link: 'https://leetcode.com/problems/last-stone-weight/', difficulty: 'Easy', source: 'NeetCode 150' },
  { id: 'nc-66', category: 'Heap / Priority Queue', name: 'K Closest Points to Origin', link: 'https://leetcode.com/problems/k-closest-points-to-origin/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-67', category: 'Heap / Priority Queue', name: 'Kth Largest Element in an Array', link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/', difficulty: 'Medium', source: 'NeetCode 150 & Top 60' },
  { id: 'nc-68', category: 'Heap / Priority Queue', name: 'Task Scheduler', link: 'https://leetcode.com/problems/task-scheduler/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-69', category: 'Heap / Priority Queue', name: 'Design Twitter', link: 'https://leetcode.com/problems/design-twitter/', difficulty: 'Medium', source: 'NeetCode 150 & Top 60' },
  { id: 'nc-70', category: 'Heap / Priority Queue', name: 'Find Median from Data Stream', link: 'https://leetcode.com/problems/find-median-from-data-stream/', difficulty: 'Hard', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-71', category: 'Backtracking', name: 'Subsets', link: 'https://leetcode.com/problems/subsets/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-72', category: 'Backtracking', name: 'Combination Sum', link: 'https://leetcode.com/problems/combination-sum/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-73', category: 'Backtracking', name: 'Permutations', link: 'https://leetcode.com/problems/permutations/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-74', category: 'Backtracking', name: 'Subsets II', link: 'https://leetcode.com/problems/subsets-ii/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-75', category: 'Backtracking', name: 'Combination Sum II', link: 'https://leetcode.com/problems/combination-sum-ii/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-76', category: 'Backtracking', name: 'Word Search', link: 'https://leetcode.com/problems/word-search/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-77', category: 'Backtracking', name: 'Palindrome Partitioning', link: 'https://leetcode.com/problems/palindrome-partitioning/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-78', category: 'Backtracking', name: 'Letter Combinations of a Phone Number', link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-79', category: 'Backtracking', name: 'N-Queens', link: 'https://leetcode.com/problems/n-queens/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-80', category: 'Graphs', name: 'Number of Islands', link: 'https://leetcode.com/problems/number-of-islands/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-81', category: 'Graphs', name: 'Max Area of Island', link: 'https://leetcode.com/problems/max-area-of-island/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-82', category: 'Graphs', name: 'Clone Graph', link: 'https://leetcode.com/problems/clone-graph/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-83', category: 'Graphs', name: 'Walls and Gates', link: 'https://leetcode.com/problems/walls-and-gates/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-84', category: 'Graphs', name: 'Rotting Oranges', link: 'https://leetcode.com/problems/rotting-oranges/', difficulty: 'Medium', source: 'NeetCode 150 & Top 60' },
  { id: 'nc-85', category: 'Graphs', name: 'Pacific Atlantic Water Flow', link: 'https://leetcode.com/problems/pacific-atlantic-water-flow/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-86', category: 'Graphs', name: 'Surrounded Regions', link: 'https://leetcode.com/problems/surrounded-regions/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-87', category: 'Graphs', name: 'Course Schedule', link: 'https://leetcode.com/problems/course-schedule/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-88', category: 'Graphs', name: 'Course Schedule II', link: 'https://leetcode.com/problems/course-schedule-ii/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-89', category: 'Graphs', name: 'Redundant Connection', link: 'https://leetcode.com/problems/redundant-connection/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-90', category: 'Graphs', name: 'Graph Valid Tree', link: 'https://neetcode.io/problems/graph-valid-tree', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-91', category: 'Graphs', name: 'Number of Connected Components in an Undirected Graph', link: 'https://neetcode.io/problems/number-of-connected-components-in-an-undirected-graph', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-92', category: 'Graphs', name: 'Word Ladder', link: 'https://leetcode.com/problems/word-ladder/', difficulty: 'Hard', source: 'NeetCode 150 & Top 60' },
  { id: 'nc-93', category: 'Advanced Graphs', name: 'Reconstruct Itinerary', link: 'https://leetcode.com/problems/reconstruct-itinerary/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-94', category: 'Advanced Graphs', name: 'Min Cost to Connect All Points', link: 'https://leetcode.com/problems/min-cost-to-connect-all-points/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-95', category: 'Advanced Graphs', name: 'Network Delay Time', link: 'https://leetcode.com/problems/network-delay-time/', difficulty: 'Medium', source: 'NeetCode 150 & Top 60' },
  { id: 'nc-96', category: 'Advanced Graphs', name: 'Swim in Rising Water', link: 'https://leetcode.com/problems/swim-in-rising-water/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-97', category: 'Advanced Graphs', name: 'Alien Dictionary', link: 'https://neetcode.io/problems/alien-dictionary', difficulty: 'Hard', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-98', category: 'Advanced Graphs', name: 'Cheapest Flights Within K Stops', link: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-99', category: '1-D DP', name: 'Climbing Stairs', link: 'https://leetcode.com/problems/climbing-stairs/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-100', category: '1-D DP', name: 'Min Cost Climbing Stairs', link: 'https://leetcode.com/problems/min-cost-climbing-stairs/', difficulty: 'Easy', source: 'NeetCode 150' },
  { id: 'nc-101', category: '1-D DP', name: 'House Robber', link: 'https://leetcode.com/problems/house-robber/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-102', category: '1-D DP', name: 'House Robber II', link: 'https://leetcode.com/problems/house-robber-ii/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-103', category: '1-D DP', name: 'Longest Palindromic Substring', link: 'https://leetcode.com/problems/longest-palindromic-substring/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-104', category: '1-D DP', name: 'Palindromic Substrings', link: 'https://leetcode.com/problems/palindromic-substrings/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-105', category: '1-D DP', name: 'Decode Ways', link: 'https://leetcode.com/problems/decode-ways/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-106', category: '1-D DP', name: 'Coin Change', link: 'https://leetcode.com/problems/coin-change/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-107', category: '1-D DP', name: 'Maximum Product Subarray', link: 'https://leetcode.com/problems/maximum-product-subarray/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-108', category: '1-D DP', name: 'Word Break', link: 'https://leetcode.com/problems/word-break/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-109', category: '1-D DP', name: 'Longest Increasing Subsequence', link: 'https://leetcode.com/problems/longest-increasing-subsequence/', difficulty: 'Medium', source: 'NeetCode 150 & Top 60' },
  { id: 'nc-110', category: '1-D DP', name: 'Partition Equal Subset Sum', link: 'https://leetcode.com/problems/partition-equal-subset-sum/', difficulty: 'Medium', source: 'NeetCode 150 & Top 60 & Striver A2Z' },
  { id: 'nc-111', category: '2-D DP', name: 'Unique Paths', link: 'https://leetcode.com/problems/unique-paths/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Striver A2Z' },
  { id: 'nc-112', category: '2-D DP', name: 'Longest Common Subsequence', link: 'https://leetcode.com/problems/longest-common-subsequence/', difficulty: 'Medium', source: 'NeetCode 150 & Top 60 & Striver A2Z' },
  { id: 'nc-113', category: '2-D DP', name: 'Best Time to Buy and Sell Stock with Cooldown', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-114', category: '2-D DP', name: 'Coin Change II', link: 'https://leetcode.com/problems/coin-change-ii/', difficulty: 'Medium', source: 'NeetCode 150 & Striver A2Z' },
  { id: 'nc-115', category: '2-D DP', name: 'Target Sum', link: 'https://leetcode.com/problems/target-sum/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-116', category: '2-D DP', name: 'Interleaving String', link: 'https://leetcode.com/problems/interleaving-string/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-117', category: '2-D DP', name: 'Longest Increasing Path in a Matrix', link: 'https://leetcode.com/problems/longest-increasing-path-in-a-matrix/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-118', category: '2-D DP', name: 'Distinct Subsequences', link: 'https://leetcode.com/problems/distinct-subsequences/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-119', category: '2-D DP', name: 'Edit Distance', link: 'https://leetcode.com/problems/edit-distance/', difficulty: 'Hard', source: 'NeetCode 150 & Top 60' },
  { id: 'nc-120', category: '2-D DP', name: 'Burst Balloons', link: 'https://leetcode.com/problems/burst-balloons/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-121', category: '2-D DP', name: 'Regular Expression Matching', link: 'https://leetcode.com/problems/regular-expression-matching/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-122', category: 'Greedy', name: 'Maximum Subarray', link: 'https://leetcode.com/problems/maximum-subarray/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60 & Striver A2Z' },
  { id: 'nc-123', category: 'Greedy', name: 'Jump Game', link: 'https://leetcode.com/problems/jump-game/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60' },
  { id: 'nc-124', category: 'Greedy', name: 'Jump Game II', link: 'https://leetcode.com/problems/jump-game-ii/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-125', category: 'Greedy', name: 'Gas Station', link: 'https://leetcode.com/problems/gas-station/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-126', category: 'Greedy', name: 'Hand of Straights', link: 'https://leetcode.com/problems/hand-of-straights/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-127', category: 'Greedy', name: 'Merge Triplets to Form Target Triplet', link: 'https://leetcode.com/problems/merge-triplets-to-form-target-triplet/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-128', category: 'Greedy', name: 'Partition Labels', link: 'https://leetcode.com/problems/partition-labels/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-129', category: 'Greedy', name: 'Valid Parenthesis String', link: 'https://leetcode.com/problems/valid-parenthesis-string/', difficulty: 'Medium', source: 'NeetCode 150 & Striver A2Z' },
  { id: 'nc-130', category: 'Intervals', name: 'Meeting Rooms', link: 'https://neetcode.io/problems/meeting-rooms', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-131', category: 'Intervals', name: 'Insert Interval', link: 'https://leetcode.com/problems/insert-interval/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Striver A2Z' },
  { id: 'nc-132', category: 'Intervals', name: 'Merge Intervals', link: 'https://leetcode.com/problems/merge-intervals/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60 & Striver A2Z' },
  { id: 'nc-133', category: 'Intervals', name: 'Non-Overlapping Intervals', link: 'https://leetcode.com/problems/non-overlapping-intervals/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Top 60 & Striver A2Z' },
  { id: 'nc-134', category: 'Intervals', name: 'Meeting Rooms II', link: 'https://neetcode.io/problems/meeting-rooms-ii', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-135', category: 'Intervals', name: 'Minimum Interval to Include Each Query', link: 'https://leetcode.com/problems/minimum-interval-to-include-each-query/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-136', category: 'Math & Geometry', name: 'Happy Number', link: 'https://leetcode.com/problems/happy-number/', difficulty: 'Easy', source: 'NeetCode 150' },
  { id: 'nc-137', category: 'Math & Geometry', name: 'Plus One', link: 'https://leetcode.com/problems/plus-one/', difficulty: 'Easy', source: 'NeetCode 150' },
  { id: 'nc-138', category: 'Math & Geometry', name: 'Rotate Image', link: 'https://leetcode.com/problems/rotate-image/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Striver A2Z' },
  { id: 'nc-139', category: 'Math & Geometry', name: 'Spiral Matrix', link: 'https://leetcode.com/problems/spiral-matrix/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-140', category: 'Math & Geometry', name: 'Set Matrix Zeroes', link: 'https://leetcode.com/problems/set-matrix-zeroes/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150 & Striver A2Z' },
  { id: 'nc-141', category: 'Math & Geometry', name: 'Pow(x n)', link: 'https://leetcode.com/problems/powx-n/', difficulty: 'Medium', source: 'NeetCode 150 & Striver A2Z' },
  { id: 'nc-142', category: 'Math & Geometry', name: 'Multiply Strings', link: 'https://leetcode.com/problems/multiply-strings/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-143', category: 'Math & Geometry', name: 'Detect Squares', link: 'https://leetcode.com/problems/detect-squares/', difficulty: 'Hard', source: 'NeetCode 150' },
  { id: 'nc-144', category: 'Bit Manipulation', name: 'Single Number', link: 'https://leetcode.com/problems/single-number/', difficulty: 'Easy', source: 'NeetCode 150' },
  { id: 'nc-145', category: 'Bit Manipulation', name: 'Number of 1 Bits', link: 'https://leetcode.com/problems/number-of-1-bits/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-146', category: 'Bit Manipulation', name: 'Counting Bits', link: 'https://leetcode.com/problems/counting-bits/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-147', category: 'Bit Manipulation', name: 'Reverse Bits', link: 'https://leetcode.com/problems/reverse-bits/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-148', category: 'Bit Manipulation', name: 'Missing Number', link: 'https://leetcode.com/problems/missing-number/', difficulty: 'Easy', source: 'Blind 75 & NeetCode 150 & Striver A2Z' },
  { id: 'nc-149', category: 'Bit Manipulation', name: 'Sum of Two Integers', link: 'https://leetcode.com/problems/sum-of-two-integers/', difficulty: 'Medium', source: 'Blind 75 & NeetCode 150' },
  { id: 'nc-150', category: 'Bit Manipulation', name: 'Reverse Integer', link: 'https://leetcode.com/problems/reverse-integer/', difficulty: 'Medium', source: 'NeetCode 150' },
  { id: 'nc-151', category: 'Arrays & Strings', name: 'Rotate Array', link: 'https://leetcode.com/problems/rotate-array/', difficulty: 'Medium', source: 'Top 60' },
  { id: 'nc-152', category: 'Arrays & Strings', name: 'Move Zeroes', link: 'https://leetcode.com/problems/move-zeroes/', difficulty: 'Easy', source: 'Top 60' },
  { id: 'nc-153', category: 'Dynamic Programming', name: '0/1 Knapsack (GFG)', link: 'https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/', difficulty: 'Medium', source: 'Top 60' },
  { id: 'nc-154', category: 'Arrays & Strings', name: 'Find All Numbers Disappeared in an Array', link: 'https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-155', category: 'Arrays & Strings', name: 'Subarray Sum Equals K', link: 'https://leetcode.com/problems/subarray-sum-equals-k/', difficulty: 'Medium', source: 'Top Core Patterns' },
  { id: 'nc-156', category: 'Arrays & Strings', name: 'First Missing Positive', link: 'https://leetcode.com/problems/first-missing-positive/', difficulty: 'Hard', source: 'Top Core Patterns' },
  { id: 'nc-157', category: 'Arrays & Strings', name: 'Sort Colors', link: 'https://leetcode.com/problems/sort-colors/', difficulty: 'Medium', source: 'Top Core Patterns & Striver A2Z' },
  { id: 'nc-158', category: 'Arrays & Strings', name: 'Majority Element', link: 'https://leetcode.com/problems/majority-element/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-159', category: 'Arrays & Strings', name: 'Longest Palindrome', link: 'https://leetcode.com/problems/longest-palindrome/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-160', category: 'Arrays & Strings', name: 'Find the Index of the First Occurrence in a String', link: 'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-161', category: 'Arrays & Strings', name: 'Reverse Words in a String', link: 'https://leetcode.com/problems/reverse-words-in-a-string/', difficulty: 'Medium', source: 'Top Core Patterns' },
  { id: 'nc-162', category: 'Arrays & Strings', name: 'Isomorphic Strings', link: 'https://leetcode.com/problems/isomorphic-strings/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-163', category: 'Arrays & Strings', name: 'Word Pattern', link: 'https://leetcode.com/problems/word-pattern/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-164', category: 'Arrays & Strings', name: 'Minimum Size Subarray Sum', link: 'https://leetcode.com/problems/minimum-size-subarray-sum/', difficulty: 'Medium', source: 'Top Core Patterns' },
  { id: 'nc-165', category: 'Arrays & Strings', name: 'Contiguous Array', link: 'https://leetcode.com/problems/contiguous-array/', difficulty: 'Medium', source: 'Top Core Patterns' },
  { id: 'nc-166', category: 'Math & Geometry', name: 'Roman to Integer', link: 'https://leetcode.com/problems/roman-to-integer/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-167', category: 'Math & Geometry', name: 'Integer to Roman', link: 'https://leetcode.com/problems/integer-to-roman/', difficulty: 'Medium', source: 'Top Core Patterns' },
  { id: 'nc-168', category: 'Arrays & Strings', name: 'Longest Common Prefix', link: 'https://leetcode.com/problems/longest-common-prefix/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-169', category: 'Arrays & Strings', name: 'Next Permutation', link: 'https://leetcode.com/problems/next-permutation/', difficulty: 'Medium', source: 'Top Core Patterns & Striver A2Z' },
  { id: 'nc-170', category: 'Arrays & Strings', name: 'Remove Duplicates from Sorted Array', link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-171', category: 'Arrays & Strings', name: 'Remove Element', link: 'https://leetcode.com/problems/remove-element/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-172', category: 'Binary Search', name: 'Find First and Last Position of Element in Sorted Array', link: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/', difficulty: 'Medium', source: 'Top Core Patterns' },
  { id: 'nc-173', category: 'Math & Geometry', name: 'String to Integer (atoi)', link: 'https://leetcode.com/problems/string-to-integer-atoi/', difficulty: 'Medium', source: 'Top Core Patterns' },
  { id: 'nc-174', category: 'Arrays & Strings', name: 'Zigzag Conversion', link: 'https://leetcode.com/problems/zigzag-conversion/', difficulty: 'Medium', source: 'Top Core Patterns' },
  { id: 'nc-175', category: 'Binary Search', name: 'Search Insert Position', link: 'https://leetcode.com/problems/search-insert-position/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-176', category: 'Arrays & Strings', name: 'Find All Anagrams in a String', link: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/', difficulty: 'Medium', source: 'Top Core Patterns' },
  { id: 'nc-177', category: 'Heap / Priority Queue', name: 'Sort Characters By Frequency', link: 'https://leetcode.com/problems/sort-characters-by-frequency/', difficulty: 'Medium', source: 'Top Core Patterns' },
  { id: 'nc-178', category: 'Heap / Priority Queue', name: 'Top K Frequent Words', link: 'https://leetcode.com/problems/top-k-frequent-words/', difficulty: 'Medium', source: 'Top Core Patterns' },
  { id: 'nc-179', category: 'Arrays & Strings', name: 'Intersection of Two Arrays', link: 'https://leetcode.com/problems/intersection-of-two-arrays/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-180', category: 'Arrays & Strings', name: 'Intersection of Two Arrays II', link: 'https://leetcode.com/problems/intersection-of-two-arrays-ii/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-181', category: 'Binary Search', name: 'Find Peak Element', link: 'https://leetcode.com/problems/find-peak-element/', difficulty: 'Medium', source: 'Top Core Patterns' },
  { id: 'nc-182', category: 'Binary Search', name: 'Search a 2D Matrix II', link: 'https://leetcode.com/problems/search-a-2d-matrix-ii/', difficulty: 'Medium', source: 'Top Core Patterns' },
  { id: 'nc-183', category: 'Arrays & Strings', name: 'Continuous Subarray Sum', link: 'https://leetcode.com/problems/continuous-subarray-sum/', difficulty: 'Medium', source: 'Top Core Patterns' },
  { id: 'nc-184', category: 'Sliding Window', name: 'Maximum Points You Can Obtain from Cards', link: 'https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/', difficulty: 'Medium', source: 'Top Core Patterns' },
  { id: 'nc-185', category: 'Arrays & Strings', name: 'Shortest Unsorted Continuous Subarray', link: 'https://leetcode.com/problems/shortest-unsorted-continuous-subarray/', difficulty: 'Medium', source: 'Top Core Patterns' },
  { id: 'nc-186', category: 'Two Pointers', name: 'Valid Palindrome II', link: 'https://leetcode.com/problems/valid-palindrome-ii/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-187', category: 'Binary Search', name: 'Valid Perfect Square', link: 'https://leetcode.com/problems/valid-perfect-square/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-188', category: 'Arrays & Strings', name: 'Contains Duplicate II', link: 'https://leetcode.com/problems/contains-duplicate-ii/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-189', category: 'Arrays & Strings', name: 'Bulls and Cows', link: 'https://leetcode.com/problems/bulls-and-cows/', difficulty: 'Medium', source: 'Top Core Patterns' },
  { id: 'nc-190', category: 'Two Pointers', name: 'Is Subsequence', link: 'https://leetcode.com/problems/is-subsequence/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-191', category: 'Arrays & Strings', name: 'Find Pivot Index', link: 'https://leetcode.com/problems/find-pivot-index/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-192', category: 'Two Pointers', name: 'Sort Array By Parity', link: 'https://leetcode.com/problems/sort-array-by-parity/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-193', category: 'Two Pointers', name: 'Squares of a Sorted Array', link: 'https://leetcode.com/problems/squares-of-a-sorted-array/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-194', category: 'Two Pointers', name: 'Merge Sorted Array', link: 'https://leetcode.com/problems/merge-sorted-array/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-195', category: 'Arrays & Strings', name: 'First Unique Character in a String', link: 'https://leetcode.com/problems/first-unique-character-in-a-string/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-196', category: 'Two Pointers', name: 'Reverse String', link: 'https://leetcode.com/problems/reverse-string/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-197', category: 'Arrays & Strings', name: 'Ransom Note', link: 'https://leetcode.com/problems/ransom-note/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-198', category: 'Arrays & Strings', name: 'Longest Word in Dictionary', link: 'https://leetcode.com/problems/longest-word-in-dictionary/', difficulty: 'Medium', source: 'Top Core Patterns' },
  { id: 'nc-199', category: 'Arrays & Strings', name: 'Wiggle Sort II', link: 'https://leetcode.com/problems/wiggle-sort-ii/', difficulty: 'Medium', source: 'Top Core Patterns' },
  { id: 'nc-200', category: 'Arrays & Strings', name: 'Pascal\'s Triangle', link: 'https://leetcode.com/problems/pascals-triangle/', difficulty: 'Easy', source: 'Top Core Patterns & Striver A2Z' },
  { id: 'nc-201', category: 'Math & Geometry', name: 'Pascal\'s Triangle II', link: 'https://leetcode.com/problems/pascals-triangle-ii/', difficulty: 'Easy', source: 'Top Core Patterns' },
  { id: 'nc-202', category: 'Greedy', name: 'N Meetings in one room', link: 'https://www.geeksforgeeks.org/problems/n-meetings-in-one-room/1', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-203', category: 'Greedy', name: 'Minimum Platforms', link: 'https://www.geeksforgeeks.org/problems/minimum-platforms/1', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-204', category: 'Greedy', name: 'Job Sequencing Problem', link: 'https://www.geeksforgeeks.org/problems/job-sequencing-problem/1', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-205', category: 'Greedy', name: 'Fractional Knapsack', link: 'https://www.geeksforgeeks.org/problems/fractional-knapsack/1', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-206', category: 'Greedy', name: 'Candy', link: 'https://leetcode.com/problems/candy/', difficulty: 'Hard', source: 'Striver A2Z' },
  { id: 'nc-207', category: 'Greedy', name: 'Assign Cookies', link: 'https://leetcode.com/problems/assign-cookies/', difficulty: 'Easy', source: 'Striver A2Z' },
  { id: 'nc-208', category: 'Greedy', name: 'Lemonade Change', link: 'https://leetcode.com/problems/lemonade-change/', difficulty: 'Easy', source: 'Striver A2Z' },
  { id: 'nc-209', category: 'Binary Search', name: 'Aggressive Cows', link: 'https://leetcode.com/problems/aggressive-cows/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-210', category: 'Binary Search', name: 'Allocate Minimum Number of Pages', link: 'https://leetcode.com/problems/allocate-minimum-number-of-pages/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-211', category: 'Binary Search', name: 'Split Array Largest Sum', link: 'https://leetcode.com/problems/split-array-largest-sum/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-212', category: 'Binary Search', name: 'Minimize Max Distance to Gas Station', link: 'https://leetcode.com/problems/minimize-max-distance-to-gas-station/', difficulty: 'Hard', source: 'Striver A2Z' },
  { id: 'nc-213', category: 'Binary Search', name: 'Capacity To Ship Packages Within D Days', link: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-214', category: 'Binary Search', name: 'Kth Missing Positive Number', link: 'https://leetcode.com/problems/kth-missing-positive-number/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-215', category: 'Binary Search', name: 'Minimum Number of Days to Make m Bouquets', link: 'https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-216', category: 'Binary Search', name: 'Find the Smallest Divisor Given a Threshold', link: 'https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-217', category: 'Linked List', name: 'Rotate List', link: 'https://leetcode.com/problems/rotate-list/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-218', category: 'Linked List', name: 'Flatten a Multilevel Doubly Linked List', link: 'https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-219', category: 'Linked List', name: 'Sort List', link: 'https://leetcode.com/problems/sort-list/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-220', category: 'Linked List', name: 'Intersection of Two Linked Lists', link: 'https://leetcode.com/problems/intersection-of-two-linked-lists/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-221', category: 'Linked List', name: 'Palindrome Linked List', link: 'https://leetcode.com/problems/palindrome-linked-list/', difficulty: 'Easy', source: 'Striver A2Z' },
  { id: 'nc-222', category: 'Linked List', name: 'Middle of the Linked List', link: 'https://leetcode.com/problems/middle-of-the-linked-list/', difficulty: 'Easy', source: 'Striver A2Z' },
  { id: 'nc-223', category: 'Linked List', name: 'Delete Node in a Linked List', link: 'https://leetcode.com/problems/delete-node-in-a-linked-list/', difficulty: 'Easy', source: 'Striver A2Z' },
  { id: 'nc-224', category: 'Trees', name: 'Top View of Binary Tree', link: 'https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-225', category: 'Trees', name: 'Bottom View of Binary Tree', link: 'https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-226', category: 'Trees', name: 'Left View of Binary Tree', link: 'https://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-227', category: 'Trees', name: 'Boundary Traversal of Binary Tree', link: 'https://www.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-228', category: 'Trees', name: 'Flatten Binary Tree to Linked List', link: 'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-229', category: 'Trees', name: 'Maximum Width of Binary Tree', link: 'https://leetcode.com/problems/maximum-width-of-binary-tree/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-230', category: 'Trees', name: 'Symmetric Tree', link: 'https://leetcode.com/problems/symmetric-tree/', difficulty: 'Easy', source: 'Striver A2Z' },
  { id: 'nc-231', category: 'Trees', name: 'All Nodes Distance K in Binary Tree', link: 'https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-232', category: 'Trees', name: 'Construct Binary Tree from Inorder and Postorder Traversal', link: 'https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-233', category: 'Trees', name: 'Populating Next Right Pointers in Each Node', link: 'https://leetcode.com/problems/populating-next-right-pointers-in-each-node/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-234', category: 'Trees', name: 'Search in a Binary Search Tree', link: 'https://leetcode.com/problems/search-in-a-binary-search-tree/', difficulty: 'Easy', source: 'Striver A2Z' },
  { id: 'nc-235', category: 'Trees', name: 'Insert into a Binary Search Tree', link: 'https://leetcode.com/problems/insert-into-a-binary-search-tree/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-236', category: 'Trees', name: 'Delete Node in a BST', link: 'https://leetcode.com/problems/delete-node-in-a-bst/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-237', category: 'Trees', name: 'LCA of Binary Search Tree', link: 'https://leetcode.com/problems/lca-of-binary-search-tree/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-238', category: 'Trees', name: 'Construct Binary Search Tree from Preorder Traversal', link: 'https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-239', category: 'Trees', name: 'Inorder Successor in BST', link: 'https://leetcode.com/problems/inorder-successor-in-bst/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-240', category: 'Trees', name: 'Binary Search Tree Iterator', link: 'https://leetcode.com/problems/binary-search-tree-iterator/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-241', category: 'Trees', name: 'Recover Binary Search Tree', link: 'https://leetcode.com/problems/recover-binary-search-tree/', difficulty: 'Hard', source: 'Striver A2Z' },
  { id: 'nc-242', category: 'Trees', name: 'Largest BST', link: 'https://leetcode.com/problems/largest-bst/', difficulty: 'Hard', source: 'Striver A2Z' },
  { id: 'nc-243', category: 'Graphs', name: 'Bipartite Graph', link: 'https://leetcode.com/problems/bipartite-graph/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-244', category: 'Graphs', name: 'Detect Cycle in a Directed Graph', link: 'https://leetcode.com/problems/detect-cycle-in-a-directed-graph/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-245', category: 'Graphs', name: 'Detect Cycle in an Undirected Graph', link: 'https://leetcode.com/problems/detect-cycle-in-an-undirected-graph/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-246', category: 'Graphs', name: 'Topological Sort', link: 'https://www.geeksforgeeks.org/problems/topological-sort/1', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-247', category: 'Graphs', name: 'Word Ladder I', link: 'https://leetcode.com/problems/word-ladder-i/', difficulty: 'Hard', source: 'Striver A2Z' },
  { id: 'nc-248', category: 'Graphs', name: 'Word Ladder II', link: 'https://leetcode.com/problems/word-ladder-ii/', difficulty: 'Hard', source: 'Striver A2Z' },
  { id: 'nc-249', category: 'Graphs', name: 'Dijkstra\'s Algorithm', link: 'https://leetcode.com/problems/dijkstras-algorithm/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-250', category: 'Graphs', name: 'Shortest Path in Weighted undirected graph', link: 'https://www.geeksforgeeks.org/problems/shortest-path-in-weighted-undirected-graph/1', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-251', category: 'Graphs', name: 'Shortest Path in Directed Acyclic Graph', link: 'https://www.geeksforgeeks.org/problems/shortest-path-in-directed-acyclic-graph/1', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-252', category: 'Graphs', name: 'Bellman Ford Algorithm', link: 'https://leetcode.com/problems/bellman-ford-algorithm/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-253', category: 'Graphs', name: 'Floyd Warshall', link: 'https://leetcode.com/problems/floyd-warshall/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-254', category: 'Graphs', name: 'Minimum Spanning Tree', link: 'https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-255', category: 'Graphs', name: 'Kruskal\'s Algorithm', link: 'https://leetcode.com/problems/kruskals-algorithm/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-256', category: 'Graphs', name: 'Prims Algorithm', link: 'https://leetcode.com/problems/prims-algorithm/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-257', category: 'Graphs', name: 'Accounts Merge', link: 'https://leetcode.com/problems/accounts-merge/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-258', category: 'Graphs', name: 'Making A Large Island', link: 'https://leetcode.com/problems/making-a-large-island/', difficulty: 'Hard', source: 'Striver A2Z' },
  { id: 'nc-259', category: '1-D DP', name: 'Frog Jump', link: 'https://www.geeksforgeeks.org/problems/frog-jump/1', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-260', category: '2-D DP', name: 'Ninja\'s Training', link: 'https://www.geeksforgeeks.org/problems/ninjas-training/1', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-261', category: '2-D DP', name: 'Grid Unique Paths II', link: 'https://leetcode.com/problems/grid-unique-paths-ii/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-262', category: '2-D DP', name: 'Minimum Path Sum', link: 'https://leetcode.com/problems/minimum-path-sum/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-263', category: '2-D DP', name: 'Triangle', link: 'https://leetcode.com/problems/triangle/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-264', category: '2-D DP', name: 'Minimum Falling Path Sum', link: 'https://leetcode.com/problems/minimum-falling-path-sum/', difficulty: 'Hard', source: 'Striver A2Z' },
  { id: 'nc-265', category: '2-D DP', name: 'Subset Sum Equal To K', link: 'https://www.geeksforgeeks.org/problems/subset-sum-equal-to-k/1', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-266', category: '2-D DP', name: '0/1 Knapsack', link: 'https://www.geeksforgeeks.org/problems/0-1-knapsack/1', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-267', category: '2-D DP', name: 'Unbounded Knapsack', link: 'https://leetcode.com/problems/unbounded-knapsack/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-268', category: '2-D DP', name: 'Rod Cutting', link: 'https://www.geeksforgeeks.org/problems/rod-cutting/1', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-269', category: '2-D DP', name: 'Longest Palindromic Subsequence', link: 'https://leetcode.com/problems/longest-palindromic-subsequence/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-270', category: '2-D DP', name: 'Matrix Chain Multiplication', link: 'https://leetcode.com/problems/matrix-chain-multiplication/', difficulty: 'Hard', source: 'Striver A2Z' },
  { id: 'nc-271', category: '2-D DP', name: 'Palindrome Partitioning II', link: 'https://leetcode.com/problems/palindrome-partitioning-ii/', difficulty: 'Hard', source: 'Striver A2Z' },
  { id: 'nc-272', category: '2-D DP', name: 'Maximum Rectangle', link: 'https://leetcode.com/problems/maximum-rectangle/', difficulty: 'Hard', source: 'Striver A2Z' },
  { id: 'nc-273', category: 'Sliding Window', name: 'Max Consecutive Ones III', link: 'https://leetcode.com/problems/max-consecutive-ones-iii/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-274', category: 'Sliding Window', name: 'Fruit Into Baskets', link: 'https://leetcode.com/problems/fruit-into-baskets/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-275', category: 'Sliding Window', name: 'Longest Substring with At Most K Distinct Characters', link: 'https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-276', category: 'Sliding Window', name: 'Number of Substrings Containing All Three Characters', link: 'https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-277', category: 'Sliding Window', name: 'Maximum Erasure Value', link: 'https://leetcode.com/problems/maximum-erasure-value/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-278', category: 'Sliding Window', name: 'Subarrays with K Different Integers', link: 'https://leetcode.com/problems/subarrays-with-k-different-integers/', difficulty: 'Hard', source: 'Striver A2Z' },
  { id: 'nc-279', category: 'Stack', name: 'Implement Stack using Queues', link: 'https://leetcode.com/problems/implement-stack-using-queues/', difficulty: 'Easy', source: 'Striver A2Z' },
  { id: 'nc-280', category: 'Stack', name: 'Implement Queue using Stacks', link: 'https://leetcode.com/problems/implement-queue-using-stacks/', difficulty: 'Easy', source: 'Striver A2Z' },
  { id: 'nc-281', category: 'Stack', name: 'Next Greater Element I', link: 'https://leetcode.com/problems/next-greater-element-i/', difficulty: 'Easy', source: 'Striver A2Z' },
  { id: 'nc-282', category: 'Stack', name: 'Next Greater Element II', link: 'https://leetcode.com/problems/next-greater-element-ii/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-283', category: 'Stack', name: 'Next Smaller Element', link: 'https://leetcode.com/problems/next-smaller-element/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-284', category: 'Stack', name: 'Asteroid Collision', link: 'https://leetcode.com/problems/asteroid-collision/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-285', category: 'Stack', name: 'Sum of Subarray Minimums', link: 'https://leetcode.com/problems/sum-of-subarray-minimums/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-286', category: 'Stack', name: 'Online Stock Span', link: 'https://leetcode.com/problems/online-stock-span/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-287', category: 'Stack', name: 'The Skyline Problem', link: 'https://leetcode.com/problems/the-skyline-problem/', difficulty: 'Hard', source: 'Striver A2Z' },
  { id: 'nc-288', category: 'Stack', name: 'Maximal Rectangle', link: 'https://leetcode.com/problems/maximal-rectangle/', difficulty: 'Hard', source: 'Striver A2Z' },
  { id: 'nc-289', category: 'Arrays & Strings', name: 'Merge two sorted Arrays without extra space', link: 'https://leetcode.com/problems/merge-two-sorted-arrays-without-extra-space/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-290', category: 'Arrays & Strings', name: 'Inversion of Array', link: 'https://www.geeksforgeeks.org/problems/inversion-of-array/1', difficulty: 'Hard', source: 'Striver A2Z' },
  { id: 'nc-291', category: 'Arrays & Strings', name: 'Search in a 2D matrix', link: 'https://leetcode.com/problems/search-in-a-2d-matrix/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-292', category: 'Arrays & Strings', name: 'Majority Element (>N/2 times)', link: 'https://leetcode.com/problems/majority-element-n-2-times/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-293', category: 'Arrays & Strings', name: 'Majority Element (>N/3 times)', link: 'https://leetcode.com/problems/majority-element-n-3-times/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-294', category: 'Arrays & Strings', name: 'Reverse Pairs', link: 'https://leetcode.com/problems/reverse-pairs/', difficulty: 'Hard', source: 'Striver A2Z' },
  { id: 'nc-295', category: 'Arrays & Strings', name: '4-sum-Problem', link: 'https://leetcode.com/problems/4sum/', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-296', category: 'Arrays & Strings', name: 'Largest Subarray with 0 sum', link: 'https://www.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1', difficulty: 'Medium', source: 'Striver A2Z' },
  { id: 'nc-297', category: 'Arrays & Strings', name: 'Count number of subarrays with given Xor K', link: 'https://www.geeksforgeeks.org/problems/count-number-of-subarrays-with-given-xor-k/1', difficulty: 'Medium', source: 'Striver A2Z' },
];





function App() {
  const [activeRoadmap, setActiveRoadmap] = useState(1);
  const [completedTasks, setCompletedTasks] = useState(() => {
    const saved = localStorage.getItem('roadmap_completed_tasks');
    if (!saved) return {};
    const parsed = JSON.parse(saved);
    // Migrate old boolean entries
    const migrated = {};
    for (const [key, val] of Object.entries(parsed)) {
      if (val === true) {
        migrated[key] = { done: true, completedAt: null, confidence: 3 };
      } else if (val && typeof val === 'object') {
        migrated[key] = val;
      }
    }
    return migrated;
  });

  const [calendarSettings, setCalendarSettings] = useState(() => {
    const saved = localStorage.getItem('roadmap_calendar_settings');
    return saved ? JSON.parse(saved) : {
      startDate: '',
      blockedRanges: [],
      dailyHoursBudget: 6
    };
  });
  
  const [adaptiveMode, setAdaptiveMode] = useState({ enabled: false, droppedPriority: null });
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('roadmap_notes');
    return saved ? JSON.parse(saved) : {};
  });
  const [faqCompleted, setFaqCompleted] = useState(() => {
    const saved = localStorage.getItem('roadmap_faq_completed');
    return saved ? JSON.parse(saved) : {};
  });

  const [syncId, setSyncId] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const urlSyncId = params.get('sync');
    let currentSyncId = localStorage.getItem('roadmap_sync_id');
    
    if (urlSyncId) {
      localStorage.setItem('roadmap_sync_id', urlSyncId);
      return urlSyncId;
    }
    if (!currentSyncId) {
      currentSyncId = `user-${Math.random().toString(36).substring(2, 11)}`;
      localStorage.setItem('roadmap_sync_id', currentSyncId);
    }
    return currentSyncId;
  });

  const [syncStatus, setSyncStatus] = useState(() => {
    return isFirebaseConfigured ? 'syncing' : 'offline';
  });
  const [isInitialized, setIsInitialized] = useState(false);
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const lastCloudState = useRef({ completedTasks: {}, notes: {}, faqCompleted: {} });
  const isRemoteUpdate = useRef(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterPriority, setFilterPriority] = useState('ALL');
  const [filterStatus, setFilterStatus] = useState('ALL');

  // Establish real-time Firestore listener on mount
  useEffect(() => {
    // Clean URL query parameters if ?sync=... was present
    const params = new URLSearchParams(window.location.search);
    if (params.get('sync')) {
      const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      window.history.replaceState({ path: cleanUrl }, '', cleanUrl);
    }
    
    let unsubscribe = null;
    
    // If Firestore is configured, establish real-time snapshot listener
    if (isFirebaseConfigured && db && syncId) {
      try {
        const docRef = doc(db, 'roadmaps', syncId);
        
        unsubscribe = onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            const cloudData = docSnap.data();
            
            // Mark this as a remote update so the debounced write effect skips it
            isRemoteUpdate.current = true;
            
            // Update last cloud state to match database state
            lastCloudState.current = {
              completedTasks: cloudData.completedTasks || {},
              notes: cloudData.notes || {},
              faqCompleted: cloudData.faqCompleted || {},
              calendarSettings: cloudData.calendarSettings || { startDate: '', blockedRanges: [], dailyHoursBudget: 6 }
            };
            
            // 1. Always sync completed tasks, FAQs, and settings from the cloud
            setCompletedTasks(cloudData.completedTasks || {});
            setFaqCompleted(cloudData.faqCompleted || {});
            if (cloudData.calendarSettings) {
              setCalendarSettings(cloudData.calendarSettings);
              localStorage.setItem('roadmap_calendar_settings', JSON.stringify(cloudData.calendarSettings));
            }
            
            localStorage.setItem('roadmap_completed_tasks', JSON.stringify(cloudData.completedTasks || {}));
            localStorage.setItem('roadmap_faq_completed', JSON.stringify(cloudData.faqCompleted || {}));
            
            // 2. Sync notes, avoiding overwriting the note that is actively being edited to prevent cursor jumping
            const activeElement = document.activeElement;
            const isEditingNote = activeElement && activeElement.tagName === 'TEXTAREA' && activeElement.id && activeElement.id.startsWith('note-');
            
            let activeTaskId = null;
            if (isEditingNote) {
              activeTaskId = activeElement.id.replace('note-', '');
            }
            
            setNotes(prevNotes => {
              const nextNotes = { ...(cloudData.notes || {}) };
              if (activeTaskId && prevNotes[activeTaskId] !== undefined) {
                // Keep the local active note to prevent focus loss or cursor jumps
                nextNotes[activeTaskId] = prevNotes[activeTaskId];
              }
              localStorage.setItem('roadmap_notes', JSON.stringify(nextNotes));
              return nextNotes;
            });
            
            setSyncStatus('synced');
          } else {
            // First time this ID is used in the cloud, initialize it with current local progress
            const initialPayload = {
              completedTasks: JSON.parse(localStorage.getItem('roadmap_completed_tasks') || '{}'),
              notes: JSON.parse(localStorage.getItem('roadmap_notes') || '{}'),
              faqCompleted: JSON.parse(localStorage.getItem('roadmap_faq_completed') || '{}'),
              calendarSettings: JSON.parse(localStorage.getItem('roadmap_calendar_settings') || '{"startDate":"","blockedRanges":[],"dailyHoursBudget":6}'),
              updatedAt: new Date().toISOString()
            };
            setDoc(docRef, initialPayload)
              .then(() => {
                console.log("Initialized new cloud sync document.");
                lastCloudState.current = {
                  completedTasks: initialPayload.completedTasks,
                  notes: initialPayload.notes,
                  faqCompleted: initialPayload.faqCompleted,
                  calendarSettings: initialPayload.calendarSettings
                };
                setSyncStatus('synced');
              })
              .catch((err) => {
                console.error("Firestore init doc error:", err);
                setSyncStatus('error');
              });
          }
        }, (error) => {
          console.error("Firestore subscription error:", error);
          setSyncStatus('error');
        });
      } catch (error) {
        console.error("Firestore subscription setup error:", error);
        Promise.resolve().then(() => setSyncStatus('error'));
      }
    } else {
      Promise.resolve().then(() => setSyncStatus('offline'));
    }
    
    Promise.resolve().then(() => setIsInitialized(true));
    
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [syncId]);

  // Sync state to local storage when changed
  useEffect(() => {
    localStorage.setItem('roadmap_completed_tasks', JSON.stringify(completedTasks));
  }, [completedTasks]);
  
  useEffect(() => {
    localStorage.setItem('roadmap_calendar_settings', JSON.stringify(calendarSettings));
  }, [calendarSettings]);

  useEffect(() => {
    localStorage.setItem('roadmap_notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('roadmap_faq_completed', JSON.stringify(faqCompleted));
  }, [faqCompleted]);

  // Debounced push to Firestore when LOCAL changes occur (skip remote updates from onSnapshot)
  useEffect(() => {
    if (!isInitialized || !isFirebaseConfigured || !db || !syncId) return;

    // If state was just updated by an incoming onSnapshot, don't write it back
    if (isRemoteUpdate.current) {
      isRemoteUpdate.current = false;
      return;
    }

    // Check if the current React state differs from what is in the database
    const hasUnsavedChanges = 
      JSON.stringify(completedTasks) !== JSON.stringify(lastCloudState.current.completedTasks) ||
      JSON.stringify(notes) !== JSON.stringify(lastCloudState.current.notes) ||
      JSON.stringify(faqCompleted) !== JSON.stringify(lastCloudState.current.faqCompleted) ||
      JSON.stringify(calendarSettings) !== JSON.stringify(lastCloudState.current.calendarSettings);

    if (!hasUnsavedChanges) return;

    setSyncStatus('syncing');

    const delayDebounceFn = setTimeout(async () => {
      try {
        const docRef = doc(db, 'roadmaps', syncId);
        const payload = {
          completedTasks,
          notes,
          faqCompleted,
          calendarSettings,
          updatedAt: new Date().toISOString()
        };
        await setDoc(docRef, payload);
        
        lastCloudState.current = { completedTasks, notes, faqCompleted, calendarSettings };
        setSyncStatus('synced');
        console.log("Cloud sync updated successfully.");
      } catch (error) {
        console.error("Firestore sync error:", error);
        setSyncStatus('error');
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [completedTasks, notes, faqCompleted, calendarSettings, isInitialized, syncId]);

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => {
      const current = prev[taskId];
      if (current?.done) {
        // Uncomplete: remove the entry
        const next = { ...prev };
        delete next[taskId];
        return next;
      } else {
        // Complete: set with date, show confidence picker
        return {
          ...prev,
          [taskId]: { done: true, completedAt: new Date().toISOString().split('T')[0], confidence: 0 }
        };
      }
    });
  };

  const setConfidence = (taskId, level) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: { ...prev[taskId], confidence: level }
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
          if (completedTasks[`${roadmap.id}-${phase.id}-${item.day}`]?.done) {
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
          if (completedTasks[`${roadmap.id}-${phase.id}-${item.day}`]?.done) {
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

  const streak = useMemo(() => {
    const dates = new Set();
    Object.values(completedTasks).forEach(v => {
      if (v?.done && v.completedAt) dates.add(v.completedAt);
    });
    let count = 0;
    const today = new Date();
    for (let i = 0; i < 365; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      if (dates.has(dateStr)) count++;
      else if (i > 0) break; // Allow today to not have completions yet
    }
    return count;
  }, [completedTasks]);

  const dayToDate = useMemo(() => {
    if (!calendarSettings.startDate) return () => null;
    const start = new Date(calendarSettings.startDate);
    const blocked = calendarSettings.blockedRanges.map(r => ({
      start: new Date(r.start),
      end: new Date(r.end)
    }));
    
    return (dayNumber) => {
      let currentDate = new Date(start);
      let daysToSkip = dayNumber - 1;
      
      while (daysToSkip > 0) {
        currentDate.setDate(currentDate.getDate() + 1);
        const isBlocked = blocked.some(b => currentDate >= b.start && currentDate <= b.end);
        if (!isBlocked) daysToSkip--;
      }
      
      return currentDate;
    };
  }, [calendarSettings]);

  const isPhaseComplete = useMemo(() => {
    const result = {};
    roadmapData.forEach(r => {
      r.phases.forEach(p => {
        const p0Items = p.items.filter(i => i.priority === '🔴 P0');
        if (p0Items.length === 0) {
          result[p.id] = true;
        } else {
          const doneCount = p0Items.filter(i => completedTasks[`${r.id}-${p.id}-${i.day}`]?.done).length;
          result[p.id] = doneCount >= Math.ceil(p0Items.length * 0.8);
        }
      });
    });
    return result;
  }, [completedTasks]);

  const isPhaseUnlocked = (phase) => {
    if (!phase.dependencies || phase.dependencies.length === 0) return true;
    return phase.dependencies.every(depId => isPhaseComplete[depId]);
  };

  const getBlockingDeps = (phase) => {
    if (!phase.dependencies) return [];
    return phase.dependencies.filter(depId => !isPhaseComplete[depId]);
  };

  // Compute "today's day number" (non-blocked days since start)
  const todayDayNum = useMemo(() => {
    if (!calendarSettings.startDate) return 0;
    const today = new Date();
    let dayCount = 0;
    const start = new Date(calendarSettings.startDate);
    const blocked = calendarSettings.blockedRanges.map(r => ({
      start: new Date(r.start), end: new Date(r.end)
    }));
    let current = new Date(start);
    while (current <= today) {
      const isBlocked = blocked.some(b => current >= b.start && current <= b.end);
      if (!isBlocked) dayCount++;
      current.setDate(current.getDate() + 1);
    }
    return dayCount;
  }, [calendarSettings]);

  // Per-roadmap behind-schedule status (computed for the active tab)
  const behindStatus = useMemo(() => {
    if (!calendarSettings.startDate || todayDayNum === 0) return null;
    
    const roadmap = roadmapData.find(r => r.id === activeRoadmap);
    if (!roadmap) return null;
    
    let lastCompleted = 0;
    roadmap.phases.forEach(p => p.items.forEach(i => {
      const tid = `${roadmap.id}-${p.id}-${i.day}`;
      if (completedTasks[tid]?.done && i.day > lastCompleted) lastCompleted = i.day;
    }));
    
    const behind = todayDayNum - lastCompleted;
    return behind > 3 ? { daysBehind: behind, todayDayNum, lastCompleted } : null;
  }, [calendarSettings, todayDayNum, activeRoadmap, completedTasks]);

  // Count how many total roadmaps are behind (for the summary badge)
  const tracksBehindCount = useMemo(() => {
    if (!calendarSettings.startDate || todayDayNum === 0) return 0;
    let count = 0;
    roadmapData.forEach(r => {
      let lastCompleted = 0;
      r.phases.forEach(p => p.items.forEach(i => {
        const tid = `${r.id}-${p.id}-${i.day}`;
        if (completedTasks[tid]?.done && i.day > lastCompleted) lastCompleted = i.day;
      }));
      if (todayDayNum - lastCompleted > 3) count++;
    });
    return count;
  }, [calendarSettings, todayDayNum, completedTasks]);

  const todaysPlan = useMemo(() => {
    if (!calendarSettings.startDate) return null;
    
    const budget = calendarSettings.dailyHoursBudget;
    let remaining = budget;
    const items = [];
    
    // 1. Always include next uncompleted DSA item
    const dsa = roadmapData.find(r => r.id === 7);
    if (dsa) {
      for (const p of dsa.phases) {
        for (const i of p.items) {
          const tid = `7-${p.id}-${i.day}`;
          if (!completedTasks[tid]?.done && i.estimatedHours <= remaining) {
            items.push({ ...i, roadmapTitle: 'DSA', roadmapColor: dsa.color, taskId: tid });
            remaining -= i.estimatedHours;
            break;
          }
        }
        if (items.length > 0) break;
      }
    }
    
    // 2. Fill with domain items, sorted by least-progressed roadmap first
    const otherRoadmaps = roadmapData.filter(r => r.id !== 7).map(r => {
      const total = r.phases.reduce((s, p) => s + p.items.length, 0);
      const done = r.phases.reduce((s, p) => s + p.items.filter(i => completedTasks[`${r.id}-${p.id}-${i.day}`]?.done).length, 0);
      return { ...r, completionPct: total > 0 ? done / total : 1 };
    }).sort((a, b) => a.completionPct - b.completionPct);
    
    let stalled = false;
    while (remaining > 0 && !stalled) {
      stalled = true;
      for (const r of otherRoadmaps) {
        let added = false;
        for (const p of r.phases) {
          if (!isPhaseUnlocked(p)) continue;
          for (const i of p.items) {
            const tid = `${r.id}-${p.id}-${i.day}`;
            if (!completedTasks[tid]?.done && i.estimatedHours <= remaining && !items.find(x => x.taskId === tid)) {
              items.push({ ...i, roadmapTitle: r.title, roadmapColor: r.color, taskId: tid });
              remaining -= i.estimatedHours;
              added = true;
              stalled = false;
              break;
            }
          }
          if (added) break;
        }
      }
    }
    
    return items.length > 0 ? { items, totalHours: budget - remaining, budget } : null;
  }, [calendarSettings, completedTasks, isPhaseComplete]);

  const currentRoadmap = roadmapData.find(r => r.id === activeRoadmap);
  const currentStyles = themeStyles[currentRoadmap.color] || themeStyles.indigo;

  // Check if the current roadmap is DSA (id 7) to show FAQ section
  const isDSA = currentRoadmap.id === 7;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans pb-20">
      {/* Header & Global Progress */}
      <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full md:w-auto">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-500/20 rounded-lg">
                  <BookOpen className="w-6 h-6 text-indigo-400" />
                </div>
                <h1 className="text-xl md:text-2xl font-bold text-zinc-100">{globalProgress.total}-Day Master Roadmap</h1>
              </div>
              
              {/* Sync Status Badge & Action */}
              <div className="flex items-center gap-2 bg-zinc-950/60 border border-zinc-800/80 px-2.5 py-1 rounded-lg text-xs self-stretch sm:self-auto justify-between sm:justify-start">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      syncStatus === 'synced' ? 'bg-emerald-400' :
                      syncStatus === 'syncing' ? 'bg-amber-400' :
                      syncStatus === 'offline' ? 'bg-zinc-500' : 'bg-red-400'
                    }`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${
                      syncStatus === 'synced' ? 'bg-emerald-500' :
                      syncStatus === 'syncing' ? 'bg-amber-500' :
                      syncStatus === 'offline' ? 'bg-zinc-600' : 'bg-red-500'
                    }`}></span>
                  </span>
                  <span className="text-zinc-400 font-medium text-[11px] capitalize">
                    {syncStatus === 'synced' ? 'Synced' :
                     syncStatus === 'syncing' ? 'Syncing...' :
                     syncStatus === 'offline' ? 'Local' : 'Sync Error'}
                  </span>
                </div>
                <div className="h-3 w-px bg-zinc-800"></div>
                <button 
                  onClick={() => setShowSyncModal(true)}
                  className="text-indigo-400 hover:text-indigo-300 font-semibold text-[11px] transition-colors flex items-center gap-1 focus:outline-none"
                  title="Sync Across Devices"
                >
                  Sync Devices
                </button>
                <div className="h-3 w-px bg-zinc-800"></div>
                <button
                  onClick={() => setShowSettingsModal(true)}
                  className="text-zinc-400 hover:text-zinc-300 font-semibold text-[11px] transition-colors flex items-center gap-1 focus:outline-none"
                  title="Calendar Settings"
                >
                  <Settings className="w-3 h-3" />
                </button>
              </div>
            </div>
            
            <div className="w-full md:w-1/3">
              <div className="flex justify-between text-xs font-medium text-zinc-400 mb-1">
                <span className="flex items-center gap-2">Global Progress <span className="text-amber-500 font-bold ml-1">🔥 {streak} day streak</span></span>
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
              <option value="🔴 P0">🔴 P0 (Must Know)</option>
              <option value="🟡 P1">🟡 P1 (Important)</option>
              <option value="🟢 P2">🟢 P2 (Good to Know)</option>
              <option value="-">Buffer / Review</option>
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
            {currentRoadmap.phases.reduce((sum, p) => sum + p.items.reduce((s, i) => s + (i.estimatedHours || 0), 0), 0) > 0 && (
              <span className="text-xs text-zinc-500 ml-2">
                (~{Math.round(currentRoadmap.phases.reduce((sum, p) => sum + p.items.reduce((s, i) => s + (i.estimatedHours || 0), 0), 0))} hours total)
              </span>
            )}
            <div className="h-1.5 flex-1 max-w-md bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 ${currentStyles.bg}`}
                style={{ width: `${activeProgress.percentage}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-zinc-400">{activeProgress.percentage}% ({activeProgress.completed}/{activeProgress.total})</span>
          </div>
        </div>

        {behindStatus && !adaptiveMode.enabled && (
          <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-amber-300">
                ⚠️ You're {behindStatus.daysBehind} days behind schedule
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Drop lower-priority items to catch up?{tracksBehindCount > 1 && ` (${tracksBehindCount} tracks behind overall)`}
              </p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setAdaptiveMode({ enabled: true, droppedPriority: behindStatus.daysBehind > 10 ? 'P1' : 'P2' })}
                className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold rounded-lg transition-colors">
                Adapt Schedule
              </button>
              <button onClick={() => setAdaptiveMode({ enabled: true, droppedPriority: null })}
                className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold rounded-lg transition-colors">
                Keep All
              </button>
            </div>
          </div>
        )}

        {todaysPlan && (
          <div className="mb-8 p-5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl">
            <h3 className="text-lg font-bold text-zinc-100 mb-3 flex items-center gap-2">
              📋 Today's Plan
              <span className="text-xs font-normal text-zinc-500">
                {todaysPlan.totalHours.toFixed(1)}h / {todaysPlan.budget}h budget
              </span>
            </h3>
            <div className="space-y-2">
              {todaysPlan.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-zinc-900/60 rounded-lg border border-zinc-800/50">
                  <button onClick={() => toggleTask(item.taskId)} className="flex-shrink-0">
                    {completedTasks[item.taskId]?.done ? (
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <Circle className="w-5 h-5 text-zinc-600" />
                    )}
                  </button>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-zinc-500">{item.roadmapTitle} · Day {item.day}</span>
                    <p className="text-sm font-medium text-zinc-200 truncate">{item.topic}</p>
                  </div>
                  <span className="text-xs text-zinc-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {item.estimatedHours}h
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* Phases & Days */}
        <div className="space-y-12">
          {currentRoadmap.phases.map(phase => {
            // Skip FAQ phase — we render it separately below
            if (phase.title.includes('FREQUENTLY ASKED')) return null;

            // Filter items in this phase
            let filteredItems = phase.items.filter(item => {
              const matchesSearch = item.topic.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                    item.tasks.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                    item.achievement.toLowerCase().includes(searchQuery.toLowerCase());
              const matchesPriority = filterPriority === 'ALL' || item.priority.includes(filterPriority);
              const isCompleted = completedTasks[`${currentRoadmap.id}-${phase.id}-${item.day}`]?.done;
              const matchesStatus = filterStatus === 'ALL' || 
                                   (filterStatus === 'COMPLETED' && isCompleted) || 
                                   (filterStatus === 'INCOMPLETE' && !isCompleted);
              
              return matchesSearch && matchesPriority && matchesStatus;
            });
            
            if (adaptiveMode.enabled) {
              if (adaptiveMode.droppedPriority === 'P2') {
                filteredItems = filteredItems.filter(i => !i.priority.includes('P2'));
              } else if (adaptiveMode.droppedPriority === 'P1') {
                filteredItems = filteredItems.filter(i => !i.priority.includes('P2') && !i.priority.includes('P1'));
              }
            }

            if (filteredItems.length === 0) return null;


            return (
              <div key={phase.id} className="relative">
                {/* Phase Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`px-3 py-1 rounded text-xs font-bold tracking-wider border ${currentStyles.bgLight}`}>
                    {phase.days}
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-100 flex items-center gap-2">
                    {phase.title}
                  </h3>
                  {(() => {
                    const phaseTotal = phase.items.length;
                    const phaseDone = phase.items.filter(i => completedTasks[`${currentRoadmap.id}-${phase.id}-${i.day}`]?.done).length;
                    const phasePct = phaseTotal > 0 ? Math.round((phaseDone / phaseTotal) * 100) : 0;
                    return (
                      <div className="flex items-center gap-2 ml-auto">
                        <div className="h-1.5 w-24 bg-zinc-800 rounded-full overflow-hidden">
                          <div className={`h-full transition-all duration-500 ${currentStyles.bg}`} style={{ width: `${phasePct}%` }}></div>
                        </div>
                        <span className="text-xs text-zinc-500">{phaseDone}/{phaseTotal}</span>
                      </div>
                    );
                  })()}
                  <div className="flex-1 h-px bg-zinc-800"></div>
                </div>

                {/* Day Items Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {filteredItems.map(item => {
                    const taskId = `${currentRoadmap.id}-${phase.id}-${item.day}`;
                    const completionData = completedTasks[taskId];
                    const isCompleted = !!completionData?.done;
                    const noteText = notes[taskId] || '';
                    const mappedDate = dayToDate(item.day);

                    return (
                      <DayCard 
                        key={taskId}
                        taskId={taskId}
                        item={item} 
                        isCompleted={isCompleted} 
                        completionData={completionData}
                        onToggle={() => toggleTask(taskId)}
                        onSetConfidence={(level) => setConfidence(taskId, level)}
                        styles={currentStyles}
                        noteText={noteText}
                        onUpdateNote={(text) => updateNote(taskId, text)}
                        mappedDate={mappedDate}
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

      {/* Sync Devices Modal */}
      {showSyncModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative overflow-hidden animate-slideUp">
            {/* Ambient decorative glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <h3 className="text-lg font-bold text-zinc-100 mb-2 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-indigo-400" />
              Sync Across Devices
            </h3>
            
            <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
              Use this link to sync your progress automatically on another phone, tablet, or browser. No login needed!
            </p>
            
            {/* Sync URL Display */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-3 mb-4 flex items-center justify-between gap-3">
              <div className="text-xs font-mono text-zinc-400 overflow-x-auto whitespace-nowrap scrollbar-none py-1 flex-1">
                {`${window.location.protocol}//${window.location.host}${window.location.pathname}?sync=${syncId}`}
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}${window.location.pathname}?sync=${syncId}`);
                  setCopySuccess(true);
                  setTimeout(() => setCopySuccess(false), 2000);
                }}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
              >
                {copySuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy Link
                  </>
                )}
              </button>
            </div>

            {/* Manual Sync Connection */}
            <div className="border-t border-zinc-800/80 pt-4 mt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Connect to another session</h4>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Paste Sync ID or Link..."
                  id="manual-sync-input"
                  className="bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-300 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 flex-1"
                />
                <button
                  onClick={async () => {
                    const inputVal = document.getElementById('manual-sync-input').value.trim();
                    if (!inputVal) return;
                    
                    let targetId = inputVal;
                    try {
                      if (inputVal.includes('?')) {
                        const urlParams = new URLSearchParams(inputVal.split('?')[1]);
                        const extracted = urlParams.get('sync');
                        if (extracted) targetId = extracted;
                      }
                    } catch (e) {
                      console.error("Failed to parse input URL:", e);
                    }
                    
                    if (targetId) {
                      localStorage.setItem('roadmap_sync_id', targetId);
                      setSyncId(targetId);
                      setShowSyncModal(false);
                      window.location.reload();
                    }
                  }}
                  className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 hover:text-zinc-100 rounded-lg text-xs font-semibold transition-colors"
                >
                  Connect
                </button>
              </div>
            </div>
            
            {/* Close Button */}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShowSyncModal(false)}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl text-sm font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showSettingsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative overflow-hidden animate-slideUp">
            <h3 className="text-lg font-bold text-zinc-100 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-400" />
              Calendar Settings
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Start Date</label>
                <input 
                  type="date" 
                  value={calendarSettings.startDate}
                  onChange={e => setCalendarSettings(s => ({ ...s, startDate: e.target.value }))}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-300 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Daily Hours Budget ({calendarSettings.dailyHoursBudget}h)</label>
                <input 
                  type="range" 
                  min="2" max="10" step="0.5" 
                  value={calendarSettings.dailyHoursBudget}
                  onChange={e => setCalendarSettings(s => ({ ...s, dailyHoursBudget: parseFloat(e.target.value) }))}
                  className="w-full accent-indigo-500"
                />
              </div>
            </div>
            
            <div className="flex justify-end mt-6 gap-3">
              <button
                onClick={() => setShowSettingsModal(false)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

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
function DayCard({ taskId, item, isCompleted, completionData, onToggle, onSetConfidence, styles, noteText, onUpdateNote, mappedDate, disabled }) {
  const [notesOpen, setNotesOpen] = useState(false);

  // Priority color mapping
  const priorityColors = {
    'MUST KNOW': 'text-red-400 bg-red-400/10 ring-red-400/20',
    'IMPORTANT': 'text-amber-400 bg-amber-400/10 ring-amber-400/20',
    'GOOD TO KNOW': 'text-blue-400 bg-blue-400/10 ring-blue-400/20',
    'NICE TO HAVE': 'text-sky-400 bg-sky-400/10 ring-sky-400/20',
    '🔴 P0': 'text-red-400 bg-red-400/10 ring-red-400/20',
    '🟡 P1': 'text-amber-400 bg-amber-400/10 ring-amber-400/20',
    '🟢 P2': 'text-emerald-400 bg-emerald-400/10 ring-emerald-400/20',
    '-': 'text-zinc-500 bg-zinc-500/10 ring-zinc-500/20',
  };

  return (
    <div className={`flex flex-col p-5 rounded-xl border transition-all duration-300 ${
      isCompleted 
        ? 'bg-zinc-900/50 border-zinc-800/50 opacity-60' 
        : disabled ? 'bg-zinc-900/30 border-zinc-800/30 grayscale opacity-80' : `bg-zinc-900 border-zinc-800 ${styles.dayHover}`
    }`}>
      
      <div className="flex items-start gap-4">
        {/* Checkbox */}
        <button 
          onClick={onToggle}
          disabled={disabled}
          className="mt-1 flex-shrink-0 focus:outline-none"
        >
          {isCompleted ? (
            <CheckCircle className={`w-6 h-6 ${styles.textIcon}`} />
          ) : (
            <Circle className={`w-6 h-6 ${disabled ? 'text-zinc-700' : 'text-zinc-600 hover:text-zinc-400'} transition-colors`} />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="text-sm font-medium text-zinc-500">
              Day {item.day}
              {mappedDate && <span className="ml-1 text-zinc-600">· {mappedDate.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}</span>}
            </span>
            {item.estimatedHours && (
              <span className="text-xs text-zinc-500 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {item.estimatedHours}h
              </span>
            )}
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
            {item.resource && (
              <div className="mt-2 flex items-start gap-2 text-xs text-zinc-500">
                <BookOpen className="w-3 h-3 mt-0.5 flex-shrink-0" />
                <span>{item.resource}</span>
              </div>
            )}
            {isCompleted && (
              <div className="flex items-center gap-1.5 mt-1.5">
                {completionData?.confidence === 0 ? (
                  <>
                    <span className="text-[10px] text-zinc-500">Confidence:</span>
                    {[1,2,3,4,5].map(n => (
                      <button key={n} onClick={() => onSetConfidence(n)} 
                        className="w-4 h-4 rounded-full border border-zinc-600 hover:bg-amber-500/50 transition-colors text-[8px] flex items-center justify-center text-zinc-400 hover:text-white">
                        {n}
                      </button>
                    ))}
                  </>
                ) : (
                  <span className="text-[10px] text-zinc-500">
                    Confidence: {'⭐'.repeat(completionData?.confidence || 0)}
                  </span>
                )}
              </div>
            )}
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
              id={`note-${taskId}`}
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
