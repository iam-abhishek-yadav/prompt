import Feed from '@components/Feed';

const Home = () => (
	<section className='w-full flex-center flex-col'>
		<h1 className='head_text text-center'>
			Discover & Share
			<br className='max-md:hidden' />
			<span className='orange_gradient text-center'> AI-Powered Prompts</span>
		</h1>
		<p className='desc text-center'>
			Promptopia is your open-source AI tool for discovering, creating, and
			sharing creative prompts across various fields.
		</p>

		<Feed />
	</section>
);

export default Home;
