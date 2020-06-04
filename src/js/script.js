

$(function (){
    
    $('#js-carousel-1').owlCarousel({
        items: 1, // А по-умолчанию 3
        nav: true,
        loop: true
    });

    $('#js-carousel-2').owlCarousel({
        items: 1, // А по-умолчанию 3
        nav: true,
        loop: true
    });

    $('#js-carousel-3').owlCarousel({
        items: 1, // А по-умолчанию 3
        nav: true,
        loop: true
    });


    const API_KEY = '16188136-cb26e8587dca641fa7a44fc3b';
	let $mosaicImgShort = $('[data-section]');
	let $searchBtn = $('.search_btn')
	$.each($mosaicImgShort, function (i, element) {
		getSection(element);
	})
	

    function getSection (elem) {
		let $sectionName = $(elem).data('section');
		$.getJSON(getURL($sectionName), function(data){
			if (parseInt(data.totalHits) > 0) {
				let indexImg = 0;

				setInterval(function(){
					indexImg++;
					$(elem).css('background-image', 'url(' + data.hits[indexImg].largeImageURL + ')');
					if (indexImg == data.hits.length - 1) {
						indexImg = 0;
					}
				}, 3000)
			}
		
			else {
				console.log('No hits');
			}	
	  });
	}


	function randomInteger(min, max) {
		// случайное число от min до (max+1)
		let rand = min + Math.random() * (max + 1 - min);
		return Math.floor(rand);
	  }


	function getInput () {

		let $search = $('.search');
		let $inputType = $('.search_line');
		let $inputTypeText = $inputType.val();

		let $searchResult = $('.search_result');
		let $findImg = $('.find-img');

		$.getJSON(getURL($inputTypeText), function(data){
			console.log('$inputTypeText', $inputTypeText);
			
			if (parseInt(data.totalHits) > 0) {
				let randomIndex = randomInteger(0, data.hits.length - 1);
				$findImg.attr('src', data.hits[randomIndex].largeImageURL);
			}

			else {
				$findImg.attr('src', './img/404.jpg');
			}

			$searchResult.removeClass('hidden')
		})
	}

	$searchBtn.on('click', getInput);

    function getURL(section) {
      return "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(section)
    };
   
})


