const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const snoowrap = require('snoowrap');
var cors = require("cors");

var app = express();

const apiKey = 'xxx';
const ua = 'xxx'
const cId = 'xxx';
const secret = 'xxx';
const username = 'xxx'
const pword = 'xxx';

app.use(cors({origin: '*'}));

app.get("/newreleases", (req, resp) => {
  const r = new snoowrap({
    userAgent: ua,
    clientId: cId,
    clientSecret: secret,
    username: username,
    password: pword
  });

  var allSongs = []

  function loopSubs(sub, callback) {
    r.getSubreddit(sub).getHot().then((resp) => {
      resp.forEach((post) => {
        var obj = {
          title: post.title,
          url: post.url
        }
        if (obj.title.includes("[FRESH")) {
          allSongs.push(obj)
        }
      })
      callback()
    })
  }

  function getMusic(callback) {
    loopSubs("hiphopheads", function() {
      loopSubs("indieheads", function() {
        loopSubs("popheads", function() {
          loopSubs("poppunkers", function() {
            callback()
          })
        })
      })
    })
  }
  getMusic(function() {
    resp.send(allSongs)
  })
})

app.get("/artist/:artist", (req, resp) => {
  axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${req.params.artist}&api_key=${apiKey}&format=json`).then((docs) => {
    var responseData;
    if (!docs.data.hasOwnProperty("error")) {
      var data = docs.data.artist
      responseData = {
        name: data.name,
        image: data.image[2]["#text"],
        is_touring: data.ontour,
        similar_artists: data.similar,
        bio: data.bio.content,
        listeners: data.stats.listeners,
        tags: data.tags.tag,
        url: data.url,
        status: 200
      }
    } else {
      responseData = {
        status: 400
      }
    }
    resp.send(responseData)
  }).catch((e) => {
    console.log(e)
  })
})

app.get("/charts", (req, resp) => {
  axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apiKey}&format=json`).then((docs) => {
    var data = docs.data.artists.artist;
    var responseData = []
    data.forEach((artist) => {
      responseData.push({
        artist: artist.name,
        image: artist.image[2]["#text"],
        listeners: artist.listeners
      })
    })
    resp.send(responseData);
  }).catch((e) => {
  })
})

app.get("/reviews", (req, resp) => {
  axios.get("https://pitchfork.com/reviews/albums/").then((docs) => {
    var html = docs.data;
    var $ = cheerio.load(html)
    var reviewData = []
    var reviewLinks = []
    var reviewImages = []
    var reviewTitles = []
    var reviewArtists = []
    var html2 = "";
    $(".container-fluid > .fragment-list > .review").each(function(index, element) {
        html2 += $(this).html()
    });
    $("a", html2).each(function(i, e) {
      if (e.attribs.href.indexOf("reviews/albums/") != -1 && !e.attribs.href.includes("?")) {
          reviewLinks.push(`https://pitchfork.com${e.attribs.href}`)
      }
    })
    $("img", html2).each(function(i, e) {
      reviewImages.push(e.attribs.src)
    })
    $("h2", html2).each(function(i, e) {
      reviewTitles.push($(this).text())
    })
    $("ul", html2).each(function(i, e) {
      if (e.attribs.class == "artist-list review__title-artist") {
        reviewArtists.push($(this).text())
      }
    })
    for (var i = 0; i < reviewLinks.length; i++) {
      reviewData.push({
        album: reviewTitles[i],
        artist: reviewArtists[i],
        link: reviewLinks[i],
        image: reviewImages[i]
      })
    }
    resp.send(reviewData)
  }).catch((e) => {
    console.log(e)
  })
})


app.get("/news", (req, resp) => {
  axios.get("https://pitchfork.com/latest/").then((docs) => {
    var html = docs.data;
    var $ = cheerio.load(html)
    var html2 = "";
    var titles = [];
    var links = [];
    var news = [];
    $(".article-list").each(function(index, element) {
        html2 += $(this).html()
    });
  $("h2", html2).each(function(i, e) {
    if (e.attribs.class == "title module__title") {
      titles.push($(this).text())
    }
  })
  $("a", html2).each(function(i, e) {
    if (e.attribs.class == "title-link module__title-link") {
      links.push(`https://pitchfork.com${e.attribs.href}`)
    }
  })
  for (var i = 0; i < titles.length; i++) {
    news.push({
      title: titles[i],
      link: links[i]
    })
  }
  resp.send(news)
  }).catch((e) => {
    console.log(e)
  })

})

app.listen(9000, () => {
  console.log("server running.........")
})
