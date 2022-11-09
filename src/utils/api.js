
//get single service 
export const getSingleService = async (id) => {
    const res = await fetch(`http://localhost:5000/services/${id}`);
    const data = await res.json();
    return data;
}