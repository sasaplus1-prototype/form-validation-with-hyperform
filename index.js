(function(){

  'use strict';

  $(function(){
    var form = hyperform(document.forms[0], {
      revalidate: 'hybrid',
    });

    form.validityState();
  });

}());
