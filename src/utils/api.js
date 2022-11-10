
//get single service 
export const getSingleService = async (id) => {
    const res = await fetch(`https://tech-innovation-server.vercel.app/services/${id}`);
    const data = await res.json();
    return data;
}


//get single review
export const getSingleReview = async (id) => {
    const res = await fetch(`https://tech-innovation-server.vercel.app/reviews/${id}`);
    const data = await res.json();
    return data;
}