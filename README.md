# playground

## configs/docker-compose.yml
- is in dev mode
- remove volumes and change command to serve to be in production
- when running it in docker, vscode does not have access to the node modules maybe?

## .devcontainer/docker-compose.yml
- exposes the modules to vscode

## .devcontainer/devcontainer.json
- can only choose 1 service at a time.

## projects/*/configs/Dockerfile
- to do install
- app must be built if is used in production
