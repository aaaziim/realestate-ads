import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
    const [estates, setEstates] = useState([]); // Initialize state for estates
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track error state
    const {id} = useParams()

    

    useEffect(() => {
        fetch('/data.json')  // Fetch data
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data'); // Throw error if the response is not OK
                }
                return res.json();
            })
            .then((data) => {
                setEstates(data); // Set estates data on successful fetch
                setLoading(false); // Set loading to false
            })
            .catch((error) => {
                setError(error.message); // Handle any errors
                setLoading(false); // Stop loading on error
            });
    }, []); 

   

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    const estate = estates.find(item=> item.id === id)
    const {estate_title,category,price,  featured_image,location,post_author  } = estate;
    

    return (
        <div>
           
 <article className="flex flex-col bg-slate-400 border rounded-xl p-4 m-4 shadow-xl dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={featured_image}/>
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">{category}</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{estate_title}</h3>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Price: ${price}</h3>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Address: {location.address}</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						

                        <div className="bg-slate-200 p-3 rounded-xl">
                            <h2 className="text-2xl font-semibold">Contact:</h2>
                            <h3 className="text-xl">Name: {post_author.name}</h3>
                            <h3 className="text-xl">Email: {post_author.email}</h3>
                            <h3 className="text-xl">Phone: {post_author.phone}</h3>
                        </div>
						
					</div>
				</div>
			</article> 
        </div>
    );
};

export default DetailsPage;

