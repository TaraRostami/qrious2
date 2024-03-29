document.addEventListener("DOMContentLoaded", function() {

	var $background = document.querySelector('main div [name="background"]');
	var $backgroundAlpha = document.querySelector('main div [name="backgroundAlpha"]');
	var $foreground = document.querySelector('main div [name="foreground"]');
	var $foregroundAlpha = document.querySelector('main div [name="foregroundAlpha"]');
	var $level = document.querySelector('main div [name="level"]');
	var $positionSep = document.querySelector('main div [name="positionSep"]');
	var $dataSep = document.querySelector('main div [name="dataSep"]');
	var $section = document.querySelector('main section');
	var $value = document.querySelector('main div [name="value"]');
	$background.addEventListener('change', function() {
		qr.background = $background.value || null;
	});
	$backgroundAlpha.addEventListener('change', function() {
		qr.backgroundAlpha = $backgroundAlpha.value || null;
	});
	$foreground.addEventListener('change', function() {
		qr.foreground = $foreground.value || null;
	});
	$foregroundAlpha.addEventListener('change', function() {
		qr.foregroundAlpha = $foregroundAlpha.value || null;
	});
	$level.addEventListener('change', function() {
		qr.level = $level.value;
	});
	$positionSep.addEventListener('change', function() {
		if ($positionSep.checked) {
			qr.positionSep = $positionSep.value = "E";
		} else {
			qr.positionSep = $positionSep.value = "D";
		}
	});
	$dataSep.addEventListener('change', function() {
		if ($dataSep.checked) {
			qr.dataSep = $dataSep.value = "E";
		} else {
			qr.dataSep = $dataSep.value = "D";
		}
	});
	$value.value = 'QRious2';
	$value.addEventListener('input', function() {
		qr.value = $value.value;
	});


	//Foreground Alpha Slider
	const sliderEl1 = document.querySelector("#tr-range-slider1");
	const initialValue1 = parseInt(sliderEl1.value);
	const sliderValue1 = document.querySelector("#range-value1");

	sliderValue1.textContent = initialValue1;

	const initialProgress1 = ((initialValue1 - sliderEl1.min) / (sliderEl1.max - sliderEl1.min)) * 100;
	sliderEl1.style.background = `linear-gradient(to right, var(--tara-color-primary-100) ${initialProgress1}%, #f3f4f6 ${initialProgress1}%)`;

	sliderEl1.addEventListener("input", (event) => {

		const tempSliderValue1 = event.target.value;

		sliderValue1.textContent = tempSliderValue1;

		const progress1 = ((tempSliderValue1 - sliderEl1.min) / (sliderEl1.max - sliderEl1.min)) * 100;

		sliderEl1.style.background = `linear-gradient(to right, var(--tara-color-primary-100) ${progress1}%, #f3f4f6 ${progress1}%)`;
	});

	const sliderBox1 = document.querySelector('.tr-slider-box[id="slider-box1"]');
	const rangeValue1 = document.querySelector('.tr-range-value[id="range-value1"]');
	const rangeInput1 = document.getElementById('tr-range-slider1');

	function updaterangeValue1Position() {
		const sliderBox1Rect = sliderBox1.getBoundingClientRect();
		const sliderBox1Width = sliderBox1Rect.width;
		const inputValue = rangeInput1.value;
		const maxInputValue = parseFloat(rangeInput1.max);
		const minInputValue = parseFloat(rangeInput1.min);
		const positionX = ((inputValue - minInputValue) / (maxInputValue - minInputValue)) * sliderBox1Width;
		rangeValue1.style.left = positionX + 'px';
		rangeValue1.textContent = inputValue;
	}
	updaterangeValue1Position();

	rangeInput1.addEventListener('input', updaterangeValue1Position);

	sliderBox1.addEventListener('mousedown', (event) => {
		updaterangeValue1Position();
		rangeInput1.dispatchEvent(new Event('input'));
		rangeValue1.style.opacity = 1;
	});
	sliderBox1.addEventListener('touchstart', (event) => {
		updaterangeValue1Position();
		rangeInput1.dispatchEvent(new Event('input'));
		rangeValue1.style.opacity = 1;
	});
	sliderBox1.addEventListener('mouseout', (event) => {
		rangeValue1.style.opacity = 0;
	});
	sliderBox1.addEventListener('touchend', () => {
		rangeValue1.style.opacity = 0;
	});
	document.addEventListener('mousemove', (event) => {
		if (event.buttons === 1) {
			updaterangeValue1Position();
			rangeInput1.dispatchEvent(new Event('input'));
		}
	});
	sliderBox1.addEventListener('touchmove', (event) => {
		if (event.touches.length === 1) {
			updaterangeValue1Position();
			rangeInput1.dispatchEvent(new Event('input'));
		}
	});


	//Background Alpha Slider
	const sliderEl2 = document.querySelector("#tr-range-slider2");
	const initialValue2 = parseInt(sliderEl2.value);
	const sliderValue2 = document.querySelector("#range-value2");

	sliderValue2.textContent = initialValue2;

	const initialProgress2 = ((initialValue2 - sliderEl2.min) / (sliderEl2.max - sliderEl2.min)) * 100;
	sliderEl2.style.background = `linear-gradient(to right, var(--tara-color-primary-100) ${initialProgress2}%, #f3f4f6 ${initialProgress2}%)`;

	sliderEl2.addEventListener("input", (event) => {

		const tempSliderValue2 = event.target.value;

		sliderValue2.textContent = tempSliderValue2;

		const progress2 = ((tempSliderValue2 - sliderEl2.min) / (sliderEl2.max - sliderEl2.min)) * 100;

		sliderEl2.style.background = `linear-gradient(to right, var(--tara-color-primary-100) ${progress2}%, #f3f4f6 ${progress2}%)`;
	});

	const sliderBox2 = document.querySelector('.tr-slider-box[id="slider-box2"]');
	const rangeValue2 = document.querySelector('.tr-range-value[id="range-value2"]');
	const rangeInput2 = document.getElementById('tr-range-slider2');

	function updaterangeValue2Position() {
		const sliderBox2Rect = sliderBox2.getBoundingClientRect();
		const sliderBox2Width = sliderBox2Rect.width;
		const inputValue = rangeInput2.value;
		const maxInputValue = parseFloat(rangeInput2.max);
		const minInputValue = parseFloat(rangeInput2.min);
		const positionX = ((inputValue - minInputValue) / (maxInputValue - minInputValue)) * sliderBox2Width;
		rangeValue2.style.left = positionX + 'px';
		rangeValue2.textContent = inputValue;
	}
	updaterangeValue2Position();

	rangeInput2.addEventListener('input', updaterangeValue2Position);

	sliderBox2.addEventListener('mousedown', (event) => {
		updaterangeValue2Position();
		rangeInput2.dispatchEvent(new Event('input'));
		rangeValue2.style.opacity = 1;
	});
	sliderBox2.addEventListener('touchstart', (event) => {
		updaterangeValue2Position();
		rangeInput2.dispatchEvent(new Event('input'));
		rangeValue2.style.opacity = 1;
	});
	sliderBox2.addEventListener('mouseout', (event) => {
		rangeValue2.style.opacity = 0;
	});
	sliderBox2.addEventListener('touchend', () => {
		rangeValue2.style.opacity = 0;
	});
	document.addEventListener('mousemove', (event) => {
		if (event.buttons === 1) {
			updaterangeValue2Position();
			rangeInput2.dispatchEvent(new Event('input'));
		}
	});
	sliderBox2.addEventListener('touchmove', (event) => {
		if (event.touches.length === 1) {
			updaterangeValue2Position();
			rangeInput2.dispatchEvent(new Event('input'));
		}
	});


	const qr = window.qr = new QRious({
		element: document.getElementById('qrious'),
		size: 150,
		value: 'QRious2',
		padding: 0,
		positionCorner: 0,
		dataCornerTL: 0,
		dataCornerTR: 0,
		dataCornerBR: 0,
		dataCornerBL: 0
	});

	const inputSize = document.querySelector('.tr-input-number-input[name="size"]');
	const upSize = document.querySelector('.tr-input-number-handler-up[id="size-up"]');
	const downSize = document.querySelector('.tr-input-number-handler-down[id="size-down"]');

	const inputPadding = document.querySelector('.tr-input-number-input[name="padding"]');
	const upPadding = document.querySelector('.tr-input-number-handler-up[id="padding-up"]');
	const downPadding = document.querySelector('.tr-input-number-handler-down[id="padding-down"]');

	const inputPositionCorner = document.querySelector('.tr-input-number-input[name="position-corner"]');
	const upPositionCorner = document.querySelector('.tr-input-number-handler-up[id="position-corner-up"]');
	const downPositionCorner = document.querySelector('.tr-input-number-handler-down[id="position-corner-down"]');

	const inputDataCornerTL = document.querySelector('.tr-input-number-input[name="data-corner-tl"]');
	const upDataCornerTL = document.querySelector('.tr-input-number-handler-up[id="data-corner-tl-up"]');
	const downDataCornerTL = document.querySelector('.tr-input-number-handler-down[id="data-corner-tl-down"]');

	const inputDataCornerTR = document.querySelector('.tr-input-number-input[name="data-corner-tr"]');
	const upDataCornerTR = document.querySelector('.tr-input-number-handler-up[id="data-corner-tr-up"]');
	const downDataCornerTR = document.querySelector('.tr-input-number-handler-down[id="data-corner-tr-down"]');

	const inputDataCornerBR = document.querySelector('.tr-input-number-input[name="data-corner-br"]');
	const upDataCornerBR = document.querySelector('.tr-input-number-handler-up[id="data-corner-br-up"]');
	const downDataCornerBR = document.querySelector('.tr-input-number-handler-down[id="data-corner-br-down"]');

	const inputDataCornerBL = document.querySelector('.tr-input-number-input[name="data-corner-bl"]');
	const upDataCornerBL = document.querySelector('.tr-input-number-handler-up[id="data-corner-bl-up"]');
	const downDataCornerBL = document.querySelector('.tr-input-number-handler-down[id="data-corner-bl-down"]');

	let timerSize = null;
	let timerPadding = null;
	let timerPositionCorner = null;
	let timerDataCornerTL = null;
	let timerDataCornerTR = null;
	let timerDataCornerBR = null;
	let timerDataCornerBL = null;


	//Size
	const increaseSize = function() {
		let value = parseInt(inputSize.value);
		const maxValue = parseInt(inputSize.getAttribute('max'));
		const minValue = parseInt(inputSize.getAttribute('min'));
		if (value < maxValue) {
			value++;
			inputSize.value = value;
			qr.size = value;
			if (value === maxValue) {
				upSize.classList.add('tr-input-number-handler-up-disabled');
			}
			if (value > minValue) {
				downSize.classList.remove('tr-input-number-handler-down-disabled');
			}
			timerSize = setTimeout(increaseSize, 100);
		}
	};
	const decreaseSize = function() {
		let value = parseInt(inputSize.value);
		const minValue = parseInt(inputSize.getAttribute('min'));
		const maxValue = parseInt(inputSize.getAttribute('max'));
		if (value > minValue) {
			value--;
			inputSize.value = value;
			qr.size = value;
			if (value === minValue) {
				downSize.classList.add('tr-input-number-handler-down-disabled');
			}
			if (value < maxValue) {
				upSize.classList.remove('tr-input-number-handler-up-disabled');
			}
			timerSize = setTimeout(decreaseSize, 100);
		}
	};
	upSize.addEventListener('mousedown', function() {
		clearTimeout(timerSize);
		increaseSize();
	});
	upSize.addEventListener('touchstart', function() {
		clearTimeout(timerSize);
		increaseSize();
	});
	upSize.addEventListener('mouseup', function() {
		clearTimeout(timerSize);
	});
	upSize.addEventListener('touchend', function() {
		clearTimeout(timerSize);
	});
	upSize.addEventListener('mouseleave', function() {
		clearTimeout(timerSize);
	});
	downSize.addEventListener('mousedown', function() {
		clearTimeout(timerSize);
		decreaseSize();
	});
	downSize.addEventListener('touchstart', function() {
		clearTimeout(timerSize);
		decreaseSize();
	});
	downSize.addEventListener('mouseup', function() {
		clearTimeout(timerSize);
	});
	downSize.addEventListener('touchend', function() {
		clearTimeout(timerSize);
	});
	downSize.addEventListener('mouseleave', function() {
		clearTimeout(timerSize);
	});
	inputSize.addEventListener('change', function() {
		let value = parseInt(inputSize.value);
		const maxValue = parseInt(inputSize.getAttribute('max'));
		const minValue = parseInt(inputSize.getAttribute('min'));
		if (isNaN(value) || value < minValue) {
			inputSize.value = minValue;
			value = minValue;
		} else if (value > maxValue) {
			inputSize.value = maxValue;
			value = maxValue;
		}
		qr.size = value;
		if (value === minValue) {
			downSize.classList.add('tr-input-number-handler-down-disabled');
		} else {
			downSize.classList.remove('tr-input-number-handler-down-disabled');
		}
		if (value === maxValue) {
			upSize.classList.add('tr-input-number-handler-up-disabled');
		} else {
			upSize.classList.remove('tr-input-number-handler-up-disabled');
		}
	});
	inputSize.dispatchEvent(new Event('change'));


	//Padding
	const increasePadding = function() {
		let value = parseInt(inputPadding.value);
		const maxValue = parseInt(inputPadding.getAttribute('max'));
		const minValue = parseInt(inputPadding.getAttribute('min'));
		if (value < maxValue) {
			value++;
			inputPadding.value = value;
			qr.padding = value;
			if (value === maxValue) {
				upPadding.classList.add('tr-input-number-handler-up-disabled');
			}
			if (value > minValue) {
				downPadding.classList.remove('tr-input-number-handler-down-disabled');
			}
			timerPadding = setTimeout(increasePadding, 100);
		}
	};
	const decreasePadding = function() {
		let value = parseInt(inputPadding.value);
		const minValue = parseInt(inputPadding.getAttribute('min'));
		const maxValue = parseInt(inputPadding.getAttribute('max'));
		if (value > minValue) {
			value--;
			inputPadding.value = value;
			qr.padding = value;
			if (value === minValue) {
				downPadding.classList.add('tr-input-number-handler-down-disabled');
			}
			if (value < maxValue) {
				upPadding.classList.remove('tr-input-number-handler-up-disabled');
			}
			timerPadding = setTimeout(decreasePadding, 100);
		}
	};
	upPadding.addEventListener('mousedown', function() {
		clearTimeout(timerPadding);
		increasePadding();
	});
	upPadding.addEventListener('touchstart', function() {
		clearTimeout(timerPadding);
		increasePadding();
	});
	upPadding.addEventListener('mouseup', function() {
		clearTimeout(timerPadding);
	});
	upPadding.addEventListener('touchend', function() {
		clearTimeout(timerPadding);
	});
	upPadding.addEventListener('mouseleave', function() {
		clearTimeout(timerPadding);
	});
	downPadding.addEventListener('mousedown', function() {
		clearTimeout(timerPadding);
		decreasePadding();
	});
	downPadding.addEventListener('touchstart', function() {
		clearTimeout(timerPadding);
		decreasePadding();
	});
	downPadding.addEventListener('mouseup', function() {
		clearTimeout(timerPadding);
	});
	downPadding.addEventListener('touchend', function() {
		clearTimeout(timerPadding);
	});
	downPadding.addEventListener('mouseleave', function() {
		clearTimeout(timerPadding);
	});
	inputPadding.addEventListener('change', function() {
		let value = parseInt(inputPadding.value);
		const maxValue = parseInt(inputPadding.getAttribute('max'));
		const minValue = parseInt(inputPadding.getAttribute('min'));
		if (isNaN(value) || value < minValue) {
			inputPadding.value = minValue;
			value = minValue;
		} else if (value > maxValue) {
			inputPadding.value = maxValue;
			value = maxValue;
		}
		qr.padding = value;
		if (value === minValue) {
			downPadding.classList.add('tr-input-number-handler-down-disabled');
		} else {
			downPadding.classList.remove('tr-input-number-handler-down-disabled');
		}
		if (value === maxValue) {
			upPadding.classList.add('tr-input-number-handler-up-disabled');
		} else {
			upPadding.classList.remove('tr-input-number-handler-up-disabled');
		}
	});
	inputPadding.dispatchEvent(new Event('change'));


	//Position Corner
	const increasePositionCorner = function() {
		let value = parseInt(inputPositionCorner.value);
		const maxValue = parseInt(inputPositionCorner.getAttribute('max'));
		const minValue = parseInt(inputPositionCorner.getAttribute('min'));
		if (value < maxValue) {
			value++;
			inputPositionCorner.value = value;
			qr.positionCorner = value;
			if (value === maxValue) {
				upPositionCorner.classList.add('tr-input-number-handler-up-disabled');
			}
			if (value > minValue) {
				downPositionCorner.classList.remove('tr-input-number-handler-down-disabled');
			}
			timerPositionCorner = setTimeout(increasePositionCorner, 100);
		}
	};
	const decreasePositionCorner = function() {
		let value = parseInt(inputPositionCorner.value);
		const minValue = parseInt(inputPositionCorner.getAttribute('min'));
		const maxValue = parseInt(inputPositionCorner.getAttribute('max'));
		if (value > minValue) {
			value--;
			inputPositionCorner.value = value;
			qr.positionCorner = value;
			if (value === minValue) {
				downPositionCorner.classList.add('tr-input-number-handler-down-disabled');
			}
			if (value < maxValue) {
				upPositionCorner.classList.remove('tr-input-number-handler-up-disabled');
			}
			timerPositionCorner = setTimeout(decreasePositionCorner, 100);
		}
	};
	upPositionCorner.addEventListener('mousedown', function() {
		clearTimeout(timerPositionCorner);
		increasePositionCorner();
	});
	upPositionCorner.addEventListener('touchstart', function() {
		clearTimeout(timerPositionCorner);
		increasePositionCorner();
	});
	upPositionCorner.addEventListener('mouseup', function() {
		clearTimeout(timerPositionCorner);
	});
	upPositionCorner.addEventListener('touchend', function() {
		clearTimeout(timerPositionCorner);
	});
	upPositionCorner.addEventListener('mouseleave', function() {
		clearTimeout(timerPositionCorner);
	});
	downPositionCorner.addEventListener('mousedown', function() {
		clearTimeout(timerPositionCorner);
		decreasePositionCorner();
	});
	downPositionCorner.addEventListener('touchstart', function() {
		clearTimeout(timerPositionCorner);
		decreasePositionCorner();
	});
	downPositionCorner.addEventListener('mouseup', function() {
		clearTimeout(timerPositionCorner);
	});
	downPositionCorner.addEventListener('touchend', function() {
		clearTimeout(timerPositionCorner);
	});
	downPositionCorner.addEventListener('mouseleave', function() {
		clearTimeout(timerPositionCorner);
	});
	inputPositionCorner.addEventListener('change', function() {
		let value = parseInt(inputPositionCorner.value);
		const maxValue = parseInt(inputPositionCorner.getAttribute('max'));
		const minValue = parseInt(inputPositionCorner.getAttribute('min'));
		if (isNaN(value) || value < minValue) {
			inputPositionCorner.value = minValue;
			value = minValue;
		} else if (value > maxValue) {
			inputPositionCorner.value = maxValue;
			value = maxValue;
		}
		qr.positionCorner = value;
		if (value === minValue) {
			downPositionCorner.classList.add('tr-input-number-handler-down-disabled');
		} else {
			downPositionCorner.classList.remove('tr-input-number-handler-down-disabled');
		}
		if (value === maxValue) {
			upPositionCorner.classList.add('tr-input-number-handler-up-disabled');
		} else {
			upPositionCorner.classList.remove('tr-input-number-handler-up-disabled');
		}
	});
	inputPositionCorner.dispatchEvent(new Event('change'));


	//Data Corner TL
	const increaseDataCornerTL = function() {
		let value = parseInt(inputDataCornerTL.value);
		const maxValue = parseInt(inputDataCornerTL.getAttribute('max'));
		const minValue = parseInt(inputDataCornerTL.getAttribute('min'));
		if (value < maxValue) {
			value++;
			inputDataCornerTL.value = value;
			qr.dataCornerTL = value;
			if (value === maxValue) {
				upDataCornerTL.classList.add('tr-input-number-handler-up-disabled');
			}
			if (value > minValue) {
				downDataCornerTL.classList.remove('tr-input-number-handler-down-disabled');
			}
			timerDataCornerTL = setTimeout(increaseDataCornerTL, 100);
		}
	};
	const decreaseDataCornerTL = function() {
		let value = parseInt(inputDataCornerTL.value);
		const minValue = parseInt(inputDataCornerTL.getAttribute('min'));
		const maxValue = parseInt(inputDataCornerTL.getAttribute('max'));
		if (value > minValue) {
			value--;
			inputDataCornerTL.value = value;
			qr.dataCornerTL = value;
			if (value === minValue) {
				downDataCornerTL.classList.add('tr-input-number-handler-down-disabled');
			}
			if (value < maxValue) {
				upDataCornerTL.classList.remove('tr-input-number-handler-up-disabled');
			}
			timerDataCornerTL = setTimeout(decreaseDataCornerTL, 100);
		}
	};
	upDataCornerTL.addEventListener('mousedown', function() {
		clearTimeout(timerDataCornerTL);
		increaseDataCornerTL();
	});
	upDataCornerTL.addEventListener('touchstart', function() {
		clearTimeout(timerDataCornerTL);
		increaseDataCornerTL();
	});
	upDataCornerTL.addEventListener('mouseup', function() {
		clearTimeout(timerDataCornerTL);
	});
	upDataCornerTL.addEventListener('touchend', function() {
		clearTimeout(timerDataCornerTL);
	});
	upDataCornerTL.addEventListener('mouseleave', function() {
		clearTimeout(timerDataCornerTL);
	});
	downDataCornerTL.addEventListener('mousedown', function() {
		clearTimeout(timerDataCornerTL);
		decreaseDataCornerTL();
	});
	downDataCornerTL.addEventListener('touchstart', function() {
		clearTimeout(timerDataCornerTL);
		decreaseDataCornerTL();
	});
	downDataCornerTL.addEventListener('mouseup', function() {
		clearTimeout(timerDataCornerTL);
	});
	downDataCornerTL.addEventListener('touchend', function() {
		clearTimeout(timerDataCornerTL);
	});
	downDataCornerTL.addEventListener('mouseleave', function() {
		clearTimeout(timerDataCornerTL);
	});
	inputDataCornerTL.addEventListener('change', function() {
		let value = parseInt(inputDataCornerTL.value);
		const maxValue = parseInt(inputDataCornerTL.getAttribute('max'));
		const minValue = parseInt(inputDataCornerTL.getAttribute('min'));
		if (isNaN(value) || value < minValue) {
			inputDataCornerTL.value = minValue;
			value = minValue;
		} else if (value > maxValue) {
			inputDataCornerTL.value = maxValue;
			value = maxValue;
		}
		qr.dataCornerTL = value;
		if (value === minValue) {
			downDataCornerTL.classList.add('tr-input-number-handler-down-disabled');
		} else {
			downDataCornerTL.classList.remove('tr-input-number-handler-down-disabled');
		}
		if (value === maxValue) {
			upDataCornerTL.classList.add('tr-input-number-handler-up-disabled');
		} else {
			upDataCornerTL.classList.remove('tr-input-number-handler-up-disabled');
		}
	});
	inputDataCornerTL.dispatchEvent(new Event('change'));


	//Data Corner TR
	const increaseDataCornerTR = function() {
		let value = parseInt(inputDataCornerTR.value);
		const maxValue = parseInt(inputDataCornerTR.getAttribute('max'));
		const minValue = parseInt(inputDataCornerTR.getAttribute('min'));
		if (value < maxValue) {
			value++;
			inputDataCornerTR.value = value;
			qr.dataCornerTR = value;
			if (value === maxValue) {
				upDataCornerTR.classList.add('tr-input-number-handler-up-disabled');
			}
			if (value > minValue) {
				downDataCornerTR.classList.remove('tr-input-number-handler-down-disabled');
			}
			timerDataCornerTR = setTimeout(increaseDataCornerTR, 100);
		}
	};
	const decreaseDataCornerTR = function() {
		let value = parseInt(inputDataCornerTR.value);
		const minValue = parseInt(inputDataCornerTR.getAttribute('min'));
		const maxValue = parseInt(inputDataCornerTR.getAttribute('max'));
		if (value > minValue) {
			value--;
			inputDataCornerTR.value = value;
			qr.dataCornerTR = value;
			if (value === minValue) {
				downDataCornerTR.classList.add('tr-input-number-handler-down-disabled');
			}
			if (value < maxValue) {
				upDataCornerTR.classList.remove('tr-input-number-handler-up-disabled');
			}
			timerDataCornerTR = setTimeout(decreaseDataCornerTR, 100);
		}
	};
	upDataCornerTR.addEventListener('mousedown', function() {
		clearTimeout(timerDataCornerTR);
		increaseDataCornerTR();
	});
	upDataCornerTR.addEventListener('touchstart', function() {
		clearTimeout(timerDataCornerTR);
		increaseDataCornerTR();
	});
	upDataCornerTR.addEventListener('mouseup', function() {
		clearTimeout(timerDataCornerTR);
	});
	upDataCornerTR.addEventListener('touchend', function() {
		clearTimeout(timerDataCornerTR);
	});
	upDataCornerTR.addEventListener('mouseleave', function() {
		clearTimeout(timerDataCornerTR);
	});
	downDataCornerTR.addEventListener('mousedown', function() {
		clearTimeout(timerDataCornerTR);
		decreaseDataCornerTR();
	});
	downDataCornerTR.addEventListener('touchstart', function() {
		clearTimeout(timerDataCornerTR);
		decreaseDataCornerTR();
	});
	downDataCornerTR.addEventListener('mouseup', function() {
		clearTimeout(timerDataCornerTR);
	});
	downDataCornerTR.addEventListener('touchend', function() {
		clearTimeout(timerDataCornerTR);
	});
	downDataCornerTR.addEventListener('mouseleave', function() {
		clearTimeout(timerDataCornerTR);
	});
	inputDataCornerTR.addEventListener('change', function() {
		let value = parseInt(inputDataCornerTR.value);
		const maxValue = parseInt(inputDataCornerTR.getAttribute('max'));
		const minValue = parseInt(inputDataCornerTR.getAttribute('min'));
		if (isNaN(value) || value < minValue) {
			inputDataCornerTR.value = minValue;
			value = minValue;
		} else if (value > maxValue) {
			inputDataCornerTR.value = maxValue;
			value = maxValue;
		}
		qr.dataCornerTR = value;
		if (value === minValue) {
			downDataCornerTR.classList.add('tr-input-number-handler-down-disabled');
		} else {
			downDataCornerTR.classList.remove('tr-input-number-handler-down-disabled');
		}
		if (value === maxValue) {
			upDataCornerTR.classList.add('tr-input-number-handler-up-disabled');
		} else {
			upDataCornerTR.classList.remove('tr-input-number-handler-up-disabled');
		}
	});
	inputDataCornerTR.dispatchEvent(new Event('change'));


	//Data Corner BR
	const increaseDataCornerBR = function() {
		let value = parseInt(inputDataCornerBR.value);
		const maxValue = parseInt(inputDataCornerBR.getAttribute('max'));
		const minValue = parseInt(inputDataCornerBR.getAttribute('min'));
		if (value < maxValue) {
			value++;
			inputDataCornerBR.value = value;
			qr.dataCornerBR = value;
			if (value === maxValue) {
				upDataCornerBR.classList.add('tr-input-number-handler-up-disabled');
			}
			if (value > minValue) {
				downDataCornerBR.classList.remove('tr-input-number-handler-down-disabled');
			}
			timerDataCornerBR = setTimeout(increaseDataCornerBR, 100);
		}
	};
	const decreaseDataCornerBR = function() {
		let value = parseInt(inputDataCornerBR.value);
		const minValue = parseInt(inputDataCornerBR.getAttribute('min'));
		const maxValue = parseInt(inputDataCornerBR.getAttribute('max'));
		if (value > minValue) {
			value--;
			inputDataCornerBR.value = value;
			qr.dataCornerBR = value;
			if (value === minValue) {
				downDataCornerBR.classList.add('tr-input-number-handler-down-disabled');
			}
			if (value < maxValue) {
				upDataCornerBR.classList.remove('tr-input-number-handler-up-disabled');
			}
			timerDataCornerBR = setTimeout(decreaseDataCornerBR, 100);
		}
	};
	upDataCornerBR.addEventListener('mousedown', function() {
		clearTimeout(timerDataCornerBR);
		increaseDataCornerBR();
	});
	upDataCornerBR.addEventListener('touchstart', function() {
		clearTimeout(timerDataCornerBR);
		increaseDataCornerBR();
	});
	upDataCornerBR.addEventListener('mouseup', function() {
		clearTimeout(timerDataCornerBR);
	});
	upDataCornerBR.addEventListener('touchend', function() {
		clearTimeout(timerDataCornerBR);
	});
	upDataCornerBR.addEventListener('mouseleave', function() {
		clearTimeout(timerDataCornerBR);
	});
	downDataCornerBR.addEventListener('mousedown', function() {
		clearTimeout(timerDataCornerBR);
		decreaseDataCornerBR();
	});
	downDataCornerBR.addEventListener('touchstart', function() {
		clearTimeout(timerDataCornerBR);
		decreaseDataCornerBR();
	});
	downDataCornerBR.addEventListener('mouseup', function() {
		clearTimeout(timerDataCornerBR);
	});
	downDataCornerBR.addEventListener('touchend', function() {
		clearTimeout(timerDataCornerBR);
	});
	downDataCornerBR.addEventListener('mouseleave', function() {
		clearTimeout(timerDataCornerBR);
	});
	inputDataCornerBR.addEventListener('change', function() {
		let value = parseInt(inputDataCornerBR.value);
		const maxValue = parseInt(inputDataCornerBR.getAttribute('max'));
		const minValue = parseInt(inputDataCornerBR.getAttribute('min'));
		if (isNaN(value) || value < minValue) {
			inputDataCornerBR.value = minValue;
			value = minValue;
		} else if (value > maxValue) {
			inputDataCornerBR.value = maxValue;
			value = maxValue;
		}
		qr.dataCornerBR = value;
		if (value === minValue) {
			downDataCornerBR.classList.add('tr-input-number-handler-down-disabled');
		} else {
			downDataCornerBR.classList.remove('tr-input-number-handler-down-disabled');
		}
		if (value === maxValue) {
			upDataCornerBR.classList.add('tr-input-number-handler-up-disabled');
		} else {
			upDataCornerBR.classList.remove('tr-input-number-handler-up-disabled');
		}
	});
	inputDataCornerBR.dispatchEvent(new Event('change'));


	//Data Corner BL
	const increaseDataCornerBL = function() {
		let value = parseInt(inputDataCornerBL.value);
		const maxValue = parseInt(inputDataCornerBL.getAttribute('max'));
		const minValue = parseInt(inputDataCornerBL.getAttribute('min'));
		if (value < maxValue) {
			value++;
			inputDataCornerBL.value = value;
			qr.dataCornerBL = value;
			if (value === maxValue) {
				upDataCornerBL.classList.add('tr-input-number-handler-up-disabled');
			}
			if (value > minValue) {
				downDataCornerBL.classList.remove('tr-input-number-handler-down-disabled');
			}
			timerDataCornerBL = setTimeout(increaseDataCornerBL, 100);
		}
	};
	const decreaseDataCornerBL = function() {
		let value = parseInt(inputDataCornerBL.value);
		const minValue = parseInt(inputDataCornerBL.getAttribute('min'));
		const maxValue = parseInt(inputDataCornerBL.getAttribute('max'));
		if (value > minValue) {
			value--;
			inputDataCornerBL.value = value;
			qr.dataCornerBL = value;
			if (value === minValue) {
				downDataCornerBL.classList.add('tr-input-number-handler-down-disabled');
			}
			if (value < maxValue) {
				upDataCornerBL.classList.remove('tr-input-number-handler-up-disabled');
			}
			timerDataCornerBL = setTimeout(decreaseDataCornerBL, 100);
		}
	};
	upDataCornerBL.addEventListener('mousedown', function() {
		clearTimeout(timerDataCornerBL);
		increaseDataCornerBL();
	});
	upDataCornerBL.addEventListener('touchstart', function() {
		clearTimeout(timerDataCornerBL);
		increaseDataCornerBL();
	});
	upDataCornerBL.addEventListener('mouseup', function() {
		clearTimeout(timerDataCornerBL);
	});
	upDataCornerBL.addEventListener('touchend', function() {
		clearTimeout(timerDataCornerBL);
	});
	upDataCornerBL.addEventListener('mouseleave', function() {
		clearTimeout(timerDataCornerBL);
	});
	downDataCornerBL.addEventListener('mousedown', function() {
		clearTimeout(timerDataCornerBL);
		decreaseDataCornerBL();
	});
	downDataCornerBL.addEventListener('touchstart', function() {
		clearTimeout(timerDataCornerBL);
		decreaseDataCornerBL();
	});
	downDataCornerBL.addEventListener('mouseup', function() {
		clearTimeout(timerDataCornerBL);
	});
	downDataCornerBL.addEventListener('touchend', function() {
		clearTimeout(timerDataCornerBL);
	});
	downDataCornerBL.addEventListener('mouseleave', function() {
		clearTimeout(timerDataCornerBL);
	});
	inputDataCornerBL.addEventListener('change', function() {
		let value = parseInt(inputDataCornerBL.value);
		const maxValue = parseInt(inputDataCornerBL.getAttribute('max'));
		const minValue = parseInt(inputDataCornerBL.getAttribute('min'));
		if (isNaN(value) || value < minValue) {
			inputDataCornerBL.value = minValue;
			value = minValue;
		} else if (value > maxValue) {
			inputDataCornerBL.value = maxValue;
			value = maxValue;
		}
		qr.dataCornerBL = value;
		if (value === minValue) {
			downDataCornerBL.classList.add('tr-input-number-handler-down-disabled');
		} else {
			downDataCornerBL.classList.remove('tr-input-number-handler-down-disabled');
		}
		if (value === maxValue) {
			upDataCornerBL.classList.add('tr-input-number-handler-up-disabled');
		} else {
			upDataCornerBL.classList.remove('tr-input-number-handler-up-disabled');
		}
	});
	inputDataCornerBL.dispatchEvent(new Event('change'));
});