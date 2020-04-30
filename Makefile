bootstrap: down kill up

down:
	@docker-compose down

kill:
	@docker-compose kill

up:
	@docker-compose up api

bash-api:
	@docker exec -it pg-api /bin/bash
