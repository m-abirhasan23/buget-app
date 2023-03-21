import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteItem } from "../helper";

export async function logoutActions() {
    deleteItem({
        key: "userName"
    })
    toast.success("you have delete your account & data 🙂")
    return redirect("/")
}