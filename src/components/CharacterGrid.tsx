import React from 'react';
import { CharacterCard } from './CharacterCard';

interface CharacterGridProps {
  characterUrls: string[];
}

export const CharacterGrid = ({ characterUrls }: CharacterGridProps) => {
  return (
    <div className="grid">
      {characterUrls.map((url) => (
        <React.Suspense
          key={url}
          fallback={
            <article
              style={{
                border: '1px solid #ddd',
                margin: '0px',
                textAlign: 'center'
              }}
            >
              <p style={{ margin: '0px' }}>Loading character...</p>
            </article>
          }
        >
          <CharacterCard characterUrl={url} />
        </React.Suspense>
      ))}
    </div>
  );
}; 