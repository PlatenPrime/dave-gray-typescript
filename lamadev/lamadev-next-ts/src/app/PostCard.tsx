import { PostProps } from '@/types/types'
import React from 'react'

function PostCard({title, body}: PostProps) {
	return (
		<div>
			<h1>{title}</h1>
			<p>{body}</p>
		</div>
	)
}

export default PostCard