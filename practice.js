var loremchange=document.getElementById("lorem")
var btn=document.getElementById("btn")
var parent=document.getElementById("parent")
// // btn.onclick = () => {
//     // }
//     btn.addEventListener("click",vishnu)
//     function vishnu(){
        
//            loremchange.style.backgroundColor="red"
//              loremchange.style.color="red"
// }
//     btn.addEventListener("click",vishnu)
//     function vishnu(){
        
//            loremchange.style.backgroundColor="red"
//              loremchange.style.color="red"
// }
// document.getElementById("btn").onclick=function(){
// alert("btnclicked")
// loremchange.style.backgroundColor="yellow"
// loremchange.innerText="hello"
// loremchange.style.textAlign="center"
// loremchange.style.display="none"
// }
//e.stopPropagation()//prevents bubling
//prevetnt default to will not alloe to the chanfge the page.
//event.target.parentnode(needs to select parent)
//to remove the iomages the let removeIt=e.target.parentNode
// removeEventListener.remove()
setTimeout(()=>{
    parent.removeEventListener("click",vishnu)
})
function vishnu(){
    console.log(hi);
}
