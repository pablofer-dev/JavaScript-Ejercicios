from node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9090
CMD ["node", "app.js"]

#docker build . -t nodepractica/practs 
#docker run -p 9090:9090 nodepractica