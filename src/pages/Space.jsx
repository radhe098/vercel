import React, { useState } from 'react';
import { format } from 'date-fns';
// import fs from 'fs'

const Space = () => {
  const [entry, setEntry] = useState('');

  const handleInputChange = (event) => {
    setEntry(event.target.value);
  };

  const handleSaveEntry = () => {
    // Get current date and format it
    const currentDate = format(new Date(), 'yyyyMMddHHmmss');
    // Create file name with current date
    const fileName = `${currentDate}.txt`;
    // Create a Blob with the entry content
    const blob = new Blob([entry], { type: 'text/plain' });

    // fs.writeFile(`/vercel/src/data/${fileName}`, entry, (err) => {
    //     if (err) throw err;
    //     console.log('Entry saved successfully.');})

    // Create a URL for the Blob
    // const url = URL.createObjectURL(blob);
    // Create a link element
    // const link = document.createElement('a');
    // Set link attributes
    // link.href = url;
    // link.download = fileName;
    // Simulate click on the link to trigger download
    // link.click();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800">
      <div className="max-w-4xl w-full bg-yellow-200 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Diary Writing Page</h1>
        <textarea
          className="w-full h-[500px] bg-yellow-50 px-4 py-2 mb-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500 text-xl"
          placeholder="Write your diary entry here..."
          value={entry}
          onChange={handleInputChange}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition duration-300"
          onClick={handleSaveEntry}
        >
          Save Entry
        </button>
      </div>
    </div>
  );
};

export default Space;
