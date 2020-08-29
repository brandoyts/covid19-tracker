import React, { Component, useState, useEffect } from "react";
import "./App.css";
import GlobalCases from "./Components/GlobalCases";
import CountryCases from "./Components/CountryCases";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const res = await axios.get("https://api.covid19api.com/summary");

    this.setState(res.data);
  }

  render() {
    return (
      <div className={`app`}>
        <div className="app__container">
          <GlobalCases global={this.state.Global} />
          {/* <CountryCases /> */}
        </div>
      </div>
    );
  }
}

// function App() {
//   const [globalCases, setGlobalCases] = useState({});
// const [globalHistory, setGlobalHistory] = useState({});

// const [countryCases, setCountryCases] = useState({});
// const [countryHistory, setCountryHistory] = useState([]);
// const [countryGeolocation, setCountryGeolocation] = useState();

//   useEffect(() => {
//     fetchData("https://api.covid19api.com/summary", setGlobalCases);
//   }, []);

//   if (globalCases) {
//     console.log(globalCases.Global);
//   }

//   return (
//     <div className={`app`}>
//       <div className="app__container">
//         <GlobalCases global={globalCases.Global} />
//         {/* <CountryCases /> */}
//       </div>
//     </div>
//   );
// }

function fetchData(url, callback) {
  axios
    .get(url)
    .then((res) => callback(res.data))
    .catch((err) => console.log(err));
}

// function getTotalCases(data) {
//   console.log(data);
// }

export default App;
