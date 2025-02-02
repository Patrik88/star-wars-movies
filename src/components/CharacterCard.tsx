import useSWR from 'swr';
import { Character } from '../types';

const fetcher = (url: string): Promise<Character> =>
  fetch(url).then((res) => res.json());

interface CharacterCardProps {
  characterUrl: string;
}

export const CharacterCard = ({ characterUrl }: CharacterCardProps) => {
  // Using SWR with suspense to fetch the character data.
  // Note: SWR caches data globally by default.
  const { data } = useSWR<Character>(characterUrl, fetcher, { suspense: true });

  return (
    <article
      className="character-card"
      style={{
        border: '1px solid #ddd',
        margin: '0px',
        textAlign: 'center'
      }}
    >
      <h4 style={{ margin: '0px' }}>{data?.name}</h4>
    </article>
  );
}; 