import { useAlert } from 'react-alert';

const useNotification = () => {
    const alert = useAlert();

    const showSuccess = (message) => {
        alert.removeAll();
        alert.success(message);
    }

    const showError = (message) => {
        alert.removeAll();
        alert.error(message);
    }

    return {
        showError,
        showSuccess
    }
}

export default useNotification;