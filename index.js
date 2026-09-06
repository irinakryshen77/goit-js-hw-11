import{a as l,S as p,i as a}from"./assets/vendor-C1DvvBV_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();l.defaults.baseURL="https://pixabay.com/api";function h(s){return l.get("/",{params:{key:"57438008-644d4578100eb60c8f5ec14ee",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(o=>o.data.hits)}const c=document.querySelector(".gallery"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".loader");function g(s){const o=s.map(({largeImageURL:i,webformatURL:r,tags:e,likes:t,views:n,comments:f,downloads:m})=>`<li class="gallery-item">
      <a href="${i}">
        <img
          src="${r}"
          alt="${e}"
          width="360"
        />
      </a>

      <ul class="descriprion">
        <li>Likes <span>${t}</span></li>
        <li>Views <span>${n}</span></li>
        <li>Comments <span>${f}</span></li>
        <li>Downloads <span>${m}</span></li>
      </ul>
    </li>
`).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function L(){c.innerHTML=""}function b(){u.classList.remove("is-hidden")}function w(){u.classList.add("is-hidden")}const d=document.querySelector(".form");d.addEventListener("submit",q);function q(s){s.preventDefault();const i=s.currentTarget.elements["search-text"].value.trim();if(i===""){a.show({message:"Please enter search word",color:"red",position:"topRight",timeout:5e3});return}L(),b(),h(i).then(r=>{const e=Array.isArray(r)?r:r.hits;if(!e||e.length===0){a.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:5e3});return}g(e)}).catch(r=>{console.log(r),a.show({message:"Ops... try again!",color:"red",position:"topRight",timeout:5e3})}).finally(()=>{w(),d.reset()})}
//# sourceMappingURL=index.js.map
