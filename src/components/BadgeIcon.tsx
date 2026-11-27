import React from 'react';
import {
  CheckCircle2,
  Code2,
  Flame,
  Layers,
  LayoutGrid,
  Palette,
  Smartphone,
  Sparkles,
  Trophy,
} from 'lucide-react';
import {BadgeDefinition} from '../types';

export const BadgeIcon: React.FC<{name: BadgeDefinition['iconName']; className?: string}> = ({
  name,
  className = 'w-5 h-5',
}) => {
  switch (name) {
    case 'sparkles':
      return <Sparkles className={className} />;
    case 'code':
      return <Code2 className={className} />;
    case 'layout':
      return <LayoutGrid className={className} />;
    case 'palette':
      return <Palette className={className} />;
    case 'trophy':
      return <Trophy className={className} />;
    case 'flame':
      return <Flame className={className} />;
    case 'check':
      return <CheckCircle2 className={className} />;
    case 'smartphone':
      return <Smartphone className={className} />;
    case 'layers':
      return <Layers className={className} />;
  }
};
