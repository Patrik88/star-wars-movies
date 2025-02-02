import { Skeleton } from './Skeleton';

export const MovieCardSkeleton = ({ key }: { key: number }) => {
  return (
    <>
      <article
        key={key}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          // height: '306px',
        }}
      >
        <div style={{ flex: 1 }}>
          {/* Title and subtitle */}
          <Skeleton lines={2} heights={['1.9em', '1em']} widths={['100%', '40%']} marginBottom={['.5em', '0']} />

          <hr style={{ marginBlock: '1.3em' }} />

          {/* Body content */}
          <Skeleton lines={4} widths={['100%', '90%', '95%', '40%']} />
        </div>

        {/* Footer */}
        <footer style={{ display: 'flex', justifyContent: 'space-between', gap: '1em', alignItems: 'center' }}>
          <Skeleton lines={1} heights="62px" widths="151.6px" marginBottom="0" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.4em', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Skeleton lines={2} heights=".8em" widths={['60%', '80%']} marginBottom="0" />
          </div>
        </footer>
      </article>
    </>
  );
};

