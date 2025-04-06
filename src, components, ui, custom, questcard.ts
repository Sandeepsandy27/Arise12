// src/components/ui/custom/QuestCard.tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Check, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Quest {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  status: 'completed' | 'pending' | 'in-progress';
  exp: number;
  dueDate?: string;
  icon?: React.ReactNode;
}

interface QuestCardProps {
  quest: Quest;
  onCompleteQuest?: (questId: string) => void;
  className?: string;
}

const QuestCard: React.FC<QuestCardProps> = ({ 
  quest, 
  onCompleteQuest,
  className 
}) => {
  const difficultyColor = {
    'easy': 'bg-green-500/10 text-green-500 border-green-500/20',
    'medium': 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    'hard': 'bg-rose-500/10 text-rose-500 border-rose-500/20'
  };
  
  const statusColor = {
    'completed': 'bg-green-500/10 text-green-500 border-green-500/20',
    'in-progress': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    'pending': 'bg-gray-500/10 text-gray-400 border-gray-500/20'
  };
  
  const handleComplete = () => {
    if (onCompleteQuest && quest.status !== 'completed') {
      onCompleteQuest(quest.id);
    }
  };
  
  return (
    <div 
      className={cn(
        "glass-card p-5 transition-all duration-300 hover:shadow-lg border border-solo-light-gray/20 hover:border-solo-blue/30 animate-fade-in",
        className
      )}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <Badge className={difficultyColor[quest.difficulty]}>
            {quest.difficulty.charAt(0).toUpperCase() + quest.difficulty.slice(1)}
          </Badge>
          
          <Badge className={cn("ml-2", statusColor[quest.status])}>
            {quest.status === 'completed' && <Check className="w-3 h-3 mr-1" />}
            {quest.status === 'in-progress' && <Clock className="w-3 h-3 mr-1" />}
            {quest.status === 'completed' ? 'Completed' : 
             quest.status === 'in-progress' ? 'In Progress' : 'Pending'}
          </Badge>
        </div>
        
        <div className="flex items-center text-solo-blue">
          <Sparkles className="w-4 h-4 mr-1" />
          <span className="text-sm font-semibold">{quest.exp} XP</span>
        </div>
      </div>
      
      <h3 className="text-lg font-display font-semibold mb-2 text-white">{quest.title}</h3>
      
      <p className="text-gray-300 text-sm mb-4">{quest.description}</p>
      
      {quest.dueDate && (
        <div className="text-xs text-gray-400 mb-3 flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          Due: {quest.dueDate}
        </div>
      )}
      
      {quest.status !== 'completed' && onCompleteQuest && (
        <Button 
          onClick={handleComplete}
          variant="outline" 
          className="w-full bg-solo-blue/10 hover:bg-solo-blue/20 border border-solo-blue/30 text-solo-blue"
        >
          Complete Quest
        </Button>
      )}
      
      {quest.status === 'completed' && (
        <div className="w-full p-2 text-center text-green-500 text-sm border border-green-500/20 rounded-md bg-green-500/5">
          <Check className="w-4 h-4 inline-block mr-1" />
          Quest Completed
        </div>
      )}
    </div>
  );
};

export default QuestCard;
            
