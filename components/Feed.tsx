'use client';

import { useState, useEffect } from 'react';

import PromptCard from './PromptCard';

interface PromptCardListProps {
	data: {
		_id: string;
		creator: {
			username: string;
		};
		tag: string;
		prompt: string;
	}[];
	handleTagClick: (tagName: string) => void;
}

const PromptCardList = ({ data, handleTagClick }: PromptCardListProps) => {
	return (
		<div className='mt-16 prompt_layout'>
			{data.map((post) => (
				// @ts-ignore
				<PromptCard
					key={post._id}
					// @ts-ignore
					post={post}
					handleTagClick={handleTagClick}
				/>
			))}
		</div>
	);
};

const Feed = () => {
	const [allPosts, setAllPosts] = useState([]);

	// Search states
	const [searchText, setSearchText] = useState('');
	const [searchTimeout, setSearchTimeout] = useState(null);
	const [searchedResults, setSearchedResults] = useState([]);

	const fetchPosts = async () => {
		const response = await fetch('/api/prompt');
		const data = await response.json();

		setAllPosts(data);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	const filterPrompts = (searchtext: string) => {
		const regex = new RegExp(searchtext, 'i');
		return allPosts.filter(
			(item) =>
				// @ts-ignore
				regex.test(item.creator.username) ||
				// @ts-ignore
				regex.test(item.tag) ||
				// @ts-ignore
				regex.test(item.prompt)
		);
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (searchTimeout) {
			clearTimeout(searchTimeout);
		}
		setSearchText(e.target.value);
		setSearchTimeout(
			// @ts-ignore
			setTimeout(() => {
				const searchResult = filterPrompts(e.target.value);
				setSearchedResults(searchResult);
			}, 500)
		);
	};

	const handleTagClick = (tagName: string) => {
		setSearchText(tagName);

		const searchResult = filterPrompts(tagName);
		setSearchedResults(searchResult);
	};

	return (
		<section className='feed'>
			<form className='relative w-full flex-center'>
				<input
					type='text'
					placeholder='Search for a tag or a username'
					value={searchText}
					onChange={handleSearchChange}
					required
					className='search_input peer'
				/>
			</form>

			{searchText ? (
				<PromptCardList
					data={searchedResults}
					handleTagClick={handleTagClick}
				/>
			) : (
				<PromptCardList
					data={allPosts}
					handleTagClick={handleTagClick}
				/>
			)}
		</section>
	);
};

export default Feed;
