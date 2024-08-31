const $=(r,s)=>s.filter((e,t)=>1<<t&r).reduce((e,t)=>`${e}${e&&", "}${t}`,"");export{$ as b};
