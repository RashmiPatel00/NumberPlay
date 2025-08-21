import React, { useState } from 'react';

function HappyNumberChecker() {
    const [inputNumber, setInputNumber] = useState('');
    const [result, setResult] = useState('');
    const [isHappyNumber, setIsHappyNumber] = useState(false);

    const checkHappyNumber = (num) => {
        const seenNumbers = new Set();

        while (num !== 1 && !seenNumbers.has(num)) {
            seenNumbers.add(num);
            num = num
                .toString()
                .split('')
                .reduce((sum, digit) => sum + Math.pow(parseInt(digit, 10), 2), 0);
        }

        return num === 1;
    };

    const handleButtonClick = () => {
        // Trim whitespace and check for invalid characters
        const number = inputNumber.trim();

        if (!/^\d+$/.test(number)) {
            setResult('Invalid input. Please enter only positive numbers.');
            setIsHappyNumber(false);
            return;
        }

        const happy = checkHappyNumber(parseInt(number, 10));

        setResult(
            happy
                ? "Yes! It's a Happy Number!"
                : 'Nope! Not a Happy Number.'
        );
        setIsHappyNumber(happy);
    };

    return (
        <div className="container">
            <h2 className="app-title">Is It A Happy Number?</h2>
            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder="Enter a number"
                    value={inputNumber}
                    onChange={(e) => setInputNumber(e.target.value)}
                    className={`input ${isHappyNumber ? 'input-focus' : ''}`}
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
                className={`result ${isHappyNumber ? 'success' : 'error'}`}
            >
                {result}
            </p>
        </div>
    );
}

export default HappyNumberChecker;
