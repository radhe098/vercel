  import React, { useState } from 'react';
  import { format } from 'date-fns';
  // import { saveAs } from 'file-saver';

  const Space = () => {
    const [title, setTitle] = useState('');
    const [entry, setEntry] = useState('');

    const handletitlechange = (event) => {
      setTitle(event.target.value);
    };
    const handleInputChange = (event) => {
      setEntry(event.target.value);
    };
    const currentDate = format(new Date(), 'yyyyMMddHHmmss');

    const handleSaveEntry = async() => {
      const formdata ={
        date :currentDate,
        title:title,
        entry:entry
        } 
    try 
    {
      const response = await fetch('https://vercel-backend-lake.vercel.app',{
        method: 'POST',
          headers: {
            'Content-Type': 'application/json'} ,
            body: JSON.stringify(formdata)});

      if (response.ok) {
        // Optionally, reset the form after successful submission

        setTitle('');
        setEntry('');
        alert('Diary entry saved successfully');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.log('Error saving diary entry:', error);  
      alert('Failed to save diary entry. Please try again later.');
    }
  }; 

    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800">
        <div className="max-w-4xl w-full bg-yellow-200 p-8 rounded-lg shadow-md">
          {/* <div className='flex justify-between'> */}
          {/* <h1 className="text-2xl font-semibold mt-2 mr-4">Title</h1> */}
          <input
            className="w-full bg-yellow-50 px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Title" value={title} onChange={handletitlechange} />
            {/* </div> */}
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
