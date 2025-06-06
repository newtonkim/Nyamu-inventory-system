<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tusui Inventory System</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>

<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <h1 class="text-xl font-bold text-gray-900">Tusui Inventory System</h1>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <a href="{{ route('login') }}" class="text-gray-500 hover:text-gray-700">Login</a>
                    <a href="{{ route('register') }}"
                        class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Register</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <div class="relative bg-white overflow-hidden min-h-screen">
        <div class="max-w-7xl mx-auto">
            <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-1/2 lg:pb-28 xl:pb-32">
                <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div class="lg:text-left">
                        <h1
                            class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                            <span class="block">Professional</span>
                            <span class="block text-blue-600">Inventory Management</span>
                        </h1>
                        <p
                            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:max-w-lg">
                            Complete inventory management system with accounting, reporting, and multi-user support.
                            Built with Laravel and Tailwind CSS.
                        </p>
                        <div class="mt-5 sm:mt-8 sm:flex lg:justify-start">
                            <div class="rounded-md shadow">
                                <a href="{{ route('register') }}"
                                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                                    Get Started
                                </a>
                            </div>
                            <div class="mt-3 sm:mt-0 sm:ml-3">
                                <a href="{{ route('login') }}"
                                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                                    Sign In
                                </a>
                            </div>
                        </div>

                        <!-- Demo Login Info -->
                        <div class="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-md">
                            <h3 class="text-lg font-medium text-yellow-800">🔑 Demo Access</h3>
                            <p class="mt-1 text-sm text-yellow-700">
                                <strong>Email:</strong> admin@demo.com<br>
                                <strong>Password:</strong> password123
                            </p>
                            <p class="mt-2 text-xs text-yellow-600">
                                Click "Sign In" above and use these credentials to access the full dashboard.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>

        <!-- Right side dashboard preview -->
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div
                class="h-56 w-full bg-gradient-to-r from-blue-500 to-purple-600 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
                <div class="text-white text-center">
                    <div class="text-6xl mb-4">📊</div>
                    <h3 class="text-2xl font-bold">Dashboard Analytics</h3>
                    <p class="mt-2">Real-time inventory tracking</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Features Section -->
    <div class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
                <h2 class="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Everything you need to manage inventory
                </p>
            </div>

            <div class="mt-10">
                <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div class="relative">
                        <div
                            class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                            📦
                        </div>
                        <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Product Management</p>
                        <p class="mt-2 ml-16 text-base text-gray-500">
                            Complete CRUD operations for products with categories, suppliers, and stock tracking.
                        </p>
                    </div>

                    <div class="relative">
                        <div
                            class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                            🔐
                        </div>
                        <p class="ml-16 text-lg leading-6 font-medium text-gray-900">User Authentication</p>
                        <p class="mt-2 ml-16 text-base text-gray-500">
                            Secure login with Google OAuth integration and role-based access control.
                        </p>
                    </div>

                    <div class="relative">
                        <div
                            class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                            📊
                        </div>
                        <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Accounting Module</p>
                        <p class="mt-2 ml-16 text-base text-gray-500">
                            Complete accounting system with journal entries and financial tracking.
                        </p>
                    </div>

                    <div class="relative">
                        <div
                            class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                            📈
                        </div>
                        <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Financial Reports</p>
                        <p class="mt-2 ml-16 text-base text-gray-500">
                            Profit & Loss, Balance Sheet, Cash Flow, and Trial Balance reports.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- System Status -->
    <div class="bg-gray-50 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-3xl font-extrabold text-gray-900">✅ System Ready</h2>
                <p class="mt-4 text-lg text-gray-600">
                    Laravel {{ app()->version() }} • PHP {{ PHP_VERSION }} • Database Connected
                </p>
                <div class="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div class="bg-white rounded-lg shadow p-6">
                        <div class="text-green-500 text-3xl mb-2">✅</div>
                        <h3 class="text-lg font-medium text-gray-900">Backend</h3>
                        <p class="text-sm text-gray-500">Laravel Ready</p>
                    </div>
                    <div class="bg-white rounded-lg shadow p-6">
                        <div class="text-green-500 text-3xl mb-2">✅</div>
                        <h3 class="text-lg font-medium text-gray-900">Database</h3>
                        <p class="text-sm text-gray-500">SQLite Connected</p>
                    </div>
                    <div class="bg-white rounded-lg shadow p-6">
                        <div class="text-green-500 text-3xl mb-2">✅</div>
                        <h3 class="text-lg font-medium text-gray-900">Authentication</h3>
                        <p class="text-sm text-gray-500">Login Ready</p>
                    </div>
                    <div class="bg-white rounded-lg shadow p-6">
                        <div class="text-green-500 text-3xl mb-2">✅</div>
                        <h3 class="text-lg font-medium text-gray-900">Features</h3>
                        <p class="text-sm text-gray-500">All Modules</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
