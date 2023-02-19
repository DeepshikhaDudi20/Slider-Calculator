FROM node:alpine

LABEL description="loan-repayment-calculator"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]