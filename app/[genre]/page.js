//generate static params

import MovieScroll from "../shared/MovieScroll"

export async function generateStaticParams( ) {
    return [
        {genre: 'comedy'},
        {genre: 'drama'}, 
        {genre:'horror'}
    ]
}

export function generateMetadata({params : {genre}}) {
    return {
        title: `My ${genre} Movie Database`,
        description: `Here are some of my favorite genre movies`,
    }
}

//dynamic routing

export default function Page({params: {genre}}) {
    return (
        <main className= 'p-8'>
            <h1 className= 'capitalize text-2xl text-orange-400 font-semibold text-center'>
               {genre} Movies
            </h1>
            <MovieScroll genre={genre} number={12} />
        </main>
    )
}