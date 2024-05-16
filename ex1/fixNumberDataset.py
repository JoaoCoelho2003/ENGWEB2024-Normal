import json

with open('./datasets/contratos.json', 'r') as f:
    data = json.load(f)

for i in range(len(data)):
    if isinstance(data[i]['precoContratual'], str):
            preco_contratual = data[i]['precoContratual'].replace(',', '.')
            data[i]['precoContratual'] = float(preco_contratual)
    else:
        data[i]['precoContratual'] = float(data[i]['precoContratual'])

with open('./datasets/contratos2024Final.json', 'w') as f:
    json.dump(data, f, indent=4, ensure_ascii=False)