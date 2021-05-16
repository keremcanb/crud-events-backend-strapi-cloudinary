module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET')
    },
    actionOptions: {
      upload: {},
      delete: {}
    }
  },
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'keremcan@gmail.com',
      defaultReplyTo: 'keremcan@gmail.com',
      testAddress: 'keremcan@gmail.com',
    },
  }
});
