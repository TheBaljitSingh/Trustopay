import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';
import Header from '../components/shared/Header';

export default function Genuine() {
  const [websites, setWebsites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/websites`);
        setWebsites(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching websites:', error);
      }
    };

    fetchWebsites();
  }, [setSearchQuery]);

  const handleSearch = useCallback(
    debounce(async (query) => {
      if (query.trim() === '') {
        try {
          const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/websites`);
          setWebsites(response.data);
        } catch (error) {
          console.error('Error fetching websites:', error);
        }
        return;
      }

      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/search?q=${query}`);
        setWebsites(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error searching websites:', error);
      }
    }, 300),
    []
  );

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  // const verifiedWebsites = websites.filter((site) => site.verified);

  return (
    <div className="flex flex-col min-h-screen w-full bg-[hsl(var(--background))] font-custom">
      <Header />

      <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-center bg-[hsl(var(--background))] px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl text-indigo-600">Genui<span className="text-green-400">ne</span> </h1>
      </header>

      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="relative flex-1 max-w-xl mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[hsl(var(--muted-foreground))]"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              onChange={handleChange}
              className="w-full h-10 border border-[hsl(var(--input))] px-3 py-2 text-sm ring-offset-[hsl(var(--background))] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[hsl(var(--muted-foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md bg-[hsl(var(--muted))] pl-10 pr-4"
              placeholder="Search for websites..."
              type="search"
            />
          </div>
          <h1 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4">
            Featured Websites on Trustopay
          </h1>
          <p className="text-base text-[hsl(var(--muted-foreground))]">
            Explore our curated selection of verified and professional websites. Click on a card to visit the respective site.
          </p>
        </div>

        <div className="max-w-3xl mx-auto h-[calc(100vh-18rem)] overflow-y-auto hide-scrollbar">
          {/* Verified Website Row */}
          {websites.map((item, index) => (
            <div key={index} className="mb-6">
              <div className="group relative flex items-center rounded-lg bg-[hsl(var(--card))] p-6 shadow-md transition-all hover:bg-[hsl(var(--muted))] hover:shadow-lg">
                <a href={item.url} className="absolute inset-0 z-10">
                  <span className="sr-only">View website</span>
                </a>
                <div className="h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={item.imgSrc}
                    alt={`${item.name} website logo`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] tracking-tight">
                    {item.name}
                  </h3>
                  {item.url && <p className="mt-1 text-sm text-blue-500">{item.url}</p>}
                </div>
                { item.verified==true? (
                  <p className='ml-auto text-green-500 font-medium' >verified ✅</p>
                ):(
                  <p className='ml-auto text-red-500 font-medium ' >non-verified ❌</p>
                ) }
                

                {/* <span className={`ml-auto ${item.verified==true?'text-green-500':'text-red-500'} font-medium`}  >  </span> */}
              </div>
            </div>
          ))}

          {/* Non-Verified Websites Section */}
          {/* <div className="mt-12">
            <div className="flex justify-end items-center mb-4">
              <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] tracking-tight">
                Non-Verified Websites
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {websites
                .filter((site) => !site.verified)
                .map((item, index) => (
                  <div key={index} className="group relative rounded-lg bg-[hsl(var(--card))] p-6 shadow-md transition-all hover:bg-[hsl(var(--muted))] hover:shadow-lg">
                    <a href={item.url} className="absolute inset-0 z-10">
                      <span className="sr-only">View website</span>
                    </a>
                    <div className="flex h-20 w-full items-center justify-center rounded-lg overflow-hidden">
                      <img
                        src={item.imgSrc}
                        alt={`${item.name} website logo`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] tracking-tight">
                        {item.name}
                      </h3>
                      {item.url && <p className="mt-1 text-sm text-blue-500">{item.url}</p>}
                    </div>
                  </div>
                ))}
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
}
