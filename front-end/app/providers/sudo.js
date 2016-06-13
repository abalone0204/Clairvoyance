/**
 * [getCompanyName] get sudo company name with dumb way
 * @return {[string]} 
 */
function getCompanyName() {
	return document.querySelector('h1.header').innerText || null;
}

function getJobName() {
	return document.querySelector('h1').innerText || "";
}

const provider = {
  getCompanyName,
  getJobName
}

export default provider