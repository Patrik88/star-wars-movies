import React from 'react';
import { useCharacter } from '../hooks/useCharacter';

interface CharacterCardProps {
  url: string;
}

export const CharacterCard = ({ url }: CharacterCardProps) => {
  const { character } = useCharacter(url);

  return (
    <div style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', marginBottom: '8px' }}>
      <strong>{character?.name}</strong>
      <p>Gender: {character?.gender}</p>
    </div>
  );
}; 