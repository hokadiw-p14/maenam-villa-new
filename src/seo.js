const path=location.pathname;
const roomMap={
"/rooms/beach-front-bangalo.html":"Beach Front Bangalo",
"/rooms/bangalo.html":"Bangalo",
"/rooms/sea-view.html":"Sea View",
"/rooms/standard.html":"Standard",
"/rooms/balcony.html":"Balcony",
"/rooms/single.html":"Single"
};
const hotel={"@context":"https://schema.org","@type":"Hotel","name":"Maenam Villa Hotel","url":"https://www.maenamvilla.com/","telephone":["+66979211007","+66839039930"],"email":["Sales@maenamvilla.com","admin@maenamvilla.com"],"address":{"@type":"PostalAddress","streetAddress":"5/5 Moo 1","addressLocality":"Maenam","addressRegion":"Surat Thani","postalCode":"84330","addressCountry":"TH"},"numberOfRooms":14,"sameAs":["https://www.maenamvilla.com/"]};
const graph=[hotel];
if(roomMap[path]){
 graph.push({"@context":"https://schema.org","@type":"HotelRoom","name":roomMap[path],"containedInPlace":{"@type":"Hotel","name":"Maenam Villa Hotel","url":"https://www.maenamvilla.com/"},"url":location.href});
 graph.push({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Maenam Villa","item":location.origin+"/maenam-villa-new/"},{"@type":"ListItem","position":2,"name":"Rooms","item":location.origin+"/maenam-villa-new/#rooms"},{"@type":"ListItem","position":3,"name":roomMap[path],"item":location.href}]});
}else{
 graph.push({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Maenam Villa","item":location.href}]});
}
const el=document.createElement("script");el.type="application/ld+json";el.textContent=JSON.stringify({"@context":"https://schema.org","@graph":graph});document.head.appendChild(el);