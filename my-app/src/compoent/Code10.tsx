// Code written by Aniket Kadam
import { useEffect, useState } from "react";

const Code10 = () => {
  const [data, setData] = useState<string[]>(["apple", "mango", "cat", "jira"]);
  const [item, setItem] = useState<string>("");
  const [selectedData, setSelectedData] = useState<string[]>([]);

  useEffect(() => {
    if (item.trim() === "") {
      setSelectedData([]); // Clear the list when input is empty
      return;
    }

    const filteredData = data.filter((a) => a.includes(item.trim()));
    setSelectedData(filteredData); // Update with matching data
  }, [item, data]);

  return (
    <div>
      <h1>Search Bar</h1>
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Search..."
      />
      {selectedData.length > 0 && (
        <ul>
          {selectedData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Code10;
