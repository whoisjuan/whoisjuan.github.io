$('<meta name="description" content="Look this Awesome Chrome Extension"/>').prependTo('head');
$(document).ready(function () {
  var path = window.location,
      title = $(document).find('title').text(),
      desc = $('meta[name=description]').attr("content");
  $('a[class*="share-"]').each(function () {
    if ($(this).is('[class*="-facebook"]')) { // FACEBOOK
      $(this).attr('href','http://www.facebook.com/sharer/sharer.php?u=' + path).css('backgroundColor', '#3b5998');
    } else if ($(this).is('[class*="-twitter"]')) { // TWITTER
      $(this).attr('href','https://twitter.com/intent/tweet?text=' + title + ' - ' + desc + '&url=' + path).css('backgroundColor','#55acee');
    } else if ($(this).is('[class*="-google"]')) { // GOOGLE
      $(this).attr('href','https://plus.google.com/share?url=' + path).css('backgroundColor','#dd4b39');
    } else if ($(this).is('[class*="-linkedin"]')) { // LINKEDIN
      $(this).attr('href','http://www.linkedin.com/shareArticle?mini=true&url=' + path + '&title=' + title + '&summary=' + desc + '&source=' + path).css('backgroundColor','#0976b4');
    } else if ($(this).is('[class*="-tumblr"]')) { // TUMBLR
      $(this).attr('href','http://www.tumblr.com/share/link?url=' + path + '&name=' + title + '&description=' + desc).css('backgroundColor','#35465c');
    } else if ($(this).is('[class*="-pinterest"]')) { // PINTEREST
      $(this).attr('href','http://pinterest.com/pin/create/button/?url=' + path + '&description=' + title + ' - ' + desc + '&media=REPLACE-WITH-IMAGE-URL').css('backgroundColor','#cc2127');
    } else if ($(this).is('[class*="-email"]')) { // EMAIL
      $(this).attr('href','mailto:?subject=' + title + '&body=' + path + ' - ' + desc).css('backgroundColor','#ffc740');
    }
  }).click(function () {
    if ($(this).hasClass('popout')) {
      var url = this.href, w = 575, h = 525, y = ($(window).width() - w) / 2, x = ($(window).height() - h) / 2;
      window.open(url, '_blank', 'toolbar=0,scrollbars=1,resize=1,status=0,width=' + w + ',height=' + h + ',top=' + x + ',left=' + y);
      return false;
    }
  });
});