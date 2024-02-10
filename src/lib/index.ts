import { PUBLIC_POCKETBASE_URL } from "$env/static/public"
import Pocketbase from "pocketbase"




// Authentication Login/SignUp


// Pocketbase
export let pocketbase = new Pocketbase(PUBLIC_POCKETBASE_URL)

export function serializePOJO(obj: any) {
    return structuredClone(obj)
}