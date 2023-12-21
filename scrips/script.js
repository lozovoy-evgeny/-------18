const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');
const box7 = document.getElementById('box7');
const box8 = document.getElementById('box8');
const box9 = document.getElementById('box9');
const box10 = document.getElementById('box10');
const box11 = document.getElementById('box11');

const projectsBox1 = document.getElementById('projectsBox1');
const projectsBox2 = document.getElementById('projectsBox2');
const projectsBox3 = document.getElementById('projectsBox3');

const infoProjects1 = document.getElementById('infoProjects1');
const infoProjects2 = document.getElementById('infoProjects2');
const infoProjects3 = document.getElementById('infoProjects3');

const imgProjects1 = document.getElementById('imgProjects1');
const imgProjects2 = document.getElementById('imgProjects2');
const imgProjects3 = document.getElementById('imgProjects3');



function handleRadioClick() {
  if (document.getElementById('radio1').checked) {
    box1.style.display = 'flex';
  } else {
    box1.style.display = 'none';
  }
  if (document.getElementById('radio2').checked) {
    box2.style.display = 'flex';
  } else {
    box2.style.display = 'none';
  }
  if (document.getElementById('radio3').checked) {
    box3.style.display = 'flex';
  } else {
    box3.style.display = 'none';
  }
  if (document.getElementById('radio4').checked) {
    box4.style.display = 'flex';
  } else {
    box4.style.display = 'none';
  }
  if (document.getElementById('radio5').checked) {
    box5.style.display = 'flex';
  } else {
    box5.style.display = 'none';
  }
  if (document.getElementById('radio6').checked) {
    box6.style.display = 'flex';
  } else {
    box6.style.display = 'none';
  }
  if (document.getElementById('radio7').checked) {
    box7.style.display = 'flex';
  } else {
    box7.style.display = 'none';
  }
  if (document.getElementById('radio8').checked) {
    box8.style.display = 'flex';
  } else {
    box8.style.display = 'none';
  }
  if (document.getElementById('radio9').checked) {
    box9.style.display = 'flex';
  } else {
    box9.style.display = 'none';
  }
  if (document.getElementById('radio10').checked) {
    box10.style.display = 'flex';
  } else {
    box10.style.display = 'none';
  }
  if (document.getElementById('radio11').checked) {
    box11.style.display = 'flex';
  } else {
    box11.style.display = 'none';
  }
}

function handleRadioClick1() {
  if (document.getElementById('radioProjects1').checked) {
    projectsBox1.style.display = 'grid';
    infoProjects1.className = 'completed-projects-info-visualization-1 on';
    imgProjects1.style.display = 'grid';
  } else {
    projectsBox1.style.display = 'none';
    infoProjects1.className = 'completed-projects-info-visualization-1 off';
    imgProjects1.style.display = 'none';
  }
  if (document.getElementById('radioProjects2').checked) {
    projectsBox2.style.display = 'grid';
    infoProjects2.className = 'completed-projects-info-visualization-2 on';
    imgProjects2.style.display = 'grid';
  } else {
    projectsBox2.style.display = 'none';
    infoProjects2.className = 'completed-projects-info-visualization-2 off';
    imgProjects2.style.display = 'none';
  }
  if (document.getElementById('radioProjects3').checked) {
    projectsBox3.style.display = 'grid';
    infoProjects3.className = 'completed-projects-info-visualization-3 on';
    imgProjects3.style.display = 'grid';
  } else {
    projectsBox3.style.display = 'none';
    infoProjects3.className = 'completed-projects-info-visualization-3 off';
    imgProjects3.style.display = 'none';
  }
}

function arrowLeft() {
  if (document.getElementById('radioProjects1').checked) {
    document.getElementById('radioProjects3').checked = true;
    handleRadioClick1();
  } else if (document.getElementById('radioProjects3').checked) {
    document.getElementById('radioProjects2').checked = true;
    handleRadioClick1();
  } else if (document.getElementById('radioProjects2').checked) {
    document.getElementById('radioProjects1').checked = true;
    handleRadioClick1();
  }
}

function arrowRight() {
  if (document.getElementById('radioProjects1').checked) {
    document.getElementById('radioProjects2').checked = true;
    handleRadioClick1();
  } else if (document.getElementById('radioProjects2').checked) {
    document.getElementById('radioProjects3').checked = true;
    handleRadioClick1();
  } else if (document.getElementById('radioProjects3').checked) {
    document.getElementById('radioProjects1').checked = true;
    handleRadioClick1();
  }
}

const radioButtons = document.querySelectorAll('input[name="radio1"]');
radioButtons.forEach(radio => {
  radio.addEventListener('click', handleRadioClick);
});

const radioButtons1 = document.querySelectorAll('input[name="radio2"]');
radioButtons1.forEach(radio => {
  radio.addEventListener('click', handleRadioClick1);
});


var playButton = document.getElementById("playButton");
var myVideo = document.getElementById("myVideo");

playButton.addEventListener('click', function() {
  if (myVideo.paused) {
    myVideo.setAttribute("controls", "controls");
    myVideo.play();
    playButton.style.visibility = "hidden";
  } else {
    myVideo.pause();
  }
});

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  })

  if (slideIndex === 0) {
    projectsBox1.style.display = 'grid';
  } else {
    projectsBox1.style.display = 'none';
  }
  if (slideIndex === 1) {
    projectsBox2.style.display = 'grid';
  } else {
    projectsBox2.style.display = 'none';
  }
  if (slideIndex === 2) {
    projectsBox3.style.display = 'grid';
  } else {
    projectsBox3.style.display = 'none';
  };
}

updateSlider();

const sliderRealize = document.querySelector('.slider-realize');

const prevButtonRealize = document.querySelector('.prev-button-realize');
const nextButtonRealize = document.querySelector('.next-button-realize');

const slidesRealize = Array.from(sliderRealize.querySelectorAll('img'));

const slideCountRealize = slidesRealize.length;

let slideIndexRealize = 0;

prevButtonRealize.addEventListener('click', showPreviousSlideRealize);
nextButtonRealize.addEventListener('click', showNextSlideRealize);

function showPreviousSlideRealize() {
  slideIndexRealize = (slideIndexRealize - 1 + slideCountRealize) % slideCountRealize;
  updateSliderRealize();
}

function showNextSlideRealize() {
  slideIndexRealize = (slideIndexRealize + 1) % slideCountRealize;
  updateSliderRealize();
}

function updateSliderRealize() {
  slidesRealize.forEach((slide, index) => {
    if (index === slideIndexRealize) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  })
}


updateSliderRealize();