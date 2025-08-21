import React, { useState } from 'react';

function MagicNumberChecker() {
    const [inputNumber, setInputNumber] = useState('');
    const [result, setResult] = useState('');
    const [isMagicNumber, setIsMagicNumber] = useState(false);

    const calculateMagicNumber = (num) => {
        while (num > 9) {
            num = num
                .toString()
                .split('')
                .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
        }
        return num === 1;
    };

    const handleButtonClick = () => {
        const number = inputNumber.trim();

        if (!/^\d+$/.test(number)) {
            alert('Please enter a valid positive number.');
            return;
        }

        const magic = calculateMagicNumber(parseInt(number, 10));

        setResult(
            magic
                ? "Yes! It's a magic number!"
                : 'Nope! Not a magic number.'
        );
        setIsMagicNumber(magic);
    };

    return (
        <div className="container">
            <h2 className="app-title">Is It A Magic Number?</h2>
            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder="Enter a number"
                    value={inputNumber}
                    onChange={(e) => setInputNumber(e.target.value)}
                    className={`input ${isMagicNumber ? 'input-focus' : ''}`}
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
                className={`result ${isMagicNumber ? 'success' : 'error'}`}
            >
                {result}
            </p>
        </div>
    );
}

export default MagicNumberChecker;
