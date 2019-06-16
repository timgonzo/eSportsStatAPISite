/*
 * action types
 */

export const TYPES = {
  USER_SET_ROLES: "USER_SET_ROLES"
};

/*
 * other constants
 */

/*
 * action creators
 */

export function setRoles(data) {
  return {
    type: TYPES.USER_SET_ROLES,
    payload: data || [
      "Customer",
      "Merchant",
      "Influencer",
      "Admin",
      "Super Admin"
    ]
  };
}
