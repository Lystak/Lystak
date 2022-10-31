frontend:
	docker run -ti --rm \
	--user $(id -u)\:$(id -g) \
	-v $(shell pwd)/front\:/usr/src/app \
	-w /usr/src/app \
	-u "node" \
	node\:slim \
	bash

init:
	docker run -ti --rm \
	--user $(id -u)\:$(id -g) \
	-v $(shell pwd)/front\:/usr/src/app \
	-w /usr/src/app \
	-u "node" \
	node\:slim \
	npm install

run:
	python3 -m webbrowser http://localhost:3200/
	docker-compose up