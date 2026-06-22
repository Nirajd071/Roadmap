import React, { useState, useEffect, useMemo } from 'react';
import { Search, Filter, BookOpen, CheckCircle, Circle, ChevronDown, ChevronUp, Edit3 } from 'lucide-react';
import { roadmapData } from './data/roadmapData';

const themeStyles = {
  cyan: {
    navActive: 'bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]',
    text: 'text-cyan-400',
    bg: 'bg-cyan-500',
    bgLight: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    dayHover: 'hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]',
    textIcon: 'text-cyan-500',
    bgCardAchieve: 'bg-cyan-500/5 border-cyan-500/10'
  },
  emerald: {
    navActive: 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]',
    text: 'text-emerald-400',
    bg: 'bg-emerald-500',
    bgLight: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    dayHover: 'hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]',
    textIcon: 'text-emerald-500',
    bgCardAchieve: 'bg-emerald-500/5 border-emerald-500/10'
  },
  purple: {
    navActive: 'bg-purple-500/20 text-purple-300 ring-1 ring-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)]',
    text: 'text-purple-400',
    bg: 'bg-purple-500',
    bgLight: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    dayHover: 'hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.1)]',
    textIcon: 'text-purple-500',
    bgCardAchieve: 'bg-purple-500/5 border-purple-500/10'
  },
  amber: {
    navActive: 'bg-amber-500/20 text-amber-300 ring-1 ring-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]',
    text: 'text-amber-400',
    bg: 'bg-amber-500',
    bgLight: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    dayHover: 'hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)]',
    textIcon: 'text-amber-500',
    bgCardAchieve: 'bg-amber-500/5 border-amber-500/10'
  },
  indigo: {
    navActive: 'bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]',
    text: 'text-indigo-400',
    bg: 'bg-indigo-500',
    bgLight: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    dayHover: 'hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.1)]',
    textIcon: 'text-indigo-500',
    bgCardAchieve: 'bg-indigo-500/5 border-indigo-500/10'
  },
  teal: {
    navActive: 'bg-teal-500/20 text-teal-300 ring-1 ring-teal-500/50 shadow-[0_0_15px_rgba(20,184,166,0.2)]',
    text: 'text-teal-400',
    bg: 'bg-teal-500',
    bgLight: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    dayHover: 'hover:border-teal-500/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.1)]',
    textIcon: 'text-teal-500',
    bgCardAchieve: 'bg-teal-500/5 border-teal-500/10'
  }
};

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

  const [searchQuery, setSearchQuery] = useState('');
  const [filterPriority, setFilterPriority] = useState('ALL'); // ALL, MUST KNOW, IMPORTANT, GOOD TO KNOW
  const [filterStatus, setFilterStatus] = useState('ALL'); // ALL, COMPLETED, INCOMPLETE

  // Save to localStorage whenever completedTasks or notes change
  useEffect(() => {
    localStorage.setItem('roadmap_completed_tasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  useEffect(() => {
    localStorage.setItem('roadmap_notes', JSON.stringify(notes));
  }, [notes]);

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
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

  const currentRoadmap = roadmapData.find(r => r.id === activeRoadmap);
  const currentStyles = themeStyles[currentRoadmap.color] || themeStyles.indigo;

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
              <h1 className="text-xl md:text-2xl font-bold text-zinc-100">{globalProgress.total}-Day Master AI Roadmap</h1>
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

          {/* Navigation Tabs */}
          <nav className="flex overflow-x-auto gap-2 mt-6 pb-2 no-scrollbar">
            {roadmapData.map(roadmap => {
              const styles = themeStyles[roadmap.color] || themeStyles.indigo;
              return (
                <button
                  key={roadmap.id}
                  onClick={() => setActiveRoadmap(roadmap.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeRoadmap === roadmap.id 
                      ? styles.navActive
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                  }`}
                >
                  {roadmap.title}
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

      </main>
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
