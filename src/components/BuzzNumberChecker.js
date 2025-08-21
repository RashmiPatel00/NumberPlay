import React, { useState } from 'react';

function BuzzNumberChecker() {
    const [inputNumber, setInputNumber] = useState('');
    const [result, setResult] = useState('');
    const [isBuzzNumber, setIsBuzzNumber] = useState(false);

    const checkBuzzNumber = (num) => {
        return num % 7 === 0 || num.toString().endsWith('7');
    };

    const handleButtonClick = () => {
        const number = inputNumber.trim();

        if (!/^\d+$/.test(number)) {
            alert('Please enter a valid positive number.');
            return;
        }

        const buzz = checkBuzzNumber(parseInt(number, 10));

        setResult(
            buzz
                ? "Yes! It's a Buzz Number!"
                : 'Nope! Not a Buzz Number.'
        );
        setIsBuzzNumber(buzz);
    };

    return (
        <div className="container">
            <h2 className="app-title">Is It A Buzz Number?</h2>
            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder="Enter a number"
                    value={inputNumber}
                    onChange={(e) => setInputNumber(e.target.value)}
                    className={`input ${isBuzzNumber ? 'input-focus' : ''}`}
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
                className={`result ${isBuzzNumber ? 'success' : 'error'}`}
            >
                {result}
            </p>
        </div>
    );
}

export default BuzzNumberChecker;
