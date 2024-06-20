## API Saved from browser
### Get stock data from Lidl

<strong>url:</strong>

`https://www.lidl.pl/p/api/storestock/PL/pl/ITEM_ID?storeids=STORE_ID,STORE_ID,...`

where `ITEM_ID` is the product id and `STORE_ID` is the store id.

<strong>Example:</strong>

`https://www.lidl.pl/p/api/storestock/PL/pl/100375575?storeids=1628,1534,1629,1819,1655,1332,1482,1095,2138,1671,1373,1464`

response is a json object with stock data.

```json
[
    {
        "storeAvailabilityIndicator": "LOW_STOCK",
        "lastUpdatedDate": 1718880300,
        "storeId": "1464"
    },
    {
        "storeAvailabilityIndicator": "AVAILABLE",
        "lastUpdatedDate": 1718886060,
        "storeId": "2138"
    },
  ...
]
```

### Get stores data

Lidl stores data can be obtained using microsoft's spatial data service. [Docs link](https://learn.microsoft.com/en-us/bingmaps/spatial-data-services/query-api/query-by-area#url-template)

<strong>url:</strong>

`http://spatial.virtualearth.net/REST/v1/data/accessId/dataSourceName/entityTypeName?spatialFilter=nearby(latitude,longitude,distance)&queryoption1&queryoption2&queryoptionN&jsonp=jsonCallBackFunction&jsonso=jsonState&isStaging=isStaging&key=queryKey`

where `latitude` and `longitude` are the coordinates of the center of the area, `distance` is the radius of the area, `queryKey` is the key.

<strong>Example:</strong>

`https://spatial.virtualearth.net/REST/v1/data/f4c8c3e0d96748348fe904413a798be3/Filialdaten-PL/Filialdaten-PL?$select=*,__Distance&$filter=Adresstyp%20eq%201&key=AnZ7UrM33kcHeNxFJsJ6McC4-iAx6Mv55FfsAzmlImV6eJ1n6OX4zfhe2rsut6CD&$format=json&jsonp=Microsoft_Maps_Network_QueryAPI_2&spatialFilter=nearby(51.2506,22.5701,5.382351000000001)`

response is a json object with stores data.

```json
Microsoft_Maps_Network_QueryAPI_2({
    "d": {
        "__copyright": "\u00a9 2024 Microsoft and its suppliers.  This API and any results cannot be used or accessed without Microsoft's express written permission.",
        "results": [
            {
                "__metadata": {
                    "uri": "https:\/\/spatial.virtualearth.net\/REST\/v1\/data\/f4c8c3e0d96748348fe904413a798be3\/Filialdaten-PL\/Filialdaten-PL('1628')"
                },
                "EntityID": "1628",
                "CountryRegion": "PL",
                "PostalCode": "20-119",
                "Locality": "Lublin",
                "AddressLine": "ul. Bia\u0142kowska G\u00f3ra 3",
                "OpeningTimes": "po 06:00-22:00<br>wt 06:00-22:00<br>\u015br 06:00-22:00<br>cz 06:00-22:00<br>pi 06:00-22:00<br>so 06:00-22:00<br><br>30.06. 08:00-20:00<br><br>Dotyczy tylko niedziel handlowych",
                "Longitude": 22.581180,
                "Latitude": 51.250830,
                "AR": 13,
                "NF": true,
                "ShownPostalCode": "20-119",
                "ShownLocality": "Lublin",
                "ShownAddressLine": "ul. Bia\u0142kowska G\u00f3ra 3",
                "ShownStoreName": "Lublin, ul. Bia\u0142kowska G\u00f3ra 3",
                "CityDistrict": "",
                "Bilanzgesellschaft": 13,
                "OverlayOperatorData": "Lidl sp. z o.o. sp. k. \u2022 <br\/>ul. Pozna\u0144ska 48, Jankowice \u2022 <br\/>62-080 Tarnowo Podg\u00f3rne",
                "Adresstyp": 1,
                "Holidays": "",
                "AccountTypeId": "285540000",
                "INFOICON1": "disParking",
                "INFOICON2": "bake",
                "INFOICON3": "",
                "INFOICON4": "parking",
                ...
                "INFOICON10": "lidlPlus",
                ...
                "__Distance": 0.772438702602492
            },
            {
                "__metadata": {
                    "uri": "https:\/\/spatial.virtualearth.net\/REST\/v1\/data\/f4c8c3e0d96748348fe904413a798be3\/Filialdaten-PL\/Filialdaten-PL('1534')"
                },
                "EntityID": "1534",
                "CountryRegion": "PL",
                "PostalCode": "20-128",
                "Locality": "Lublin",
                "AddressLine": "ul. Lwowska 48",
                "OpeningTimes": "po 06:00-22:00<br>wt 06:00-22:00<br>\u015br 06:00-22:00<br>cz 06:00-22:00<br>pi 06:00-22:00<br>so 06:00-22:00<br><br>30.06. 08:00-20:00<br><br>Dotyczy tylko niedziel handlowych",
                "Longitude": 22.583230,
                "Latitude": 51.257130,
                "AR": 10,
                "NF": true,
                "ShownPostalCode": "20-128",
                "ShownLocality": "Lublin",
                "ShownAddressLine": "ul. Lwowska 48",
                "ShownStoreName": "Lublin, ul. Lwowska 48",
                "CityDistrict": "",
                "Bilanzgesellschaft": 13,
                "OverlayOperatorData": "Lidl sp. z o.o. sp. k. \u2022 <br\/>ul. Pozna\u0144ska 48, Jankowice \u2022 <br\/>62-080 Tarnowo Podg\u00f3rne",
                "Adresstyp": 1,
                "Holidays": "",
                "AccountTypeId": "285540000",
                "INFOICON1": "disParking",
                "INFOICON2": "bake",
                "INFOICON3": "",
                "INFOICON4": "parking",
                ...
                "INFOICON10": "lidlPlus",
                ...
                "__Distance": 1.16843669335704
            },
            ...
        ]
    }
})
```

