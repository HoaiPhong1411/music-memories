export const getvolumeLocalstorage = () => {
    return JSON.parse(localStorage.getItem('volume') || '1');
};

export const setvolumeLocalstorage = async (volume: number) => {
    try {
        localStorage.setItem('volume', JSON.stringify(volume));
        return { message: 'success' };
    } catch (error) {
        return { message: 'error' };
    }
};
