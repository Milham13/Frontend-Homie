import React from 'react';

const Alert = ({ type, message, onClose }) => {
    let alertClasses = 'px-4 py-3 rounded relative';

    if (type === 'success') {
        alertClasses += ' bg-green-100 border-green-400 text-green-700';
    } else if (type === 'error') {
        alertClasses += ' bg-red-100 border-red-400 text-red-700';
    }

    return (
        <div className={alertClasses} role="alert">
            <strong className="font-bold"> {type === 'success' ? 'Success!' : 'Error!'}</strong>
            <span className="block sm:inline">{message}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={onClose}>
                <svg className="fill-current h-6 w-6 text-black" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M14.293 5.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 1 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 1 1 1.414-1.414L10 8.586l4.293-4.293z"/>
                </svg>
            </span>
        </div>
    );
};

export default Alert;