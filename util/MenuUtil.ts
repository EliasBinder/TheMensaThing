//TODO: use custom hook
export async function getMainCourses(location: string){
    let resp = await fetch("https://europe-west1-unibz-mensapp.cloudfunctions.net/menu/" + location)
    return await resp.json()
}
