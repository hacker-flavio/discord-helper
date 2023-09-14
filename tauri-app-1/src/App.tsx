import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/tauri";
import axios from "axios";
import "./App.css";

function App() {
  const [greetMsg] = useState("");
  const [name, setName] = useState("");

  interface IResponse {
    data: string;
  }

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    // setGreetMsg(await invoke("greet", { name }));

    var config = {
      method: "get",
      url: `http://localhost:3050/update-css?backgroundImage=${name}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response: IResponse) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
