import React, { useState } from 'react';
//import './Anagramstyle.css'; 

function AnagramChecker() {
    const [word1, setWord1] = useState('');
    const [word2, setWord2] = useState('');
    const [result, setResult] = useState('');
    const [isAnagram, setIsAnagram] = useState(false);
    const [checkNumbers, setCheckNumbers] = useState(false);

    const handleWord1Change = (e) => {
        setWord1(e.target.value.toLowerCase());
    };

    const handleWord2Change = (e) => {
        setWord2(e.target.value.toLowerCase());
    };

    const handleToggleChange = () => {
        setCheckNumbers(!checkNumbers);
    };

    const checkAnagram = () => {
    
        // Remove spaces and punctuation from both words
        const cleanedWord1 = checkNumbers
            ? word1.replace(/[^0-9]/g, '')
            : word1.replace(/[^\w]/g, '');

        const cleanedWord2 = checkNumbers
            ? word2.replace(/[^0-9]/g, '')
            : word2.replace(/[^\w]/g, '');

        // Check if the lengths are the same
        if (cleanedWord1.length !== cleanedWord2.length) {
            setResult('Not an anagram');
            setIsAnagram(false);
            return;
        }

        // Count character occurrences in the first word
        const charCount1 = {};
        for (const char of cleanedWord1) {
            charCount1[char] = (charCount1[char] || 0) + 1;
        }

        // Count character occurrences in the second word
        const charCount2 = {};
        for (const char of cleanedWord2) {
            charCount2[char] = (charCount2[char] || 0) + 1;
        }

        // Compare character counts
        for (const char in charCount1) {
            if (charCount1[char] !== charCount2[char]) {
                setResult('Not an anagram');
                setIsAnagram(false);
                return;
            }
        }

        // If all character counts are the same, it's an anagram
        setResult("It's an anagram!");
        setIsAnagram(true);
    };

    return (
        <div className="container">
            <h1 className="heading">Anagram Checker</h1>
            <p className="desc" style={{color:'black'}}>
                Enter two  {checkNumbers ? 'numbers' : 'words'}  to check if they are
                anagrams:
            </p>
            <label className="toggleLabel">
                Check for numbers:
                <input
                    type="checkbox"
                    checked={checkNumbers}
                    onChange={handleToggleChange}
                    className="toggleCheckbox"
                />
            </label>
            <div className="inputs">
                <input
                    type="text"
                    placeholder=
                        {`Enter ${checkNumbers ? 'number' : 'word'} 1`}
                    value={word1}
                    onChange={handleWord1Change}
                    className="input"
                />
                
                <input
                    type="text"
                    placeholder=
                        {`Enter ${checkNumbers ? 'number' : 'word'} 2`}
                    value={word2}
                    onChange={handleWord2Change}
                    className="input"
                />
            </div>
          
            <button id="btn" onClick={checkAnagram} 
                    className="button">
                Check
            </button>
            <p id="result" 
               className={isAnagram ? 'result success' : 'result error'}>
                {result}
            </p>
        </div>
    );
}
export default AnagramChecker;