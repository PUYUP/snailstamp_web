import { redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod4 as zod } from 'sveltekit-superforms/adapters';
import { LoginFormSchema } from '#lib/schemas/login-form.ts';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(LoginFormSchema))
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(LoginFormSchema));

		if (!form.valid) {
			return { form };
		}

		// TODO: handle login logic here (e.g. check credentials, create session)

		redirect(303, '/home');
	}
};
