<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script>
$(document).ready(function(){

const storyIndex = $(".hl__story-index__cards");
console.log("StoryIndex:" + storyIndex);

const storyCards = storyIndex.find("article");
console.log("StoryCards:" + storyCards);

storyCards.click(function(){
  window.location = $(this).find("a").attr("href");
  return false;
});

});
</script>
