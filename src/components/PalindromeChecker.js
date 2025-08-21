import React, { useState } from 'react';
//import './palindromechecker.css';

function PalindromeChecker() {
    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState('');
    const [isPalindrome, setIsPalindrome] = useState(false);

    const handleButtonClick = () => {
        const text = inputText
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]/g, '');

        if (text.length === 0) {
            alert('Input cannot be empty');
            return;
        }

        const cleanedText = text.split('').reverse().join('');
        const palindrome = text === cleanedText;

        setResult(
            palindrome ? "Yes. It's a palindrome!" : 'Nope. Not a palindrome!'
        );
        setIsPalindrome(palindrome);
    };

    return (
        <div className="container">
            <h2 className="app-title">Is It A Palindrome?</h2>
            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder="Enter a word"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className={`input ${isPalindrome ? 'input-focus' : ''}`}
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
                className={`result ${isPalindrome ? 'success' : 'error'}`}
            >
                {result}
            </p>
        </div>
    );
}

export default PalindromeChecker;
