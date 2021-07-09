export const getAuth = state => state.auth.tokens.idToken;
export const getAuthBoolean = state => Boolean(state.auth.tokens.idToken);

export const displayNames = state => state.auth.tokens.displayName;
