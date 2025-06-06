<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'VROM Inventory System')</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="bg-gray-50">
    <div class="flex h-screen">
        <!-- Sidebar -->
        <div class="w-64 bg-white shadow-lg">
            <div class="p-6">
                <div class="flex items-center">
                    <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <i class="fas fa-cube text-white text-sm"></i>
                    </div>
                    <h1 class="ml-3 text-xl font-bold text-gray-900">VROM</h1>
                </div>
                <p class="text-sm text-gray-500 mt-1">Purchasing & Inventory</p>
            </div>
            
            <nav class="mt-6">
                <div class="px-6 py-2">
                    <a href="{{ route('dashboard') }}" class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg">
                        <i class="fas fa-tachometer-alt w-5"></i>
                        <span class="ml-3">Dashboard</span>
                    </a>
                </div>
                
                <div class="px-6 py-2">
                    <a href="{{ route('products.index') }}" class="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        <i class="fas fa-box w-5"></i>
                        <span class="ml-3">Inventory</span>
                    </a>
                </div>
                
                <div class="px-6 py-2">
                    <a href="{{ route('purchases.index') }}" class="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        <i class="fas fa-shopping-cart w-5"></i>
                        <span class="ml-3">Purchasing</span>
                    </a>
                </div>
                
                <div class="px-6 py-2">
                    <a href="{{ route('sales.index') }}" class="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        <i class="fas fa-chart-line w-5"></i>
                        <span class="ml-3">Sales</span>
                    </a>
                </div>
                
                <div class="px-6 py-2">
                    <a href="#" class="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        <i class="fas fa-calculator w-5"></i>
                        <span class="ml-3">Accounting</span>
                    </a>
                </div>
                
                <div class="px-6 py-2">
                    <a href="#" class="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        <i class="fas fa-chart-bar w-5"></i>
                        <span class="ml-3">Reports</span>
                    </a>
                </div>
            </nav>
        </div>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col overflow-hidden">
            <!-- Header -->
            <header class="bg-white shadow-sm border-b border-gray-200">
                <div class="flex items-center justify-between px-6 py-4">
                    <div>
                        <h2 class="text-2xl font-semibold text-gray-900">@yield('page-title', 'Dashboard')</h2>
                        <p class="text-sm text-gray-600">@yield('page-description', 'Welcome to your inventory management system')</p>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <button class="p-2 text-gray-400 hover:text-gray-600">
                            <i class="fas fa-search"></i>
                        </button>
                        
                        <div class="relative">
                            <button class="flex items-center text-sm text-gray-700 hover:text-gray-900">
                                <img class="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name={{ auth()->user()->name ?? 'User' }}&background=3b82f6&color=fff" alt="User">
                                <span class="ml-2">{{ auth()->user()->name ?? 'User' }}</span>
                                <i class="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                        </div>
                        
                        <form method="POST" action="{{ route('logout') }}" class="inline">
                            @csrf
                            <button type="submit" class="text-gray-600 hover:text-gray-900">
                                <i class="fas fa-sign-out-alt"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </header>

            <!-- Page Content -->
            <main class="flex-1 overflow-y-auto p-6">
                @yield('content')
            </main>
        </div>
    </div>
</body>
</html>

