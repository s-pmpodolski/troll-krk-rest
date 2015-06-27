# troll-krk-rest

# Routes

## Beacon:

### Znalezienie beaconow w zakresie maxDistance (km)
POST:
curl --data "maxDistance=1&latitude=50.0487225&longitude=19.9600163" http://localhost:3000/beacon

### Lista wszystkich beaconów
GET:
curl http://localhost:3000/beacon

### Pojedynczy beacon
GET:
curl http://localhost:3000/beacon/:bid

### Utworzenie nowego beaconu:
curl --data "_id=eP7H&name=hub:raum&latitude=50.0487225&longitude=19.9600163" http://localhost:3000/beacon/create


## Relacja beacon - content:

### List wszystkich relacji
GET:
curl http://localhost:3000/relate


### Lista relacji dla beaconu
GET:
curl http://localhost:3000/relate/:bid

### Nowa relacja
POST
curl --data "beaconId=eP7H&contentId=asdf" http://localhost:3000/relate/create


## Pobranie informacji dla beaconu

### Pobranie informacji

curl http://localhost:3000/notification/asdf
