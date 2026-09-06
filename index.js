import{a as l,S as m,i as a}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();l.defaults.baseURL="https://pixabay.com/api";function h(i){return l.get("/",{params:{key:"57438008-644d4578100eb60c8f5ec14ee",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data.hits)}const c=document.querySelector(".gallery"),g=new m(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".loader");function y(i){const r=i.map(({largeImageURL:o,webformatURL:n,tags:e,likes:t,views:s,comments:f,downloads:p})=>`<li class="gallery-item">
      <a href="${o}">
        <img
          src="${n}"
          alt="${e}"
          width="360"
        />
      </a>

      <ul class="descriprion">
        <li>Likes <span>${t}</span></li>
        <li>Views <span>${s}</span></li>
        <li>Comments <span>${f}</span></li>
        <li>Downloads <span>${p}</span></li>
      </ul>
    </li>
`).join("");c.insertAdjacentHTML("beforeend",r),g.refresh()}function L(){c.innerHTML=""}function b(){u.classList.remove("is-hidden")}function w(){u.classList.add("is-hidden")}const d=document.querySelector(".form");d.addEventListener("submit",S);function S(i){i.preventDefault();const r=i.currentTarget.elements["search-text"];if(r.value.trim()===""){a.show({message:"Please enter search word",color:"red",position:"topRight",timeout:5e3});return}L(),b(),h(r.value).then(o=>{o.length===0?a.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:5e3}):y(o)}).catch(o=>{console.log(o),a.show({message:"Ops... try again!",color:"red",position:"topRight",timeout:5e3})}).finally(()=>{w(),d.reset()})}
//# sourceMappingURL=index.js.map
