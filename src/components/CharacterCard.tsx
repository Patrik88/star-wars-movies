import { useCharacter } from '@/hooks/useCharacter';

interface CharacterCardProps {
  characterUrl: string;
}

export const CharacterCard = ({ characterUrl }: CharacterCardProps) => {
  const { character } = useCharacter(characterUrl);

  return (
    <article
      className="character-card"
      style={{
        border: '1px solid #ddd',
        margin: '0px',
        textAlign: 'center',
        marginBottom: '1rem',
      }}
    >
      <strong style={{ margin: '0px' }}>{character?.name}</strong>
    </article>
  );
}; 