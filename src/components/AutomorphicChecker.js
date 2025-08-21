import React, { useState } from 'react';

function AutomorphicChecker() {
    const [inputNumber, setInputNumber] = useState('');
    const [result, setResult] = useState('');
    const [isAutomorphic, setIsAutomorphic] = useState(false);

    const checkAutomorphic = (num) => {
        const square = num * num;
        return square.toString().endsWith(num.toString());
    };

    const handleButtonClick = () => {
        const number = inputNumber.trim();

        if (!/^\d+$/.test(number)) {
            alert('Please enter a valid positive number.');
            return;
        }

        const automorphic = checkAutomorphic(parseInt(number, 10));

        setResult(
            automorphic
                ? "Yes! It's an automorphic number!"
                : 'Nope! Not an automorphic number.'
        );
        setIsAutomorphic(automorphic);
    };

    return (
        <div className="container">
            <h2 className="app-title">Is It An Automorphic Number?</h2>
            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder="Enter a number"
                    value={inputNumber}
                    onChange={(e) => setInputNumber(e.target.value)}
                    className={`input ${isAutomorphic ? 'input-focus' : ''}`}
                />
                <button
                    id="btn"
                    onClick={handleButtonClick}
                    className="button"
                >
                    Check
                </button>
            </div>
            <p
                className={`result ${isAutomorphic ? 'success' : 'error'}`}
            >
                {result}
            </p>
        </div>
    );
}

export default AutomorphicChecker;
