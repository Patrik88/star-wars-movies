import useSWR from 'swr';
import { Character } from '../types';

const fetcher = (url: string): Promise<Character> =>
  fetch(url).then((res) => res.json());

export const useCharacter = (url: string) => {
  const { data, error } = useSWR<Character>(url, fetcher, { suspense: true });
  return {
    character: data,
    isLoading: !data && !error,
    isError: error,
  };
}; 