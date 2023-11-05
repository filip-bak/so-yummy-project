export const selectUser = state => state.auth.user;
export const selectToken = state => (state.auth.token !== null ? true : false);
export const selectAvatarUrl = state => state.auth.avatar;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsLoading = state => state.auth.isLoading;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectError = state => state.auth.isError;
