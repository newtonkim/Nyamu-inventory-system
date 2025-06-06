# VROM Professional Inventory Management System

A comprehensive inventory management system built with Laravel 10, featuring accounting modules, financial reports, and multi-user support.

![VROM Inventory System](https://img.shields.io/badge/Laravel-10.x-red.svg)
![PHP](https://img.shields.io/badge/PHP-8.1+-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 🚀 Features

### ✅ **Core Inventory Management**
- **Product Management** - Complete CRUD operations with categories and suppliers
- **Stock Tracking** - Real-time inventory levels and low stock alerts
- **Purchase Management** - Track purchases with detailed item records
- **Sales Management** - Process sales with automatic stock updates
- **Barcode Support** - SKU and barcode management for products

### ✅ **User Management & Security**
- **Role-Based Access Control** - Admin, Manager, Cashier, Accountant roles
- **Authentication System** - Secure login with session management
- **Google OAuth Integration** - Sign in with Google account
- **User Permissions** - Granular access control for different modules

### ✅ **Accounting System**
- **Chart of Accounts** - Complete accounting structure
- **Journal Entries** - Double-entry bookkeeping system
- **Financial Tracking** - Track income, expenses, and account balances
- **Account Categories** - Assets, Liabilities, Equity, Revenue, Expenses

### ✅ **Reports & Analytics**
- **Dashboard Analytics** - Real-time business metrics
- **Financial Reports** - Profit & Loss, Balance Sheet, Cash Flow, Trial Balance
- **Inventory Reports** - Stock levels, movement history
- **Sales Reports** - Revenue tracking and analysis

### ✅ **Technical Features**
- **Laravel 10** - Modern PHP framework
- **Tailwind CSS** - Professional responsive design
- **SQLite/MySQL** - Flexible database options
- **Blade Templates** - Server-side rendering
- **Migration System** - Database version control
- **Seeder Classes** - Sample data for testing

## 📋 Requirements

- **PHP 8.1 or higher**
- **Composer** (PHP dependency manager)
- **Node.js & NPM** (for frontend assets)
- **SQLite** (default) or **MySQL** (production)
- **Git** (for version control)

## 🛠 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/vrom-inventory-system.git
cd vrom-inventory-system
```

### 2. Install Dependencies

```bash
# Install PHP dependencies
composer install

# Install Node.js dependencies
npm install
```

### 3. Environment Configuration

```bash
# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate
```

### 4. Database Setup

#### Option A: SQLite (Recommended for Development)
```bash
# Create SQLite database
touch database/database.sqlite

# Run migrations and seeders
php artisan migrate --seed
```

#### Option B: MySQL (Production)
```bash
# Update .env file with MySQL credentials
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=inventory_system
DB_USERNAME=your_username
DB_PASSWORD=your_password

# Run migrations and seeders
php artisan migrate --seed
```

### 5. Build Frontend Assets

```bash
# Development build
npm run dev

# Production build
npm run build
```

### 6. Start Development Server

```bash
php artisan serve
```

Visit `http://localhost:8000` to access the application.

## 🔐 Default Login Credentials

After running the seeders, you can log in with:

- **Email:** admin@demo.com
- **Password:** password123
- **Role:** Administrator (full access)

## 🏗 Project Structure

```
vrom-inventory-system/
├── app/
│   ├── Http/Controllers/     # Application controllers
│   ├── Models/              # Eloquent models
│   └── Http/Middleware/     # Custom middleware
├── database/
│   ├── migrations/          # Database schema
│   └── seeders/            # Sample data
├── resources/
│   ├── views/              # Blade templates
│   └── js/                 # Frontend assets
├── routes/
│   └── web.php             # Application routes
└── public/
    └── demo-login.html     # Demo login page
```

## 🎯 User Roles & Permissions

| Role | Dashboard | Products | Sales | Purchases | Accounting | Users |
|------|-----------|----------|-------|-----------|------------|-------|
| **Admin** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Manager** | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Cashier** | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Accountant** | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ |

## 🔧 Configuration

### Google OAuth Setup

1. Create a Google OAuth application in [Google Cloud Console](https://console.cloud.google.com/)
2. Update your `.env` file:

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URI=http://localhost:8000/auth/google/callback
```

### Email Configuration

Update `.env` with your email settings:

```env
MAIL_MAILER=smtp
MAIL_HOST=your_smtp_host
MAIL_PORT=587
MAIL_USERNAME=your_email
MAIL_PASSWORD=your_password
MAIL_ENCRYPTION=tls
```

## 🚀 Deployment

### Production Deployment Steps

1. **Server Requirements**
   - PHP 8.1+ with required extensions
   - Composer installed
   - Web server (Apache/Nginx)
   - MySQL database

2. **Environment Setup**
   ```bash
   # Set production environment
   APP_ENV=production
   APP_DEBUG=false
   
   # Configure production database
   DB_CONNECTION=mysql
   # ... other database settings
   ```

3. **Optimize for Production**
   ```bash
   # Cache configuration
   php artisan config:cache
   
   # Cache routes
   php artisan route:cache
   
   # Cache views
   php artisan view:cache
   
   # Build production assets
   npm run build
   ```

## 📊 Database Schema

### Core Tables
- `users` - User accounts and authentication
- `roles` - User roles (Admin, Manager, etc.)
- `products` - Product catalog
- `categories` - Product categories
- `suppliers` - Supplier information
- `purchases` / `purchase_items` - Purchase tracking
- `sales` / `sale_items` - Sales transactions
- `stock_movements` - Inventory movement history

### Accounting Tables
- `accounts` - Chart of accounts
- `journal_entries` - Financial transactions
- `journal_entry_lines` - Transaction line items

## 🧪 Testing

```bash
# Run tests
php artisan test

# Run specific test suite
php artisan test --testsuite=Feature
```

## 📈 Adding New Features

### 1. Create New Module
```bash
# Generate controller
php artisan make:controller ModuleController --resource

# Generate model with migration
php artisan make:model Module -m

# Generate form requests
php artisan make:request StoreModuleRequest
php artisan make:request UpdateModuleRequest
```

### 2. Add Routes
```php
// routes/web.php
Route::resource('modules', ModuleController::class)
    ->middleware(['auth', 'role:admin,manager']);
```

### 3. Create Views
```bash
# Create view directory
mkdir -p resources/views/modules

# Create Blade templates
touch resources/views/modules/{index,create,edit,show}.blade.php
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or need help:

1. Check the [Issues](https://github.com/yourusername/vrom-inventory-system/issues) page
2. Create a new issue with detailed information
3. Include error messages and steps to reproduce

## 🎯 Roadmap

### Upcoming Features
- [ ] **Advanced Reports** - Custom report builder
- [ ] **Multi-location Support** - Multiple warehouse management
- [ ] **Barcode Scanning** - Mobile barcode scanner integration
- [ ] **API Development** - RESTful API for mobile apps
- [ ] **Advanced Analytics** - Business intelligence dashboard
- [ ] **Notification System** - Email/SMS alerts for low stock
- [ ] **Import/Export** - CSV/Excel data import/export
- [ ] **Audit Trail** - Complete activity logging

### Version History
- **v1.0.0** - Initial release with core inventory features
- **v1.1.0** - Added accounting module and financial reports
- **v1.2.0** - Google OAuth integration and enhanced UI

---

**Built with ❤️ using Laravel & Tailwind CSS**

For more information, visit the [documentation](https://github.com/yourusername/vrom-inventory-system/wiki) or check out the [demo](http://your-demo-url.com).

