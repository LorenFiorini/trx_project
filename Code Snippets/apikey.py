import requests

url = "https://api.trongrid.io/wallet/createtransaction"

payload = "{\n    \"to_address\": \"41e9d79cc47518930bc322d9bf7cddd260a0260a8d\",\n    \"owner_address\": \"41D1E7A6BC354106CB410E65FF8B181C600FF14292\",\n    \"amount\": 1000\n}"
headers = {
    'Content-Type': "application/json",
    'TRON-PRO-API-KEY': #"25f66928-0b70-48cd-9ac6-da6f8247c663"
    "42530830-83f7-4236-8093-30aa835d9517"
    }
response = requests.request("POST", url, data=payload, headers=headers)
print(response.text)
