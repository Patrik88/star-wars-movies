import useSWR from 'swr';
import { Character } from '../types';

const fetcher = (url: string): Promise<Character> =>
  fetch(url).then((res) => res.json());

export const useCharacter = (url: string) => {
  const swrOptions = {
    suspense: true,
    dedupingInterval: 60000,
    revalidateOnFocus: false,
    revalidateIfStale: false
  };
  const { data, error } = useSWR<Character>(url, fetcher, swrOptions);
  return {
    character: data,
    isLoading: !data && !error,
    isError: error,
  };
}; 