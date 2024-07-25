import { redirect } from "react-router-dom";
import { deleteUser } from "../helpers";

export async function logoutAction () {

    deleteUser({
        key: "userName"
    })

    return redirect("/")

}