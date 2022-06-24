/*drag and drop*/

$( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );

/*resize*/

$( function() {
    $( "#resizable" ).resizable();
  } );


/*selectable*/
$( function() {
    $( "#selectable" ).selectable();
  } );


/*sortable*/

  $( function() {
    $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  } );


  /*accordian*/
  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );



  /*auto complete*/
  $( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );



    /*Checkboxradio*/
  $( function() {
    $( "input" ).checkboxradio();
  } );



  /*Controlgroup*/
  $( function() {
    $( "select" ).selectmenu({
      classes: {
        "ui-selectmenu-button": "ui-button-icon-only demo-splitbutton-select"
      },
      change: function(){
        $( ".output" ).append( "<li>" + this.value + "</li>" );
      }
    });
    $( ".controlgroup" ).controlgroup();
    $( "button" ).click(function() {
      $( ".output" ).append( "<li>Running Last Action...</li>" );
    });
  } );



  /*Datepicker*/
  $( function() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  } );


/*Dialog*/
  $( function() {
    $( "#dialog" ).dialog();
  } );



/*Menu*/
   $( function() {
    $( "#menu" ).menu();
  } );



/*Selectmenu*/
   $( function() {
    $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();
  } );


/*slider*/
   $( function() {
    $( "#slider" ).slider();
  } );



   /*tabs*/
   $( function() {
    $( "#tabs" ).tabs();
  } );



/*jquery plugin*/
wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
         mobile:       true,       // default
        live:         true        // default
         }
            )
                wow.init();




// counter
$(".counter").counterUp({
  delay: 20,
  time: 1000,
});


