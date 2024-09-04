import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Websites = () => {
  const [websites, setWebsites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/api/websites`); // Fetch all websites initially
        setWebsites(response.data);
      } catch (error) {
        console.error('Error fetching websites:', error);
      }
    };

    fetchWebsites();
  }, []);

  const handleVerify = async (id) => {
    try {
      await axios.patch(`/api/websites/${id}/verify`);
      setWebsites((prevWebsites) =>
        prevWebsites.map((website) =>
          website._id === id ? { ...website, verified: true } : website
        )
      );
    } catch (error) {
      console.error('Error verifying website:', error);
    }
  };

  const handleSearch = async (query) => {
    console.log("querying")
    setSearchQuery(query);
    try {
      const response = await axios.get(`/api/websites?search=${query}`); // Make API call with search query
      setWebsites(response.data);
    } catch (error) {
      console.error('Error searching websites:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-[hsl(var(--background))] font-custom">
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4">Websites</h1>

          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search for websites..."
              className="w-full h-10 border border-[hsl(var(--input))] px-3 py-2 text-sm ring-offset-[hsl(var(--background))] rounded-md bg-[hsl(var(--muted))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] focus:ring-offset-2"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {websites.map((item) => (
              <div key={item._id} className="group relative rounded-lg bg-[hsl(var(--card))] p-6 shadow-md transition-all hover:bg-[hsl(var(--muted))] hover:shadow-lg">
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
                <div className="mt-4 flex justify-between items-center">
                  {item.verified ? (
                    <span className="text-green-500 font-medium">Verified ✅</span>
                  ) : (
                    <button
                      onClick={() => handleVerify(item._id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Verify
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Websites;
