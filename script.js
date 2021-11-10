let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];



Array.prototype.heroesRender = function (universe) {
    const content =  this.map(({ name }) => (
            `
                <tr>
                    <td>${name}</td>
                    <td>
                      <img src="images/${universe}/${name.split(' ').join('').toLowerCase()}.svg">
                    </td>
                </tr>
            `
        )).join('');

    return  (
        document.write`<table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Icon</th>
                </tr>
            </thead>
            <tbody>
                ${content}
            </tbody>
        </table>
        `
    );
};





marvelHeroes.heroesRender('marvel');
dcHeroes.heroesRender(`dc`);
