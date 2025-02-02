import React from 'react';
import { CharacterCard } from './CharacterCard';
import { Skeleton } from './Skeleton';

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
                border: '1px solid hsla(0, 0.00%, 86.70%, 0.20)',
                margin: '0px',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Skeleton lines={1} heights="1.5em" widths="80%" marginBottom="0" />
            </article>
          }
        >
          <CharacterCard characterUrl={url} />
        </React.Suspense>
      ))}
    </div>
  );
}; 