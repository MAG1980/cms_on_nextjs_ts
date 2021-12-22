const contentfulManagement = require('contentful-management');

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'CFPAT-mBJuSn7mf2TcJQUy_x8-YHn1FTLRFg2BofkeQS7kvEA',
  });

  return contentfulClient
    .getSpace('xvkps7zt0tha')
    .then((space) => space.getEnvironment('master'));
};
