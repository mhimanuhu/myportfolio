import {React, useState, useEffect }from 'react'
import Home from './pages/home/Home';
import Loader from './components/loader/Loader';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let contentLoaded = false;

    const contentLoadHandler = () => {
      contentLoaded = true;
      // Hide the loader after a minimum display time (1 second)
      setTimeout(() => {
        setIsLoading(false);
      }, 1500); // 1000 milliseconds = 1 second
    };

    // Listen for the window.onload event to track when all content has loaded
    window.onload = () => {
      // If the content has already loaded, hide the loader immediately
      if (contentLoaded) {
        setIsLoading(false);
      } else {
        // Content hasn't loaded yet, set a timeout to ensure loader is hidden
        setTimeout(() => {
          setIsLoading(false);
        }, 1000); // 1000 milliseconds = 1 second (adjust as needed)
      }
    };

    // Cleanup the event listener
    return () => {
      window.onload = null;
    };
  }, []);

  return (
    <div className="app">
    {isLoading ? (
      <Loader />
    ) : (
      <>
      <Home/>
      </>
    )}
  </div>
);
  
}

export default App
