const r=(e,o=document)=>Array.prototype.slice.call(o.querySelectorAll(e)),c=()=>{var e=" -webkit- -moz- -o- -ms- ".split(" "),o=function(n){return window.matchMedia(n).matches};if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)return!0;var t=["(",e.join("touch-enabled),("),"heartz",")"].join("");return o(t)};export{r as f,c as i};
