import Image from 'next/image'
import PostList from './PostList'
import Parent from './Parent'
import Child from './Child'
import SecondChild from './SecondChild'
import EventExample from './EventExample'

export default function Home() {
	return (
		<>
			{/* <PostList /> */}
			<Parent>
				<Child />
				<SecondChild />
				<EventExample />
			</Parent>
		</>
	)
}
