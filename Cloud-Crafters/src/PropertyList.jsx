import React, { useState, useEffect, useCallback } from 'react';
import "./PropertyList.css";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [displayProperties, setDisplayProperties] = useState([]);
  // const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const PROPERTIES_PER_PAGE = 10;

  // Fetch Properties
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          'https://web-36-ed7b7-default-rtdb.firebaseio.com/properties.json'
        );
        const data = await response.json();
        const propertiesArray = Object.values(data || {});
        setProperties(propertiesArray);
        setDisplayProperties(propertiesArray.slice(0, PROPERTIES_PER_PAGE));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const filterByBudget = () => {
    const filtered = properties.filter((property) => {
      const price = property.price; // Assuming `price` is a number
      const min = parseInt(minBudget) || 0; // Default minimum is 0
      const max = parseInt(maxBudget) || Infinity; // Default maximum is Infinity
      return price >= min && price <= max;
    });
    setDisplayProperties(filtered.slice(0, PROPERTIES_PER_PAGE));
    setPage(1);
    setHasMore(filtered.length > PROPERTIES_PER_PAGE);
  };

  // Infinite Scroll Handler
  const handleScroll = useCallback(() => {
    if (!hasMore || loading) return;
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 50
    ) {
      loadMoreProperties();
    }
  }, [hasMore, loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const loadMoreProperties = () => {
    const start = page * PROPERTIES_PER_PAGE;
    const end = start + PROPERTIES_PER_PAGE;
    const newProperties = properties.slice(start, end);
    if (newProperties.length === 0) {
      setHasMore(false);
    } else {
      setDisplayProperties((prev) => [...prev, ...newProperties]);
      setPage((prev) => prev + 1);
    }
  };

  // Debounced Search
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    debouncedSearch(e.target.value);
  };

  // const searchProperties = (input) => {
  //   const lowerInput = input.toLowerCase();
  //   const filtered = properties.filter(
  //     (property) =>
  //       property.title.toLowerCase().includes(lowerInput) ||
  //       property.location.toLowerCase().includes(lowerInput)
  //   );
  //   setDisplayProperties(filtered.slice(0, PROPERTIES_PER_PAGE));
  //   setPage(1);
  //   setHasMore(filtered.length > PROPERTIES_PER_PAGE);
  // };

  // const debouncedSearch = debounce(searchProperties, 300);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  
    // Filter suggestions
    if (value) {
      const filteredSuggestions = properties.filter(
        (property) =>
          property.title.toLowerCase().includes(value.toLowerCase()) ||
          property.location.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions.slice(0, 5)); // Limit to top 5 suggestions
    } else {
      setSuggestions([]); // Clear suggestions if input is empty
    }
  };

  const debouncedSearch = debounce(handleSearchChange, 300);

  // Filters
  const filterProperties = (criteria) => {
    const filtered = properties.filter(
      (property) =>
        property.price >= criteria.minPrice &&
        property.price <= criteria.maxPrice &&
        property.location.includes(criteria.location)
    );
    setDisplayProperties(filtered.slice(0, PROPERTIES_PER_PAGE));
    setPage(1);
    setHasMore(filtered.length > PROPERTIES_PER_PAGE);
  };

  // Sort Properties
  const quickSort = (arr, key) => {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = arr.filter((item) => item[key] < pivot[key]);
    const right = arr.filter((item) => item[key] >= pivot[key] && item !== pivot);
    return [...quickSort(left, key), pivot, ...quickSort(right, key)];
  };

  // const sortProperties = (key) => {
  //   const sorted = quickSort([...properties], key);
  //   setDisplayProperties(sorted.slice(0, PROPERTIES_PER_PAGE));
  //   setPage(1);
  //   setHasMore(sorted.length > PROPERTIES_PER_PAGE);
  // };

  const sortPropertiesByPrice = (order = 'asc') => {
    const sorted = [...properties].sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price; // Ascending order
      } else {
        return b.price - a.price; // Descending order
      }
    });
    setDisplayProperties(sorted.slice(0, PROPERTIES_PER_PAGE));
    setPage(1);
    setHasMore(sorted.length > PROPERTIES_PER_PAGE);
  };

  const sortPropertiesByTitle = (order = 'asc') => {
    const sorted = [...properties].sort((a, b) => {
      if (order === 'asc') {
        return a.title.localeCompare(b.title); // Ascending order
      } else {
        return b.title.localeCompare(a.title); // Descending order
      }
    });
    setDisplayProperties(sorted.slice(0, PROPERTIES_PER_PAGE));
    setPage(1);
    setHasMore(sorted.length > PROPERTIES_PER_PAGE);
  };

  // Render
  return (
    <div>
      <h1>Property Listings</h1>

      {/* Search */}
      {/* <input
        type="text"
        placeholder="Search properties..."
        value={searchInput}
        onChange={handleSearchInput}
      /> */}

      <div className="search-container">
        <input
          type="search"
          placeholder="Search properties..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />

        {suggestions.length > 0 && (
          <ul className="suggestions-container">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="suggestion-item"
                onClick={() => {
                  setSearchTerm(suggestion.title); // Set selected suggestion
                  setSuggestions([]); // Clear suggestions
                }}
              >
                {suggestion.title} - {suggestion.location}
              </li>
            ))}
          </ul>
        )}
      </div>


      {/* Filter */}
      <div>
        <h3>Filter by Budget (₹)</h3>
        <input
          type="number"
          placeholder="Min Budget"
          value={minBudget}
          onChange={(e) => setMinBudget(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Budget"
          value={maxBudget}
          onChange={(e) => setMaxBudget(e.target.value)}
        />
        <button onClick={filterByBudget}>Apply Budget Filter</button>
    </div>

      {/* Sort */}
      <div>
        {/* <button onClick={() => sortProperties('price')}>Sort by Price</button> */}
        <button onClick={() => sortPropertiesByPrice('asc')}>Sort by Price: Low to High</button>
        <button onClick={() => sortPropertiesByPrice('desc')}>Sort by Price: High to Low</button>
        {/* <button onClick={() => sortProperties('title')}>Sort by Title</button> */}
        <button onClick={() => sortPropertiesByTitle('asc')}>Sort by Title: A to Z</button>
        <button onClick={() => sortPropertiesByTitle('desc')}>Sort by Title: Z to A</button>
      </div>

      {/* Properties */}
      <div id="parentPropertyList">
        {displayProperties.map((property, index) => (
          <div key={index} className="childPropertyList">
            <img
              src={property.photos[0] || 'fallback-image-url.jpg'}
              alt={property.title}
            />
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <p>Location: {property.location}</p>

            <div className="amenities">
              {property.amenities &&
                property.amenities.map((amenity, index) => (
                  <span key={index}>{amenity}</span>
                ))}
            </div>

            <p className="price">₹{property.price}</p>
          </div>
        ))}

        {loading && <div>Loading more properties...</div>}
        {!hasMore && <p>No more properties to load</p>}
      </div>
    </div>
  );
};

export default PropertyList;