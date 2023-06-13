FROM node:16.14-alpine

WORKDIR /app-backend

COPY ../../package.json ../../package-lock.json ../../packages.npm ./

RUN npm ci --only=production

COPY . .

EXPOSE 3001

CMD ["npm", "start"]