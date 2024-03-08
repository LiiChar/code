

const useLocationStorage = () => {
    const getItem = (key: string) => {
        const store = localStorage.getItem(key);

        if (!store) {
            return '';
        }

        return JSON.parse(store);
    }

    const setItem = (key: string, data: any) => {
        const JSONStore = JSON.stringify(data);
        
        localStorage.setItem(key, JSONStore);
    }

    const removeItem = (key: string) => {
        localStorage.removeItem(key);
    }
    

    return {
        getItem,
        setItem,
        removeItem
    }
}

export default useLocationStorage;