import React from 'react'

function PostCard(props: {title: string, body: string}) {
	return (
		<div>

		<h1>{props.title}</h1>
		<p>{props.body}</p>


		</div>
	)
}

export default PostCard