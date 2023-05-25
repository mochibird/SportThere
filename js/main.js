'use strict';
{
  const heroImg = document.querySelector('.p-hero__img');
  const serviceHead = document.querySelector('.p-service-heading');
  const serviceItems = document.querySelectorAll('.p-service__card-item');
  const corresBody = document.querySelector('.p-corres__body');
  const corresImg = document.querySelector('.p-corres__img-wrapper');
  const campMeg = document.querySelector('.p-camp-message');

  function 	firstCall(entries, obs){
    entries.forEach(entry =>{
      if(!entry.isIntersecting){
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

function secondCall(entries, obs){
  entries.forEach(entry =>{
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add('appear');
    obs.unobserve(entry.target);
  });

}

const options = {
threshold: 0.2,
};

  const firstObserver = new IntersectionObserver(firstCall, options);
  serviceItems.forEach(serviceItem =>{
    firstObserver.observe(serviceItem);
  });

  const secondObserver = new IntersectionObserver(secondCall, options);
  secondObserver.observe(serviceHead);
  secondObserver.observe(corresBody);
  secondObserver.observe(corresImg);
  secondObserver.observe(campMeg);


window.addEventListener('load', () => {
  heroImg.classList.add('active');
});
}
