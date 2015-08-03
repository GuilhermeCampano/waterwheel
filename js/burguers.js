
$(function () {
	// wait till load event fires so all resources are available
    carousel  = $("#carousel").waterwheelCarousel({
		orientation: 'vertical',
		flankingItems: 5,
		separation: 72,
		separationMultiplier: 0.82,
		horizonOffset: 0,
		opacityMultiplier: 0.65,
		sizeMultiplier: 0.9,
		forcedImageWidth: 80,
		forcedImageHeight: 76,
		sensibility: 5,
		animationEasing: "linear"
	});    
    
    
});
