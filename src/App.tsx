import { Gallery } from './Gallery';

function App() {
	return (
		<div className='App'>
			<Gallery
				photos={[
					{ id: 1, src: '/photos/1.jpg', preview: '/photos/preview/1.jpg', description: 'Mexico City, Mexico 1' },
					{ id: 2, src: '/photos/2.jpg', preview: '/photos/preview/2.jpg', description: 'Gurgaon, India' },
					{ id: 3, src: '/photos/3.jpg', preview: '/photos/preview/3.jpg', description: 'New Delhi, India 1' },
					{ id: 4, src: '/photos/4.jpg', preview: '/photos/preview/4.jpg', description: 'New Delhi, India 2' },
					{ id: 5, src: '/photos/5.jpg', preview: '/photos/preview/5.jpg', description: 'New Delhi, India 3' },
					{ id: 6, src: '/photos/6.jpg', preview: '/photos/preview/6.jpg', description: 'New Delhi, India 4' },
				]}
			/>
		</div>
	);
}

export default App;
