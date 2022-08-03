import { RefObject, useEffect } from 'react';

export const useOutsideClick = (
    elementRef: RefObject<HTMLElement>,
    handler: () => void,
    attached = true,
): void => {
    const handleClick = (e: Event): void => {
        const target = e.target as HTMLButtonElement;

        if (!elementRef.current) return;

        if (!elementRef.current.contains(target)) {
            handler();
        }

        const link = target.closest('a');

        if (elementRef.current.contains(link)) {
            handler();
        }
    };

    useEffect(() => {
        if (!attached) return;

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [handleClick, attached, elementRef]);
};
