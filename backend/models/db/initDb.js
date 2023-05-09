const Category = require('../Category');
const Post = require('../Post')
const User = require('../User')

function inicializarDb() {
    //testar se tem a tabela criada, caso não, criar todas
    //Serve para primeira execução do projeto, não foi criado migrations
    const { Op } = require("sequelize");
    User.findOne({ where: { id: { [Op.not]: null } } }).then().catch(async () => {
        //Tabelas
        await User.sync({ force: true }).then(() => {
            console.log('Migração: Usuario: OK');
        }).catch((error) => {
            console.log('Migração: Usuario: Erro: ' + error);
        })
        await Category.sync({ force: true }).then(() => {
            console.log('Migração: Categoria: OK');
        }).catch((error) => {
            console.log('Migração: Categoria: Erro: ' + error);
        })
        await Post.sync({ force: true }).then(() => {
            console.log('Migração: Postagens: OK');
        }).catch((error) => {
            console.log('Migração: Postagens: Erro: ' + error);
        })
        //Cadastros
        await User.create({ name: 'Luís', email: 'luis@blogdoluis.com', password: '$2a$12$xXmSdY79/b2euaYfLLZL9O5m6dc3mFy8D.i583m..GNNn000MFnUS' }).then(console.log('Cadastro de usuário1: OK')).catch((error) => { console.log('Cadastro de usuário1: Erro: ' + error) })
        await User.create({ name: 'Araújo', email: 'araujo@blogdoluis.com', password: '$2a$12$xXmSdY79/b2euaYfLLZL9O5m6dc3mFy8D.i583m..GNNn000MFnUS' }).then(console.log('Cadastro de usuário2: OK')).catch((error) => { console.log('Cadastro de usuário2: Erro: ' + error) })
        await User.create({ name: 'Luisa', email: 'luisa@blogdoluis.com', password: '$2a$12$xXmSdY79/b2euaYfLLZL9O5m6dc3mFy8D.i583m..GNNn000MFnUS' }).then(console.log('Cadastro de usuário3: OK')).catch((error) => { console.log('Cadastro de usuário3: Erro: ' + error) })
        await Category.create({ name: 'Padrão' }).then(console.log('Cadastro de categoria1: OK')).catch((error) => { console.log('Cadastro de categoria1: Erro: ' + error) })
        await Category.create({ name: 'Carros' }).then(console.log('Cadastro de categoria2: OK')).catch((error) => { console.log('Cadastro de categoria2: Erro: ' + error) })
        await Category.create({ name: 'Motos' }).then(console.log('Cadastro de categoria3: OK')).catch((error) => { console.log('Cadastro de categoria3: Erro: ' + error) })
        await Category.create({ name: 'Viagens' }).then(console.log('Cadastro de categoria4: OK')).catch((error) => { console.log('Cadastro de categoria4: Erro: ' + error) })
        await Post.create({
            title: 'Viajando pelo mundo', content: `Viajar de carro é uma experiência única e empolgante, que permite ao viajante desfrutar do trajeto e das paisagens que se revelam no caminho. Além disso, essa forma de viajar permite maior liberdade e flexibilidade na hora de definir o roteiro, permitindo paradas estratégicas para explorar cidades ou pontos turísticos que surgem no meio do caminho.

        Uma das grandes vantagens de viajar de carro é a possibilidade de levar consigo toda a bagagem necessária para a viagem, sem as restrições impostas por companhias aéreas ou de transporte público. Com um porta-malas espaçoso e um planejamento cuidadoso, é possível levar tudo o que for necessário para a viagem, incluindo equipamentos esportivos, mantimentos, roupas e itens de higiene pessoal.
        
        Além disso, viajar de carro permite que o viajante se conecte de forma mais íntima com as paisagens e culturas locais, possibilitando descobrir lugares pouco conhecidos ou fora dos roteiros turísticos tradicionais. Ao longo do trajeto, é possível conhecer cidades pitorescas, apreciar a natureza, descobrir restaurantes e bares típicos e fazer paradas para fotografar ou explorar a região.`, userId: 1, categoryId: 2
        }).then(console.log('Cadastro de postagem1: OK')).catch((error) => { console.log('Cadastro de postagem1: Erro: ' + error) })
        await Post.create({
            title: 'Minha moto na estrada', content: `Viajar de moto é uma experiência emocionante e desafiadora, que permite ao viajante sentir a liberdade da estrada e a adrenalina da velocidade. Com um roteiro bem planejado, essa forma de viajar permite explorar as paisagens de forma mais intensa e chegar a lugares que seriam inacessíveis de carro ou transporte público.

        Além disso, viajar de moto pode ser uma experiência mais econômica do que outras formas de transporte, especialmente em viagens de longa distância. Com um tanque cheio, é possível percorrer muitos quilômetros antes de precisar reabastecer, o que pode ser um diferencial em viagens mais longas e em locais com poucas opções de abastecimento. No entanto, é importante lembrar-se dos equipamentos de segurança e fazer revisões frequentes na moto antes de pegar a estrada.`, userId: 2, categoryId: 3
        }).then(console.log('Cadastro de postagem2: OK')).catch((error) => { console.log('Cadastro de postagem2: Erro: ' + error) })
        await Post.create({
            title: 'Carregar e pé na estrada', content: `Carros elétricos são veículos que usam eletricidade como fonte de energia para mover-se. Eles são uma alternativa aos carros movidos a combustíveis fósseis, e oferecem várias vantagens, como a redução da poluição do ar, diminuição da dependência de petróleo e economia de dinheiro em combustível. Os carros elétricos também são mais silenciosos e requerem menos manutenção do que os carros a gasolina ou diesel.

            Ao contrário dos carros convencionais, os carros elétricos não têm um motor a combustão interna, mas sim um motor elétrico alimentado por baterias. Estas baterias podem ser recarregadas em estações de carregamento ou em casa. A duração da carga da bateria varia de acordo com o modelo do carro e o tipo de bateria utilizada, mas em geral os carros elétricos têm uma autonomia de 300 a 500 km.
            
            Embora os carros elétricos ofereçam muitas vantagens, ainda enfrentam alguns desafios. A infraestrutura de carregamento ainda é limitada em muitas áreas, o que pode dificultar as viagens de longa distância. Além disso, o custo inicial de compra de um carro elétrico ainda é maior do que o de um carro convencional, embora o custo de operação a longo prazo seja menor. No entanto, com o aumento da demanda e a melhoria da tecnologia, os carros elétricos estão se tornando cada vez mais acessíveis e práticos para uso diário.`, userId: 2, categoryId: 3
        }).then(console.log('Cadastro de postagem2: OK')).catch((error) => { console.log('Cadastro de postagem3: Erro: ' + error) })
    })
}
module.exports = { inicializarDb: inicializarDb }