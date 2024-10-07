import { useState } from "react";

// Code is written by Aniket Kadam
type HistoryItem = {
    input: number,
    finalstate: number
}

const Code9 = () => {
    const [counter, setCounter] = useState<number>(0);
    const [history, setHistory] = useState<HistoryItem[]>([{ input: 0, finalstate: 0 }]);

    const handleInput = (item: number): void => {
        setCounter(prev => {
            const newCounter = prev + item;
            const newHistory = [...history, { input: item, finalstate: newCounter }];
            setHistory(newHistory); // Update history
            return newCounter;
        });
    }

    const handleUndo = (): void => {
        if (history.length > 1) { // Prevent undoing beyond the first state
            const newHistory = [...history];
            newHistory.pop(); // Remove the last action
            const lastState = newHistory[newHistory.length - 1]; // Get the previous state
            setCounter(lastState.finalstate); // Set the counter to the previous state
            setHistory(newHistory); // Update the history
        }
    }

    const handleRedo = (): void => {
        // Redo functionality (to be implemented later)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button onClick={() => handleInput(1)} style={{ margin: '10px' }}>+1</button>
                <button onClick={() => handleInput(10)} style={{ margin: '10px' }}>+10</button>
                <button onClick={() => handleInput(100)} style={{ margin: '10px' }}>+100</button>
            </div>

            <div>
                <h1>Counter: {counter}</h1>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button style={{ margin: '10px' }} onClick={handleUndo}>Undo</button>
                <button style={{ margin: '10px' }} onClick={handleRedo}>Redo</button>
            </div>

            <div>
                {history.length > 1 && (
                    <div>
                        <h2>History:</h2>
                        {history.map((item, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                <p>Input: {item.input} - Final State: {item.finalstate}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button onClick={() => handleInput(-1)} style={{ margin: '10px' }}>-1</button>
                <button onClick={() => handleInput(-10)} style={{ margin: '10px' }}>-10</button>
                <button onClick={() => handleInput(-100)} style={{ margin: '10px' }}>-100</button>
            </div>

        </div>
    )
}

export default Code9;
