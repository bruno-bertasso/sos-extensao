function guidGenerator(){const e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}const sendMessageId=document.getElementById("sendmessageid");sendMessageId&&(sendMessageId.onclick=function(){chrome.tabs.query({active:!0,currentWindow:!0},(function(e){chrome.tabs.sendMessage(e[0].id,{url:"https://cnetmobile.estaleiro.serpro.gov.br/comprasnet-web/public/compras/acompanhamento-compra?compra=16023805000332022",imageDivId:`${guidGenerator()}`,tabId:e[0].id},(function(e){window.close()}))}))});