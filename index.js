const http = require('http')
const axios = require('axios');
const cheerio = require('cheerio');

const port = process.env.port || 3000

const server = http.createServer((req, res) => {

  /*const getPostTitles = async () => {
	try {
		const { data } = await axios.get(
			'https://www.paulus.com.br/portal/liturgia-diaria/'
		);
  
		const $ = cheerio.load(data);
		let postTitles = '';

		$('div#texto').each((_idx, el) => {
			const postTitle = $(el).html()
			//postTitles.push(postTitle)
      postTitles += postTitle
		});

		return postTitles;

	} catch (error) {
		throw error;
	}
};

  getPostTitles().then((postTitles) => 
    res.write('<div class="conteudo"> <div class="textoPrincipal">' +  postTitles + '</div>')
  );*/

res.end("ok")

})

server.listen(port, ()=> {
	console.log(`Servidor rodando na porta ${port}`)
})
