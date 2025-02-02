import React from 'react';
import { CharacterCard } from './CharacterCard';
import { Skeleton } from './Skeleton';

interface CharacterGridProps {
  characterUrls: string[];
}

export const CharacterGrid = ({ characterUrls }: CharacterGridProps) => {
  return (
    <>
      <div>
        {characterUrls.map((url) => (
          <React.Suspense
            key={url}
            fallback={
              <article>
                <Skeleton lines={1} heights="1.5em" widths="80%" marginBottom="0" />
              </article>
            }
          >
            <CharacterCard characterUrl={url} />
          </React.Suspense>
        ))}
      </div>

      <style jsx>{`
        div {
          column-count: 3;
          column-gap: 1rem;
          -webkit-column-count: 3;
          -webkit-column-gap: 1rem;
          -moz-column-count: 3;
          -moz-column-gap: 1rem;
        }

        article {
          border: 1px solid hsla(0, 0.00%, 86.70%, 0.20);
          margin: 0px;
          margin-bottom: 1rem;
          text-align: center;
          display: flex;
          justify-content: center;
        }

        @media (max-width: 1140px) {
          div {
            column-count: 1;
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
}; 