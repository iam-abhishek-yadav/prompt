import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';

export const GET = async (request) => {
	try {
		await connectToDB();

		const prompts = await Prompt.find({}).populate('creator');

		const responseBody = JSON.stringify(prompts);
		const headers = {
			'Content-Type': 'application/json',
			'Cache-Control': 'public, max-age=0, must-revalidate',
			Pragma: 'no-cache',
			Expires: '0',
		};

		return new Response(responseBody, { status: 200, headers });
	} catch (error) {
		return new Response('Failed to fetch all prompts', { status: 500 });
	}
};
