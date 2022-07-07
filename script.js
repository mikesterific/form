
(() => {

  const form = document.getElementById('form'),
        user = document.getElementById('username'),
        pass1 = document.getElementById('password1'),
        pass2 = document.getElementById('password2');

  form.addEventListener('focus', e => {
    if (e.target.matches('.textInput')) {
      focus(e.target);
    }
  }, true);

  form.addEventListener('blur', e => {
    if (e.target.matches('.textInput')) {
      blur(e.target);
      runPasswordValidation();
      runEmptyValidation([e.target]);
    }
  }, true);

  form.addEventListener('click', e => {
    if (e.target.matches('#submit')) {
      e.preventDefault();
      runPasswordValidation();
      runEmptyValidation([user, pass1, pass2]);
    }
  }, true);

  function focus(target) {
    const wrap = getWrap(target);
    wrap.classList.add('active');
  }

  function blur(target) {
    if (target.value !== '') { return; }
    const wrap = getWrap(target);
    wrap.classList.remove('active');
  }

  function getWrap(target) {
    return target.closest('.inputWrap');
  }

  function runPasswordValidation(){
    if(pass1.value === '' || pass2.value === '') {return;}
    if(pass1.value === pass2.value){
      form.classList.remove('repeatError');
    } else {
      form.classList.add('repeatError');
    }
  }

  function runEmptyValidation(targets){
    for(target of targets){
      const wrap = getWrap(target);
      if(target.hasAttribute('data-required') && target.value === ''){
        wrap.classList.add('requireError');
      } else {
        wrap.classList.remove('requireError');
      }
    }
  }

})()

