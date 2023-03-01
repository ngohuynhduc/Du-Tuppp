import { LayoutContext } from '@/store';
import { useContext } from 'react';

export function useStore() {
  const context = useContext(LayoutContext);
  return context;
}
