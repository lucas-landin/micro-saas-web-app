import { auth } from "@/services/auth";
export default async function page () {
    
    const session = await auth()

    return (<pre>{JSON.stringify(session?.user,null, 1)}</pre>);
}

 