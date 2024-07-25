import { Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { fetchData } from "./helpers";
import Nav from "./components/Nav";
import './App.css'


export function appLoader () {
  const userName = fetchData("userName");
  return {userName}
}

function App() {
  const {userName} = useLoaderData()

  return (
    <div className='App'>
      {/* <h1> { userName } </h1> */}
      <Nav userName = {userName}/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
