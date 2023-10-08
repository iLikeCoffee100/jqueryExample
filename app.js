$(document).ready(function () {
  var userClick;
  var userFeed = false;
  var $app = $("#app");
  var $title = $("<h1 class='title'>Twiddler</h1>");
  var $ufButton = $('<button id="update-feed">Update Feed</button>');
  var $feed = $('<div id="feed"></div>');
  $title.appendTo($app);
  $ufButton.appendTo($app);
  $feed.appendTo($app);

  var updateFeed = function (user) {
    $feed.empty();
    if (userFeed) {
      $ufButton.text("Update Feed");
      userFeed = false;
    }
    if (typeof user === "string") {
      feedContentLength = streams.users[user].length;
      tweetContent = streams.users[user];
      $ufButton.text("Back");
    } else {
      var feedContentLength = streams.home.length;
      var tweetContent = streams.home;
    }

    for (var a = 0; a < feedContentLength; a++) {
      var tweet = tweetContent[a];
      var $tweet = $('<div class="tweet"></div>');
      var $message = $('<div class="message"></div>');
      var $username = $('<div class="username"></div>');
      var $iZuck = $(
        '<img src="assets/facepics/zuck.jpeg" class="profile-photo"></img>'
      );
      var $iTom = $(
        '<img src="assets/facepics/tom.jpeg" class="profile-photo"></img>'
      );
      var $iSun = $(
        '<img src="assets/facepics/sun.png" class="profile-photo"></img>'
      );
      var $iJack = $(
        '<img src="assets/facepics/jack.jpeg" class="profile-photo"></img>'
      );
      var $timestamp = $('<time class="timestamp" datetime=""></time>');
      var $commentIcon = $('<i class="fas fa-comment comment button"></i>');
      var $rtIcon = $('<i class="fas fa-retweet retweet button"></i>');
      var $likeIcon = $('<i class="fas fa-thumbs-up like button"></i>');
      var $shareIcon = $('<i class="fas fa-share share button"></i>');

      $username.text("@" + tweet.user);
      $message.text(tweet.message);
      $timestamp.attr("datetime", tweet.created_at.toISOString());
      if (tweet.user === "shawndrost") {
        $iZuck.appendTo($tweet);
      }
      if (tweet.user === "sharksforcheap") {
        $iTom.appendTo($tweet);
      }
      if (tweet.user === "mracus") {
        $iSun.appendTo($tweet);
      }
      if (tweet.user === "douglascalhoun") {
        $iJack.appendTo($tweet);
      }
      $username.appendTo($tweet);
      $message.appendTo($tweet);
      $commentIcon.appendTo($tweet);
      $rtIcon.appendTo($tweet);
      $likeIcon.appendTo($tweet);
      $shareIcon.appendTo($tweet);
      $timestamp.appendTo($tweet);
      $tweet.prependTo($feed);
      console.log("Prepended to the feed");
    }

    $("time.timestamp").timeago();
  };

  updateFeed(); // on start

  //On button click, update the feed!
  $("#update-feed").on("click", function () {
    updateFeed();
  });

  $("#feed").on("click", ".username", function (event) {
    userClick = $(this).text();
    userClick = userClick.slice(1);
    console.log(userClick);
    updateFeed(userClick);
    userFeed = true;
  });

  $title.on("click", function () {
    console.log("You clicked the Title!");
    alert("you clicked the title!");
  });
});

window.isItBeautifulYet = true;
