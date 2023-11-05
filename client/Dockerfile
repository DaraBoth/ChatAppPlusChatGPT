FROM node:16.13.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
ENV NODE_ENV=production
EXPOSE 3500
CMD ["npm", "run", "dev"]