import { Outlet, Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import React, { useEffect, useState } from 'react';

const Layout = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the entered search term
  const [username, setUsername] = useState(""); // State to hold the searched username

  // Function to fetch user data based on the entered username
  const fetchData = (username) => {
    fetch(`http://localhost:3005/api/usercontent/${username}`)
      .then((result) => {
        result.json().then((resp) => {
          console.log("result", resp);
          setData(resp);
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  // Handle search button click
  const handleSearch = () => {
    if (searchQuery) {
      setUsername(searchQuery); // Set the username from the input field
      fetchData(searchQuery);   // Fetch data for the entered username
    }
  };

  return (
    <>
      <div className="container-fluid">
        <nav className="container">
          <div className="react-icons d-flex">
            <FaEye />
            <div style={{ marginLeft: "20px" }}>
              <h3>INSTA</h3>
              <p style={{ fontSize: "15px" }}>anonymous</p>
            </div>
          </div>
          <ul className="item-list">
            <li>
              <Link to="/">IgStoryDownloader</Link>
            </li>
            <li>
              <Link to="/ig-avatar-viewer">IgAvatarViewer</Link>
            </li>
            <li>
              <Link to="/picuki-viwer">PicukiViewer</Link>
            </li>
            <li>
              <Link to="/inflact-viewer">InflactViewer</Link>
            </li>
          </ul>
          <div>
            <h5 style={{ color: "white" }}>
              <span>EN <RiArrowDropDownLine /> </span>
            </h5>
          </div>
        </nav>
        <div className="banner">
          <div className="banner-text">
            <h1>StoriesIG - anonymous Instagram Story Viewer</h1>
            <p>Watch instagram Anonymously, all for free in the viewer</p>
          </div>
          <div className="search-btn">
            <input 
              type="search" 
              placeholder="@username or link" 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
            />
            <button type="button" onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>

      <Outlet />

      {/* Optionally display the fetched data */}
      {data && (
        <div>
          <h2>User Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
         </div>

 
      
      )}
    </>
  );
};

export default Layout;
