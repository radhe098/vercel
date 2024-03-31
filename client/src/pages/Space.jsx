import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { format } from 'date-fns';

const Space = () => {
  const [title, setTitle] = useState('');
  const [entry, setEntry] = useState('');
  // const [enKey, setEnkey] = useState();

  const handletitlechange = (event) => {
    setTitle(event.target.value);
  };

  const handleInputChange = (event) => {
    setEntry(event.target.value);
  };

  const currentDate = format(new Date(), 'yyyyMMddHHmmss');

  const handleSaveEntry = async () => {
    const enKey = CryptoJS.lib.WordArray.random(16);
    // setEnkey(tempenKey)

    const encryptedEntry = CryptoJS.AES.encrypt(entry, enKey.toString()).toString();

    const formdata = {
      date: currentDate,
      title: title,
      entry: encryptedEntry,
      enKey: enKey.toString(), 
    };

    try {
      const response = await axios.post('http://localhost:5000', formdata, {
        headers: {
          'Content-Type': 'application/json',},
        withCredentials: false,
      });

      if (response.status === 200) {
        setTitle('');
        setEntry('');
        alert(`Diary entry saved successfully`);
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.log('Error saving diary entry:', error);
      alert('Failed to save diary entry. Please try again later.');
    }
  } 
    return (
      <>
      <video 
    src="/vercel-bg.mp4"
    autoPlay
    loop
    muted
    style={{
      position: 'absolute',
      width: '100%',
      left: '50%',
      top: '50%',
      height: '100%',
      objectFit: 'cover',
      transform: 'translate(-50%, -50%)',
      zIndex: '-1'
    }}
  />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="max-w-4xl w-full bg-yellow-200 p-8 rounded-lg shadow-md">
          {/* <div className='flex justify-between'> */}
          {/* <h1 className="text-2xl font-semibold mt-2 mr-4">Title</h1> */}
          <input
            className="w-full bg-yellow-50 px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Title" value={title} onChange={handletitlechange} />
            {/* </div> */}
          <textarea
            className="w-full h-[400px] bg-yellow-50 px-4 py-2 mb-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500 text-xl"
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
      </>
    );
  };
  export default Space;
