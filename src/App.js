import React, { Component } from "react";

/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1",
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1",
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5",
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2",
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5",
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4",
  },
];

const users = {
  1: {
    id: 1,
    name: "Jane Cruz",
    userName: "coder",
  },
  2: {
    id: 2,
    name: "Matthew Johnson",
    userName: "mpage",
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123",
  },
  4: {
    id: 4,
    name: "John Doe",
    userName: "user123",
  },
  5: {
    id: 5,
    name: "Lauren Carlson",
    userName: "user123",
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123",
  },
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth 1",
  },
  2: {
    id: 2,
    name: "Selma",
  },
  3: {
    id: 3,
    name: "Million Dollar Baby",
  },
  4: {
    id: 4,
    name: "Forrest Gump",
  },
  5: {
    id: 5,
    name: "Get Out",
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  processData() {
    for (var profile of profiles) {
      for (var movie of Object.keys(movies)) {
        if (profile.favoriteMovieID == movie) {
          profile["favoriteMovieName"] = movies[movie].name;
        }
      }
      for (var user of Object.keys(users)) {
        if (profile.userID == user) {
          profile["userRealName"] = users[user].name;
        }
      }
    }
    return profiles;
  }
  async componentDidMount() {
    let response = await this.processData();
    this.setState({ data: response });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Favorite Movies</h2>
        <ul>
          {this.state.data.map(function(prof) {
            return (
              <li key={prof.id}>
                {prof.userRealName}'s favorite movie is {prof.favoriteMovieName}
                .
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
