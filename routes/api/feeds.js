const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('config');

// @route   GET api/feeds
// @desc    get news feed
// @access  Public
router.get('/', (req, res) => {
  try {
    const options = {
      uri: `https://newsapi.org/v2/everything?q=Apple&from=2021-06-12&sortBy=popularity&apiKey=${config.get(
        'googleNewsApiKey'
      )}`,
      method: 'GET',
      headers: { 'user-agent': 'node.js' },
    };

    request(options, (error, response, body) => {
      if (error) console.error(error);

      if (response.statusCode !== 200) {
        return res.status(404).json({ msg: 'No Feeds Found' });
      }

      res.json(JSON.parse(body));
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
