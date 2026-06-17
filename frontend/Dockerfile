FROM node:20-alpine

WORKDIR /app

COPY image_converter/package*.json ./

RUN npm install

COPY image_converter .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]