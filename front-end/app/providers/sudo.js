/**
 * [getCompanyName] get sudo company name with dumb way
 * @return {[string]} 
 */
function getCompanyName() {
	return document.querySelector("h1.header").innerText() || null;
}


const provider = {
  getCompanyName
}

export default provider