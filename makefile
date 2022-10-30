frontend:
	docker run -ti --rm \
	--user $(id -u)\:$(id -g) \
	-v $(shell pwd)/front\:/usr/src/app \
	-p 3200\:3200 \
	-w /usr/src/app \
	-u "node" \
	node\:slim \
	bash

init:
	docker run -ti --rm \
	--user $(id -u)\:$(id -g) \
	-v $(shell pwd)/front\:/usr/src/app \
	-p 3200\:3200 \
	-w /usr/src/app \
	-u "node" \
	node\:slim \
	npm install