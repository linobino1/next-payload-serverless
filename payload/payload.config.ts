import path from 'path';
import { buildConfig } from 'payload/config';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import Users from './collections/Users';
import References from './collections/References';
import Media from './collections/Media';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';

export default buildConfig({
  db: mongooseAdapter({
    url: process.env.DATABASE_URI as string,
  }),
  collections: [
    Users,
    Media,
    References,
  ],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
  editor: slateEditor({}),
  plugins: [
    cloudStorage({
      enabled: true,
      collections: {
        'media': {
          generateFileURL: (file) => `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/${file.filename}`,
          disableLocalStorage: true,
          adapter: s3Adapter({
            acl: 'public-read',
            config: {
              endpoint: process.env.S3_ENDPOINT,
              region: process.env.S3_REGION,
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
              },
            },
            bucket: process.env.S3_BUCKET || '',
          }),
        },
      },
    }),
  ],
});
