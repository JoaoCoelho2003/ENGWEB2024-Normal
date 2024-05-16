# ENGWEB2024-Normal

## Preparação de Dados

Primeiramente, foi necessário transformar o dataset fornecido pelos professores, que estava em formato CSV, para um formato JSON. Para tal, foi utilizado o o site [CSV to JSON](https://www.csvjson.com/csv2json) para converter o ficheiro CSV para JSON.

De seguida, após a conversão do ficheiro, foi necessário fazer algumas alterações ao ficheiro JSON, já que havia um atributo, precoContratual, que aparecia tanto como string como número. Para resolver este problema, foi necessário fazer um script em Python que percorresse o ficheiro JSON e alterasse o tipo de dados do atributo precoContratual para número. O script utilizado foi o seguinte [fixNumberDataset](./ex1/fixNumberDataset.py).

Assim, após estas alterações todas, ficamos com o ficheiro JSON pronto para ser utilizado, [dataset](./ex1/datasets/contratos2024Final.json).

Finalmente, podemos então criar o docker container com a base de dados MongoDB, recorrendo a um docker-compose.yml, que pode ser encontrado [aqui](./ex1/docker-compose.yml).

Este docker compose foi criado automaticamente utilizando um script em python, que pode ser encontrado [aqui](./ex1/create_docker.py).

Para criar o docker, é necessário correr o seguinte comando:

```bash
$ sudo python create_docker.py <db_name> <container_name> <collection_name1> <json_file_path1> [<collection_name2> <json_file_path2> ...]
```

Neste caso, como só temos um ficheiro, o comando a correr é o seguinte:

```bash
$ sudo python create_docker.py contratos contratos contratos ./datasets/contratos2024Final.json
```

Com o docker-compose.yml criado, podemos então correr o seguinte comando para criar o container:

```bash
$ sudo docker-compose up -d
```

E, caso queira parar o container, basta correr o seguinte comando:

```bash
$ sudo docker-compose down
```

## Comandos a Executar

Para correr a API, ex1, é necessário correr os seguintes comandos:

```bash
$ npm install
$ npm start
```

Para correr o serviço web, ex2, é necessário correr os seguintes comandos:

```bash
$ npm install
$ node server.js
```

## Autor

- Nome: João Coelho

- Número: A100596