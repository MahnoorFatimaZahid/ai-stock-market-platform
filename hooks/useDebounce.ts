'use client';

import { useCallback, useRef } from 'react';
//  useDebounce is a custom hook that takes a callback function and a delay in milliseconds, and returns a debounced version of the callback function. The debounced function will only execute the callback after the specified delay has passed since the last time it was invoked. This is useful for optimizing performance in scenarios like search input, where you want to avoid making API calls on every keystroke.
export function useDebounce(callback: () => void, delay: number) {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    return useCallback(() => {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(callback, delay);
    }, [callback, delay])
}
