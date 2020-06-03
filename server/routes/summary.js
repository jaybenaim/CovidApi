const CONSTANTS = require("../constants");
const express = require("express");
const axios = require("axios");

const router = express.Router();
const { GLOBAL, COUNTRY } = CONSTANTS.ENDPOINT;

router.get("/", async (req, res) => {
  await axios
    .get("https://api.covid19api.com/total/dayone/country/canada")
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
router.get(GLOBAL, (req, res) => {
  axios
    .get("https://api.covid19api.com/summary")
    .then((response) => {
      let { Global } = response.data;

      res.status(200).send(Global);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get(COUNTRY, (req, res) => {
  axios
    .get("https://api.covid19api.com/summary")
    .then((response) => {
      let countries = response.data.Countries;
      let { country } = req.query;
      let results = countries.filter((data) => data.Country === country);

      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
