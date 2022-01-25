# MenuGenerator By V8

### for get output the menu you must use :

```
$('.dd').nestable('serialize');
```

### and for import the menu you must use :

```javascript
const data = [
    {
        "deleted": 0,
        "new": 1,
        "url": "https://rp76.ir",
        "name": 1,
        "id": "7",
        "children": [
            {
                "deleted": 0,
                "new": 1,
                "url": "https://rp76.ir",
                "name": 11,
                "id": "10",
                "children": [
                    {
                        "deleted": 0,
                        "new": 1,
                        "url": "https://rp76.ir",
                        "name": 111,
                        "id": "13"
                    },
                    {
                        "deleted": 0,
                        "new": 1,
                        "url": "https://rp76.ir",
                        "name": 112,
                        "id": "14"
                    },
                    {
                        "deleted": 0,
                        "new": 1,
                        "url": "https://rp76.ir",
                        "name": 113,
                        "id": "15"
                    }
                ]
            },
            {
                "deleted": 0,
                "new": 1,
                "url": "https://rp76.ir",
                "name": 12,
                "id": "11"
            },
            {
                "deleted": 0,
                "new": 1,
                "url": "https://rp76.ir",
                "name": 13,
                "id": "12"
            }
        ]
    },
    {
        "deleted": 0,
        "new": 1,
        "url": "https://rp76.ir",
        "name": 2,
        "id": "8"
    },
    {
        "deleted": 0,
        "new": 1,
        "url": "https://rp76.ir",
        "name": 3,
        "id": "9"
    }
];

prt(data);
```