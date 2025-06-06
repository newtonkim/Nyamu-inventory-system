# Local Development Setup Guide

## Quick Start

### 1. Prerequisites
Make sure you have installed:
- PHP 8.1 or higher
- Composer
- Node.js & NPM
- Git

### 2. Clone and Setup
```bash
git clone <your-repo-url>
cd vrom-inventory-system
composer install
npm install
cp .env.example .env
php artisan key:generate
touch database/database.sqlite
php artisan migrate --seed
npm run dev
php artisan serve
```

### 3. Access the Application
- **URL:** http://localhost:8000
- **Demo Login:** admin@demo.com / password123

## Development Commands

### Database
```bash
# Fresh migration with seeding
php artisan migrate:fresh --seed

# Create new migration
php artisan make:migration create_table_name

# Create model with migration
php artisan make:model ModelName -m
```

### Frontend
```bash
# Watch for changes (development)
npm run dev

# Build for production
npm run build
```

### Artisan Commands
```bash
# Clear all caches
php artisan optimize:clear

# Generate new controller
php artisan make:controller ControllerName

# Generate new middleware
php artisan make:middleware MiddlewareName

# List all routes
php artisan route:list
```

## Project Structure for Development

### Adding New Features
1. **Models:** `app/Models/`
2. **Controllers:** `app/Http/Controllers/`
3. **Views:** `resources/views/`
4. **Routes:** `routes/web.php`
5. **Migrations:** `database/migrations/`

### Key Files to Modify
- **Routes:** `routes/web.php`
- **Navigation:** `resources/views/layouts/app.blade.php`
- **Dashboard:** `resources/views/dashboard/index.blade.php`
- **Styles:** `resources/css/app.css`

## Testing

### Demo Accounts
After seeding, these accounts are available:
- **Admin:** admin@demo.com / password123
- **Manager:** manager@demo.com / password123
- **Cashier:** cashier@demo.com / password123
- **Accountant:** accountant@demo.com / password123

### Sample Data
The seeders create:
- 4 user roles with permissions
- 10 product categories
- 20 sample products
- Chart of accounts for accounting
- Sample transactions

## Common Issues & Solutions

### Issue: "Class not found" errors
```bash
composer dump-autoload
```

### Issue: Permission denied on database
```bash
chmod 664 database/database.sqlite
```

### Issue: NPM build errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Route not found
```bash
php artisan route:clear
php artisan config:clear
```

## Development Tips

1. **Use Laravel Debugbar** for debugging:
   ```bash
   composer require barryvdh/laravel-debugbar --dev
   ```

2. **Enable query logging** in AppServiceProvider:
   ```php
   DB::listen(function($query) {
       Log::info($query->sql);
   });
   ```

3. **Use Tinker** for testing:
   ```bash
   php artisan tinker
   ```

4. **Watch logs** during development:
   ```bash
   tail -f storage/logs/laravel.log
   ```

