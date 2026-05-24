FROM php:8.2-fpm

WORKDIR /var/www/html

RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    nodejs \
    npm

RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

COPY . .

RUN composer install --optimize-autoloader --no-dev

RUN chmod -R 777 storage bootstrap/cache

# Generate .env and run migrations at startup (no volume override in production)
CMD ["sh", "-c", "cp .env.example .env && php artisan key:generate && php artisan migrate --force && php artisan serve --host=0.0.0.0 --port=8000"]