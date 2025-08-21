import React, { useState } from 'react';
import './armstrongchecker.css';  // Import the CSS file

function ArmstrongChecker() {
    const [inputNumber, setInputNumber] = useState('');
    const [result, setResult] = useState('');
    const [isArmstrong, setIsArmstrong] = useState(false);

    const handleButtonClick = () => {
        const num = parseInt(inputNumber, 10);

        if (isNaN(num) || num < 0) {
            alert('Please enter a valid positive number');
            return;
        }

        const digits = inputNumber.split('').map(Number);
        const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, digits.length), 0);

        const armstrong = num === sum;

        setResult(
            armstrong
                ? `${num} is an Armstrong number!`
                : `${num} is not an Armstrong number.`
        );
        setIsArmstrong(armstrong);
    };

    return (
        <div className="container">
            <h2 className="app-title">
                Is It An Armstrong Number?
            </h2>
            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder="Enter a number"
                    value={inputNumber}
                    onChange={(e) => setInputNumber(e.target.value)}
                    className={`input ${isArmstrong ? 'input-focus' : ''}`}  // Apply focus class conditionally
                />
                <button
                    id="btn"
                    onClick={handleButtonClick}
                    className="button"  // Use button class
                >
                    Check
                </button>
            </div>
            <p
                className={`result ${isArmstrong ? 'success' : 'error'}`}  // Apply success or error class
            >
                {result}
            </p>
        </div>
    );
}

export default ArmstrongChecker;
