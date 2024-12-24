import { useLoaderData } from "react-router-dom";
import EstateCard from "../../components/EstateCard/EstateCard";

const HomePage = () => {

	const estates = useLoaderData();
	
console.log(estates)
return (
<div>
{/* Banner */}
<div className="carousel w-full">
<div id="slide1" className="carousel-item relative w-full">
<img
src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
className="w-full" />
<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
<a href="#slide4" className="btn btn-circle">❮</a>
<a href="#slide2" className="btn btn-circle">❯</a>
</div>
</div>
<div id="slide2" className="carousel-item relative w-full">
<img
src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
className="w-full" />
<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
<a href="#slide1" className="btn btn-circle">❮</a>
<a href="#slide3" className="btn btn-circle">❯</a>
</div>
</div>
<div id="slide3" className="carousel-item relative w-full">
<img
src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
className="w-full" />
<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
<a href="#slide2" className="btn btn-circle">❮</a>
<a href="#slide4" className="btn btn-circle">❯</a>
</div>
</div>
<div id="slide4" className="carousel-item relative w-full">
<img
src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
className="w-full" />
<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
<a href="#slide3" className="btn btn-circle">❮</a>
<a href="#slide1" className="btn btn-circle">❯</a>
</div>
</div>
</div>
{/* Estates Section */}
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

export default HomePage;