FROM postgres:alpine
ENV POSTGRES_PASSWORD psql
ENV POSTGRES_DB sistem_gudang
COPY sistem_gudang.sql .
ADD ./sistem_gudang.sql /docker-entrypoint-initdb.d