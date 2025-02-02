import React from 'react';

interface SkeletonProps {
  /** Number of "lines" (paragraphs) to render. */
  lines?: number;
  /**
   * Custom heights for the lines. A single string/number applies to all
   * lines unless you provide the same number of items as lines,
   * e.g. ['1em','2em'] for 2 lines.
   */
  heights?: Array<string | number> | string | number;
  /**
   * Custom widths for the lines. A single string/number applies to all
   * lines unless you provide the same number of items as lines,
   * e.g. ['100%', '30%'] for 2 lines.
   */
  widths?: Array<string | number> | string | number;
  /**
   * Custom margin bottom for the lines. A single string/number applies to all
   * lines unless you provide the same number of items as lines,
   * e.g. ['1em','2em'] for 2 lines.
   */
  marginBottom?: Array<string | number> | string | number;
  /**
   * If true, the last line will be 80% width by default.
   */
  lastLineShorter?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  lines = 1,
  heights = null,
  widths = null,
  marginBottom = null,
  lastLineShorter = true,
}) => {
  // Ensure we have arrays to map over
  const arrHeights =
    typeof heights === 'object' ? heights : Array(lines).fill(heights);
  const arrWidths =
    typeof widths === 'object' ? widths : Array(lines).fill(widths);
  const arrMarginBottom =
    typeof marginBottom === 'object' ? marginBottom : Array(lines).fill(marginBottom);

  return (
    <>
      {Array.from({ length: lines }).map((_, i) => {
        const width = arrWidths && arrWidths[i] || null;
        const height = arrHeights && arrHeights[i] || '1em';
        const isLast = i === lines - 1;
        console.log(width, height, isLast);
        return (
          <p
            key={i}
            style={{
              width: width ? width : isLast && lastLineShorter ? '80%' : '100%',
              height,
              marginBottom: arrMarginBottom && arrMarginBottom[i] || null,
            }}
          />
        );
      })}

      <style jsx>{`
        p {
          margin-bottom: 0.4em;
          background-color: hsla(0, 0%, 100%, 0.08);
          border-radius: 0.2em;
          animation: pulse 1.5s ease-in-out infinite;
        }
        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}; 