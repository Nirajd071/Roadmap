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
  // Arrays & Strings (15)
  { id: 'faq-1', category: 'Arrays & Strings', name: 'Two Sum', link: 'https://leetcode.com/problems/two-sum/', difficulty: 'Easy' },
  { id: 'faq-2', category: 'Arrays & Strings', name: 'Best Time to Buy and Sell Stock', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', difficulty: 'Easy' },
  { id: 'faq-3', category: 'Arrays & Strings', name: 'Contains Duplicate', link: 'https://leetcode.com/problems/contains-duplicate/', difficulty: 'Easy' },
  { id: 'faq-4', category: 'Arrays & Strings', name: 'Product of Array Except Self', link: 'https://leetcode.com/problems/product-of-array-except-self/', difficulty: 'Medium' },
  { id: 'faq-5', category: 'Arrays & Strings', name: 'Maximum Subarray (Kadane\'s)', link: 'https://leetcode.com/problems/maximum-subarray/', difficulty: 'Medium' },
  { id: 'faq-6', category: 'Arrays & Strings', name: 'Merge Intervals', link: 'https://leetcode.com/problems/merge-intervals/', difficulty: 'Medium' },
  { id: 'faq-7', category: 'Arrays & Strings', name: 'Trapping Rain Water', link: 'https://leetcode.com/problems/trapping-rain-water/', difficulty: 'Hard' },
  { id: 'faq-8', category: 'Arrays & Strings', name: 'Valid Anagram', link: 'https://leetcode.com/problems/valid-anagram/', difficulty: 'Easy' },
  { id: 'faq-9', category: 'Arrays & Strings', name: 'Longest Substring Without Repeating Characters', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', difficulty: 'Medium' },
  { id: 'faq-10', category: 'Arrays & Strings', name: 'Group Anagrams', link: 'https://leetcode.com/problems/group-anagrams/', difficulty: 'Medium' },
  { id: 'faq-11', category: 'Arrays & Strings', name: '3Sum', link: 'https://leetcode.com/problems/3sum/', difficulty: 'Medium' },
  { id: 'faq-12', category: 'Arrays & Strings', name: 'Container With Most Water', link: 'https://leetcode.com/problems/container-with-most-water/', difficulty: 'Medium' },
  { id: 'faq-13', category: 'Arrays & Strings', name: 'Rotate Array', link: 'https://leetcode.com/problems/rotate-array/', difficulty: 'Medium' },
  { id: 'faq-14', category: 'Arrays & Strings', name: 'Move Zeroes', link: 'https://leetcode.com/problems/move-zeroes/', difficulty: 'Easy' },
  { id: 'faq-15', category: 'Arrays & Strings', name: 'Sliding Window Maximum', link: 'https://leetcode.com/problems/sliding-window-maximum/', difficulty: 'Hard' },
  // Linked Lists (6)
  { id: 'faq-16', category: 'Linked Lists', name: 'Reverse Linked List', link: 'https://leetcode.com/problems/reverse-linked-list/', difficulty: 'Easy' },
  { id: 'faq-17', category: 'Linked Lists', name: 'Merge Two Sorted Lists', link: 'https://leetcode.com/problems/merge-two-sorted-lists/', difficulty: 'Easy' },
  { id: 'faq-18', category: 'Linked Lists', name: 'Linked List Cycle', link: 'https://leetcode.com/problems/linked-list-cycle/', difficulty: 'Easy' },
  { id: 'faq-19', category: 'Linked Lists', name: 'Remove Nth Node From End', link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/', difficulty: 'Medium' },
  { id: 'faq-20', category: 'Linked Lists', name: 'Copy List with Random Pointer', link: 'https://leetcode.com/problems/copy-list-with-random-pointer/', difficulty: 'Medium' },
  { id: 'faq-21', category: 'Linked Lists', name: 'Merge K Sorted Lists', link: 'https://leetcode.com/problems/merge-k-sorted-lists/', difficulty: 'Hard' },
  // Stacks & Queues (5)
  { id: 'faq-22', category: 'Stacks & Queues', name: 'Valid Parentheses', link: 'https://leetcode.com/problems/valid-parentheses/', difficulty: 'Easy' },
  { id: 'faq-23', category: 'Stacks & Queues', name: 'Min Stack', link: 'https://leetcode.com/problems/min-stack/', difficulty: 'Medium' },
  { id: 'faq-24', category: 'Stacks & Queues', name: 'Daily Temperatures', link: 'https://leetcode.com/problems/daily-temperatures/', difficulty: 'Medium' },
  { id: 'faq-25', category: 'Stacks & Queues', name: 'Largest Rectangle in Histogram', link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/', difficulty: 'Hard' },
  { id: 'faq-26', category: 'Stacks & Queues', name: 'Evaluate Reverse Polish Notation', link: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/', difficulty: 'Medium' },
  // Binary Search (4)
  { id: 'faq-27', category: 'Binary Search', name: 'Binary Search', link: 'https://leetcode.com/problems/binary-search/', difficulty: 'Easy' },
  { id: 'faq-28', category: 'Binary Search', name: 'Search in Rotated Sorted Array', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', difficulty: 'Medium' },
  { id: 'faq-29', category: 'Binary Search', name: 'Koko Eating Bananas', link: 'https://leetcode.com/problems/koko-eating-bananas/', difficulty: 'Medium' },
  { id: 'faq-30', category: 'Binary Search', name: 'Median of Two Sorted Arrays', link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', difficulty: 'Hard' },
  // Trees (8)
  { id: 'faq-31', category: 'Trees', name: 'Maximum Depth of Binary Tree', link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', difficulty: 'Easy' },
  { id: 'faq-32', category: 'Trees', name: 'Invert Binary Tree', link: 'https://leetcode.com/problems/invert-binary-tree/', difficulty: 'Easy' },
  { id: 'faq-33', category: 'Trees', name: 'Validate Binary Search Tree', link: 'https://leetcode.com/problems/validate-binary-search-tree/', difficulty: 'Medium' },
  { id: 'faq-34', category: 'Trees', name: 'Lowest Common Ancestor of BST', link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/', difficulty: 'Medium' },
  { id: 'faq-35', category: 'Trees', name: 'Binary Tree Level Order Traversal', link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/', difficulty: 'Medium' },
  { id: 'faq-36', category: 'Trees', name: 'Kth Smallest Element in BST', link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/', difficulty: 'Medium' },
  { id: 'faq-37', category: 'Trees', name: 'Diameter of Binary Tree', link: 'https://leetcode.com/problems/diameter-of-binary-tree/', difficulty: 'Easy' },
  { id: 'faq-38', category: 'Trees', name: 'Binary Tree Maximum Path Sum', link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/', difficulty: 'Hard' },
  // Graphs (6)
  { id: 'faq-39', category: 'Graphs', name: 'Number of Islands', link: 'https://leetcode.com/problems/number-of-islands/', difficulty: 'Medium' },
  { id: 'faq-40', category: 'Graphs', name: 'Course Schedule', link: 'https://leetcode.com/problems/course-schedule/', difficulty: 'Medium' },
  { id: 'faq-41', category: 'Graphs', name: 'Clone Graph', link: 'https://leetcode.com/problems/clone-graph/', difficulty: 'Medium' },
  { id: 'faq-42', category: 'Graphs', name: 'Rotting Oranges', link: 'https://leetcode.com/problems/rotting-oranges/', difficulty: 'Medium' },
  { id: 'faq-43', category: 'Graphs', name: 'Network Delay Time', link: 'https://leetcode.com/problems/network-delay-time/', difficulty: 'Medium' },
  { id: 'faq-44', category: 'Graphs', name: 'Word Ladder', link: 'https://leetcode.com/problems/word-ladder/', difficulty: 'Hard' },
  // DP (8)
  { id: 'faq-45', category: 'Dynamic Programming', name: 'Climbing Stairs', link: 'https://leetcode.com/problems/climbing-stairs/', difficulty: 'Easy' },
  { id: 'faq-46', category: 'Dynamic Programming', name: 'House Robber', link: 'https://leetcode.com/problems/house-robber/', difficulty: 'Medium' },
  { id: 'faq-47', category: 'Dynamic Programming', name: 'Coin Change', link: 'https://leetcode.com/problems/coin-change/', difficulty: 'Medium' },
  { id: 'faq-48', category: 'Dynamic Programming', name: 'Longest Increasing Subsequence', link: 'https://leetcode.com/problems/longest-increasing-subsequence/', difficulty: 'Medium' },
  { id: 'faq-49', category: 'Dynamic Programming', name: 'Longest Common Subsequence', link: 'https://leetcode.com/problems/longest-common-subsequence/', difficulty: 'Medium' },
  { id: 'faq-50', category: 'Dynamic Programming', name: 'Edit Distance', link: 'https://leetcode.com/problems/edit-distance/', difficulty: 'Medium' },
  { id: 'faq-51', category: 'Dynamic Programming', name: 'Partition Equal Subset Sum', link: 'https://leetcode.com/problems/partition-equal-subset-sum/', difficulty: 'Medium' },
  { id: 'faq-52', category: 'Dynamic Programming', name: '0/1 Knapsack (GFG)', link: 'https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/', difficulty: 'Medium' },
  // Design (4)
  { id: 'faq-53', category: 'Design', name: 'LRU Cache', link: 'https://leetcode.com/problems/lru-cache/', difficulty: 'Medium' },
  { id: 'faq-54', category: 'Design', name: 'Implement Trie (Prefix Tree)', link: 'https://leetcode.com/problems/implement-trie-prefix-tree/', difficulty: 'Medium' },
  { id: 'faq-55', category: 'Design', name: 'Design Twitter', link: 'https://leetcode.com/problems/design-twitter/', difficulty: 'Medium' },
  { id: 'faq-56', category: 'Design', name: 'Find Median from Data Stream', link: 'https://leetcode.com/problems/find-median-from-data-stream/', difficulty: 'Hard' },
  // Greedy & Sorting (4)
  { id: 'faq-57', category: 'Greedy & Sorting', name: 'Jump Game', link: 'https://leetcode.com/problems/jump-game/', difficulty: 'Medium' },
  { id: 'faq-58', category: 'Greedy & Sorting', name: 'Non-overlapping Intervals', link: 'https://leetcode.com/problems/non-overlapping-intervals/', difficulty: 'Medium' },
  { id: 'faq-59', category: 'Greedy & Sorting', name: 'Top K Frequent Elements', link: 'https://leetcode.com/problems/top-k-frequent-elements/', difficulty: 'Medium' },
  { id: 'faq-60', category: 'Greedy & Sorting', name: 'Kth Largest Element in an Array', link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/', difficulty: 'Medium' },
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
                Day 179
              </div>
              <h3 className="text-xl font-semibold text-zinc-100">🔥 Top 60 Must-Solve Questions (College Placement)</h3>
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
