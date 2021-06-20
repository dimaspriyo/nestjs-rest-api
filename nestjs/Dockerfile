FROM node:lts-alpine
WORKDIR /usr/src/app
COPY . .
RUN yarn install 
# COPY dist ./dist
# RUN ls -l dist/src/
CMD ["yarn","start"] 
