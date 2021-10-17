db.peliculas.find() /* Enseña todas las películas que hay en la colección*/
db.peliculas.find({"genero": "comedia"}) /*Enseña todas las películas que hay de comedia*/
db.peliculas.find({"pelicula":"Spider-Man lejos de casa"}) /*sirve para enseñar una película en concreto*/
db.peliculas.find({"estrellas":5}) /* */
db.peliculas.find({"estrellas":{$gte:3.5}}) /* */
db.peliculas.find({"estrellas":{$lt:3.5}}) /* */
db.peliculas.find({"genero": "accion","estrellas":{$gte:3.5}}) /* */
db.peliculas.find({"genero": {$ne:"drama"}, "estrellas":{$gte:3.5}}) /* */
db.peliculas.find({"genero": {$ne:"accion"}
