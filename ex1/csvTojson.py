import csv
import json

# Define the input and output file paths explicitly
input_file = './datasets/contratos2024.csv'
output_file = './datasets/contratos.json'

def csv_to_json(input_file, output_file):
    # Read the CSV file
    with open(input_file, mode='r', encoding='utf-8') as file:
        csv_reader = csv.DictReader(file, delimiter=';')
        data_list = [row for row in csv_reader]

    # Convert list of dictionaries to JSON
    json_data = json.dumps(data_list, indent=4, ensure_ascii=False)

    # Write JSON data to the output file
    with open(output_file, mode='w', encoding='utf-8') as file:
        file.write(json_data)

def main():
    # Convert CSV to JSON using the explicitly specified paths
    csv_to_json(input_file, output_file)

if __name__ == '__main__':
    main()
