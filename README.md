hi

## Build Docker image

```
$ docker build -t cat-image .
```

## Run Docker image

```
$ docker run --name cat -p 3000:3000 cat-image
```
