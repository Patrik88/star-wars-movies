import React from 'react';
import { CharacterCard } from './CharacterCard';

interface CharacterGridProps {
  characterUrls: string[];
}

export const CharacterGrid = ({ characterUrls }: CharacterGridProps) => {
  return (
    <div
      className="grid"
    >
      {characterUrls.map((url) => (
        <CharacterCard key={url} url={url} />
      ))}
    </div>
  );
}; 