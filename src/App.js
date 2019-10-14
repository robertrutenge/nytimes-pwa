import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { getMostPopularStories } from "./services/nytimesApi";
import Story from "../src/components/Story";

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getMostPopularStories().then(res => setStories(res.results));
  }, []);
  return (
    <div className="App">
      <header className="App-header">New Times</header>
      <div className="container">
        {stories &&
          stories.map(story => <Story story={story} key={story.id} />)}
      </div>
    </div>
  );
}

export default App;
