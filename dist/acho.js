class Acho{getActiveTab=async()=>(await chrome.tabs.query({active:!0,currentWindow:!0}))[0];getBarkedTitle=a=>`${this.getRandomBark()} Ahem.. I mean, we are at: <br><b>${a}</b>`;growl=async()=>{await chrome.action.setBadgeBackgroundColor({color:"#F00"}),await chrome.action.setBadgeText({text:"play"})};quiet=async()=>{await chrome.action.setBadgeText({text:""})};getBarks=()=>["Barf barf!","Birf birf!","Woof woof!","Arf arf!","Yip yip!","Biiiirf!"];getRandomBark=()=>{const a=this.getBarks();return a[Math.floor(Math.random()*a.length)]}}