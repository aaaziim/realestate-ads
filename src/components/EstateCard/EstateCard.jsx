import { Link } from "react-router-dom";

 
const EstateCard = ({estate}) => {

	const {estate_title,category,price, id, featured_image  } = estate

    return (
        <>
        <article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={featured_image}/>
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">{category}</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{estate_title}</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						
						<Link to={`/estate/${id}`} className="btn btn-accent">View Property</Link >
					</div>
				</div>
			</article>
		
        </>
    );
};

export default EstateCard;