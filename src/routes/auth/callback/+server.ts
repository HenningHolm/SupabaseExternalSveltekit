import { redirect } from '@sveltejs/kit';
export const GET = async (event) => {

  // return the user to an error page with instructions
  throw redirect(303, 'vg.no');
};