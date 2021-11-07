FROM node:alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . ./

ENV MONGO_URI=mongodb+srv://RanjithKumar:RanjithKumar@zomato.ufmze.mongodb.net/zomato?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=341188504725-dn21p1kdfajs5qk6khv8selpura257ir.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=d4z6YqkB7WCljO0rvrWoo_Ne
ENV AWS_S3_ACCESS_KEY=AKIAQPDYIHBZXPV5PJ4A
ENV AWS_S3_SECRET_KEY=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
ENV MAILGUN__API__KEY=853883db13dd7c06f1723a301b9b7492-2ac825a1-8563ae7c
ENV MAILGUN__DOMAIN=sandbox647218f4d1624ed29878adb3391a5a04.mailgun.org
ENV RZR_PAY_ID=rzp_test_mgatVg9mEwCdub
ENV RZR_PAY_SECRET=a8WUv3XUI9WfiekOSOoE53J8
ENV PORT=4000

RUN npm run build

CMD [ "npm", "run", "start" ]