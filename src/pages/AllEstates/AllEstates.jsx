import React from 'react';
import EstateCard from '../../components/EstateCard/EstateCard';
import { useLoaderData } from 'react-router-dom';

const AllEstates = () => {
    const estates = useLoaderData();
    return (
        <div>
            <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Featured Properties</h2>
			<p className="font-serif text-sm dark:text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			
			{estates.map(estate => {
			 return <EstateCard key={estate.id} estate={estate} />;
			})}

			
			
		</div>
	</div>
</section>
        </div>
    );
};

export default AllEstates;