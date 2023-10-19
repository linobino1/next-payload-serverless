import type { CollectionConfig } from 'payload/types';

/**
 * Backend users
 */
const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
  ],
};

export default Users;
