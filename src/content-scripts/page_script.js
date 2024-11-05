
/*******************************************************************************************************
 * Storage
 *******************************************************************************************************/

function getFromStorage(id) {
	return localStorage.getItem(id);
}

function saveInStorage(id, json) {
	localStorage.setItem(id, json);
}

function get_auto() {
	let auto = localStorage.getItem('automatic_update');
	if (auto == 'true') {
		return true
	}
	return false
}

function enable_auto() {
	localStorage.setItem('automatic_update', 'true');
}

function disable_auto() {
	localStorage.setItem('automatic_update', 'false');
}

function setResults(size = 12000) {
	saveInStorage("page_size", size)
}
function getStorage() {

	var archive = [],
		keys = Object.keys(localStorage),
		i = 0, key;

	for (; key = keys[i]; i++) {
		archive.push(key + '=' + localStorage.getItem(key));
	}

	return archive;
}



function getRandomInt(min, max) {
	return Math.floor(min + Math.random() * (max - min));
}

function sleep() {
	let s = getRandomInt(2, 4);
	return new Promise(resolve => setTimeout(resolve, s * 500))
}



/*******************************************************************************************************
 * Crawler
 *******************************************************************************************************/
async function selecionarProximaCompra(limite = -1) {

	console.log("[Compra]", index_compra)

	let alvo = alvo_global ?? u('.fa-tasks')

	if (index_compra >= R.max(limite, alvo.nodes.length)) {
		console.debug(`[Limite Atingido]- Compra`)
		return false;
	}

	if (alvo.length > 0) {
		let compra_atual = u(alvo.nodes[index_compra])
		compra_atual.trigger('click');
		compra_atual.off()

		await sleep();
		index_compra++;


		return true;
	} else {
		//console.error(`[Não Encontrado]- Compra`)
		return false;
	}

}




/*******************************************************************************************************
 * Testa se o HCaptcha aparece
 *******************************************************************************************************/
async function testaCaptchaError() {
	const alvo = u('.p-toast-detail')
	if (alvo.length > 0) {
		console.error(`[CAPTCHA] - erro`)
		await sleep();
		return true;
	}
	return false;
}


/*******************************************************************************************************
 * Muda link da página
 *******************************************************************************************************/
async function changeLink(url) {
	await log(`Mudando Link`, `${url}` )
	window.location.assign(url);
}


/*******************************************************************************************************
 * Log centralizado no servidor
 *******************************************************************************************************/
async function log(path, message){
	try {
		const response = await fetch(`http://localhost:3000/log/Crawler`, { 
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		  	},
		  	body: JSON.stringify({path, message})
		});
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		
		return

	} catch (error) {
		console.error(`[Erro][Log]`, `${path}  ${message} ${error}` )
		
	}
}

async function getData(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		const json = await response.json();	
		return json
	} catch (error) {
		await log(`Erro getData`, `${url}` )
		return {
			error: true
		}
	}
}

/******************** Função Principal do Crawler *********************************/
async function crawl() {
	enable_auto()

	
	let data = await getData('http://localhost:3000/compra')
	await log(`Existe Próxima Compra?`, data ? data.proxima_compra : 'não')

	if (!data.proxima_compra) {
		await log(`Fim do Crawler`, "não há próxima compra")
		disable_auto()
	}
	else {
		
		await log(`Crawler vai para próxima compra`, data.proxima_compra)
		await getData(`http://localhost:3000/processar/${data.proxima_compra}`)
		await changeLink(`https://cnetmobile.estaleiro.serpro.gov.br/comprasnet-web/public/compras/acompanhamento-compra?compra=${data.proxima_compra}`)
	}


}

// A primeira execução a função crawler deve ser manual, as demais serão automáticas.
const auto = get_auto();
if (auto) {
	
	setTimeout(async () => {
		
		await crawl()
	}, 5000);


} 
	



