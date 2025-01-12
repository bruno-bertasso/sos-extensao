function guidGenerator() {
	const S4 = function () {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	};
	return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

const sendMessageId = document.getElementById("sendmessageid");

if (sendMessageId) {
	sendMessageId.onclick = function () {
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			chrome.tabs.sendMessage(
				tabs[0].id,
				{
					url: "https://cnetmobile.estaleiro.serpro.gov.br/comprasnet-web/public/compras/acompanhamento-compra?compra=16023805000332022",
					imageDivId: `${guidGenerator()}`,
					tabId: tabs[0].id
				},
				function (response) {
					window.close();
				}
			);

		});
	};
}