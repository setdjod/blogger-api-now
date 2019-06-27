/* eslint-disable no-undef */
var config = {
  env: process.env.NODE_ENV || "development",
  apiUrl: process.env.API_URL || "https://www.blogger.com/feeds",
  blogId: process.env.BLOG_ID || "6732289991114793651"
};

module.exports = config;