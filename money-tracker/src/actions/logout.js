import { redirect } from "react-router-dom";
import { deleteUser } from "../helpers";
import { toast } from "react-toastify";

export async function logoutAction () {

    deleteUser({
        key: "userName"
    })
    toast.success("You've deleted your account!")

    return redirect("/")

}