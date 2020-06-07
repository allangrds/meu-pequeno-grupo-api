bootstrap: down kill up

down:
	@docker-compose down

kill:
	@docker-compose kill

up:
	@docker-compose up api postgres

migrate:
	@docker exec -it pg-api npx sequelize db:migrate

seed:
	@docker exec -it pg-api npx sequelize-cli db:seed:all

bash-api:
	@docker exec -it pg-api /bin/bash

bash-database:
	@docker exec -it pg-databaase bash

test-unit:
	@docker-compose up test-unit

test-integration:
	@docker-compose up test-integration

test-e2e:
	@docker-compose up test-e2e
