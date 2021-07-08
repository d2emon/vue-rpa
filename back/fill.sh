docker-compose exec mongo mongoimport --jsonArray -d rpa -c races /import/races.json
docker-compose exec mongo mongoimport --jsonArray -d rpa -c classes /import/classes.json
docker-compose exec mongo mongoimport --jsonArray -d rpa -c backgrounds /import/backgrounds.json
docker-compose exec mongo mongoimport --jsonArray -d rpa -c characters /import/characters.json
