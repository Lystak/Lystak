backend:
	docker run -ti --rm \
	--user $(id -u)\:$(id -g) \
	-v $(shell pwd)/back\:/usr/src/app \
	-p 3101\:8080 \
	-w /usr/src/app \
	node\:slim \
	bash

frontend:
	docker run -ti --rm \
	--user $(id -u)\:$(id -g) \
	-v $(shell pwd)/front\:/usr/src/app \
	-p 3100\:5173 \
	-w /usr/src/app \
	node\:slim \
	bash