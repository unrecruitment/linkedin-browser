// ==UserScript==
// @name     Unnamed Script 514514
// @version  1
// @grant    none
// ==/UserScript==

bad_words = ["#Vlčata", "oronavirus"];

//

console.log(bad_words);

if (window.top !== window.self)
  return;

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
  // Add the actions to be done here if a changes on DOM happened 
  console.log(mutations, observer);
  let elements = document.querySelectorAll('[data-id]')

  console.log(`userscript ${elements.length}`);
  console.log(elements.forEach);
  
	elements.forEach(function(element) {
    let contents = element.innerText;
    let good = true;
    
    bad_words.forEach((word) => {
      if (contents.includes(word)) {
        good = false;
      }
    });
    
    if (!good) {
      element.style.opacity = '40%';
    }
  });
});

observer.observe(document, {
  subtree: true,
  attributes: true
});
