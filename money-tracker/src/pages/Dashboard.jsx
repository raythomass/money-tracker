import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

export function dashboardLoader () {
    const userName = fetchData("userName");
    return {userName}
};

function Dashboard () {
 const {userName} = useLoaderData()

    return (
        <>
        <h1>{userName}</h1>
        <h1>Dashboard</h1>
        </>
    )
}

export default Dashboard;