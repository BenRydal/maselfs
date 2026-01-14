import { error } from '@sveltejs/kit';
import { getActivity, getNextActivity } from '$lib/data/activities';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const id = parseInt(params.id);

	if (isNaN(id) || id < 1 || id > 3) {
		throw error(404, 'Activity not found');
	}

	const activity = getActivity(id);
	if (!activity) {
		throw error(404, 'Activity not found');
	}

	return {
		activity,
		nextActivity: getNextActivity(id)
	};
};
