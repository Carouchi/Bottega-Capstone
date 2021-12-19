import { AUTHENTICATE_USER } from ".types";

export function signIn({ email, password }) {
	return {
		type: AUTHENTICATE_USER,
		payload: {
			user: {
				_id: 0,
				username: "Mike",
			},
		},
	};
}
