// add code one block to another

import React, { useState } from "react";

const Code4 = () => {
    const [first, setFirst] = useState<string[]>(['apple', 'cat', 'bat', 'cable', 'rat']);
    const [second, setSecond] = useState<string[]>([]);

    const handleChange = (item: string): void => {
        // Check if the item is in the first bucket
        if (first.includes(item)) {
            // If not already in the second bucket, move it
            if (!second.includes(item)) {
                setSecond([...second, item]); // Add item to second bucket
                const filtered = first.filter((item1) => item1 !== item); // Remove from first bucket
                setFirst(filtered);
            }
        } else {
            // If the item is in the second bucket, move it back to the first
            if (!first.includes(item)) {
                setFirst([...first, item]); // Add item to first bucket
                const filtered = second.filter((item1) => item1 !== item); // Remove from second bucket
                setSecond(filtered);
            }
        }
    };

    return (
        <div>
            <h1>Change Buckets</h1>
            <h1>First Bucket</h1>
            {first && (
                <div>
                    {first.map((item, index) => (
                        <div key={index}>
                            <h2>{item}</h2>
                            <button onClick={() => handleChange(item)}>Move</button>
                        </div>
                    ))}
                </div>
            )}

            <h1>Second Bucket</h1>
            {second && (
                <div>
                    {second.map((item, index) => (
                        <div key={index}>
                            <h2>{item}</h2>
                            <button onClick={() => handleChange(item)}>Move</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Code4;
