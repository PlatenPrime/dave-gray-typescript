
import { useEffect, useState } from 'react';
import PostCard from './PostCard'




interface IDataPost {

	"userId": string;
	"id": number;
	"title": string;
	"body": string;

}



function PostList() {


	const [data, setData] = useState([]);


	async function getData() {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");


		if (!res.ok) {
			throw new Error("Failed to fetch data");
		}


		return res.json();

	}

	useEffect(() => {
		async function fetchData() {
			try {
				const fetchedData = await getData();
				setData(fetchedData);
			} catch (error) {
				// Обработка ошибок при получении данных
				console.error(error);
			}
		}

		fetchData();
	}, []);


	return (
		<div>
			{/* <PostCard title="post 1" body="post 1 description" /> */}

			{data.length && data.map(post: {id: number, title: string, body: string}) => (
				<PostCard key={post.id} title={post.title} body={post.body} />

			))}



		</div>
	)
}

export default PostList