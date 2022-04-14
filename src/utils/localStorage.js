
export const setObjectData = (key, data) => {
    if(typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, JSON.stringify(data));
    }
}

export const getObjectData = (key) => {
    if(typeof window !== 'undefined' && window.localStorage) {
        const jsonData = window.localStorage.getItem(key);
        if(jsonData) {
            try {
                return JSON.parse(jsonData);
            }
            catch {
                return false;
            }
        }
        return false;
    }
    return false;
}

export const setStringData = (key, value) => {
    if(typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, value);
    }
}

export const getStringData = (key) => {
    if(typeof window !== 'undefined' && window.localStorage) {
        return window.localStorage.getItem(key);
    }
    return false;
}

export const removeItem = (key) => {
    if(typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(key);
    }
}