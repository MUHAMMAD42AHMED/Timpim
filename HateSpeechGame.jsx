import React from 'react';

const HateSpeechGame = () => {
    const [input, setInput] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Analyze the input for hate speech
        if (input.includes('hate')) {
            setMessage('Your input contains hate speech. Please refrain from using such language.');
        } else {
            setMessage('Thank you for your input!');
        }
    };

    return (
        <div>
            <h1>Hate Speech Game</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message here"
                />
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default HateSpeechGame;