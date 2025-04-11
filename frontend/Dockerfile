# Build stage
FROM node:18 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve với Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Copy cấu hình Nginx tùy chọn (nếu có)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
