import React from 'react'
import PostCard from './PostCard'
import { PostProps } from '@/types/types';

async function getData() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts")

	if (!res.ok) {
		throw new Error("Failed to fetch data");

	}

	return res.json();
}




async function PostList() {

	const data: PostProps[] = await getData()

	return (
		<>

			{data.map((post: PostProps) => (
				<PostCard key={post.id} {...post} />
			))}
		</>
	)
}

export default PostList