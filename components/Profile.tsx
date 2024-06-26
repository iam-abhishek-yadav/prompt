import PromptCard from './PromptCard';

interface ProfileProps {
	name: string | null;
	desc: string | null;
	data: {
		_id: string;
	}[];
	handleEdit?: (post: any) => void;
	handleDelete?: (post: any) => void;
}

const Profile = ({
	name,
	desc,
	data,
	handleEdit,
	handleDelete,
}: ProfileProps) => {
	return (
		<section className='w-full'>
			<h1 className='head_text text-left'>
				<span className='blue_gradient'>{name} Profile</span>
			</h1>
			<p className='desc text-left'>{desc}</p>

			<div className='mt-10 prompt_layout'>
				{data.map((post) => (
					// @ts-ignore
					<PromptCard
						key={post._id}
						// @ts-ignore
						post={post}
						handleEdit={() => handleEdit && handleEdit(post)}
						handleDelete={() => handleDelete && handleDelete(post)}
					/>
				))}
			</div>
		</section>
	);
};

export default Profile;
