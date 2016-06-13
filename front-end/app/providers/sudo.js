function get_company_name() {
	return document.querySelector('h1.header').innerText || null;
}

function get_job_name() {
	return document.querySelector('h1').innerText || "";
}

function get_sudo_job_no() {
	if(location.pathname.includes('jobs')) {
	  pathNameArr = location.pathname.split('/');
		return pathNameArr[pathNameArr.length - 1];
	} else {
		return null;
	}
}

const provider = {
  get_company_name,
  get_job_name,
  get_sudo_job_no
}

export default provider