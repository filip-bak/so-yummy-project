export const MAINTENANCE_MODE = true;

export function checkMaintenance(thunkApi) {
  if (MAINTENANCE_MODE) {
    return thunkApi.rejectWithValue({ error: "Site is not maintained" });
  }
  return null;
}
