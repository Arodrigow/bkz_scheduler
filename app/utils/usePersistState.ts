import { useEffect, useState } from "react";

export default function usePersistState<T>(initialValue: T, id: string): [T, (newState: T) => void] {
    const [state, setState] = useState<T>(initialValue);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const localStorageValue = localStorage.getItem('state:' + id);
            if (localStorageValue) {
                setState(JSON.parse(localStorageValue));
            }
            setIsHydrated(true);
        }
    }, [id]);

    useEffect(() => {
        if (isHydrated) {
            localStorage.setItem('state:' + id, JSON.stringify(state));
        }
    }, [state, id, isHydrated]);

    return [state, setState];
}
