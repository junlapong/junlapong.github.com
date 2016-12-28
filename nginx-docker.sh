#!/usr/bin/env bash

echo "Start... nginx-container"

docker run --name nginx-container \
  --rm -ti \
  -v $(pwd):/usr/share/nginx/html:ro \
  -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro \
  -p 80:80 nginx:alpine

# docker exec -it nginx-container /bin/sh