export const MovieCardSkeleton = ({ key }: { key: number }) => {
  return (
    <>
      <article key={key} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '306px' }}>
        <div style={{ flex: 1 }}>
          {/* <hgroup style={{ display: 'flex', flexDirection: 'column', gap: '0.5em' }}> */}
          <p className="skeleton-text skeleton-text-h2" style={{ height: '1.9em' }}></p>
          <p className="skeleton-text skeleton-text-p" style={{ width: '30%' }}></p>
          {/* </hgroup> */}

          <hr style={{ marginBlock: '1.3em' }} />

          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </article>

      <style jsx>{`
      p {
        height: 1em;
        margin-bottom: 0.4em;
        background-color:hsla(0, 0.00%, 100.00%, 0.08);
        border-radius: 0.2em;
        animation: pulse 1.5s ease-in-out infinite;
      }
      p:last-child {
        width: 80%;
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
  )
}

