 window.onload=function() {
    var ulNode = $('.timeline');
    var liNodes = ulNode.find('li'), count = liNodes.length, i, liNode,leftCount = nextDataNumber * 20;
    for(i=0; i<count; i++) {
      liNode = $(liNodes.get(i));
      if(i % 2 !== 0) {
        liNode.addClass('alt');
      }else{
        liNode.removeClass('alt');
      }
      liNode.find('.number').text(leftCount + count - i);
    }
 }