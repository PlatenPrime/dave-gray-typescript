import Image from 'next/image'
import PostList from './PostList'
import Parent from './Parent'
import Child from './Child'
import SecondChild from './SecondChild'
import EventExample from './EventExample'
import UseStateExample from './UseStateExample'
import UseContextExamle from './UseContextExample'

export default function Home() {
	return (
		<>
			{/* <PostList /> */}
			<Parent>
				{/* <Child />
				<SecondChild />
				<EventExample />
				<UseStateExample /> */}
				<UseContextExamle/>
			</Parent>
		</>
	)
}
