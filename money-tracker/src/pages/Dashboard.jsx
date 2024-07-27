import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import Intro from "../components/Intro";
import { toast } from "react-toastify";

export function dashboardLoader () {
    const userName = fetchData("userName");
    return {userName}
}

export async function dashboardAction({request}) {
    const data = await request.formData();
    const formData = Object.fromEntries(data)
    console.log({data, request, formData});
    try {
        localStorage.setItem("userName", JSON.stringify(formData.userName));
        return toast.success(`Welcome ${formData.userName}`);
    }
    catch(err) {
        throw new Error("There was a problem");
    }
} 

function Dashboard () {
 const {userName} = useLoaderData()

    return (
        <>
            {userName ? (<p>{userName}</p>) : <Intro/>}
        </>
    )
}

export default Dashboard;