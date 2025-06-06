<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Tusui Inventory System</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gray-50">
    <div class="flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div>
                <div class="flex items-center justify-center w-12 h-12 mx-auto bg-blue-600 rounded-lg">
                    <i class="text-xl text-white fas fa-cube"></i>
                </div>
                <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
                    Sign in to Tusui
                </h2>
                <p class="mt-2 text-sm text-center text-gray-600">
                    Or
                    <a href="{{ route('register') }}" class="font-medium text-blue-600 hover:text-blue-500">
                        create a new account
                    </a>
                </p>
            </div>

            <form class="mt-8 space-y-6" action="{{ route('login') }}" method="POST">
                @csrf
                <div class="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label for="email" class="sr-only">Email address</label>
                        <input id="email" name="email" type="email" autocomplete="email" required
                               class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                               placeholder="Email address" value="{{ old('email') }}">
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input id="password" name="password" type="password" autocomplete="current-password" required
                               class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                               placeholder="Password">
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember_me" name="remember" type="checkbox"
                               class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                        <label for="remember_me" class="block ml-2 text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div class="text-sm">
                        {{-- <a href="{{ route('password.request') }}" class="font-medium text-blue-600 hover:text-blue-500">
                            Forgot your password?
                        </a> --}}
                    </div>
                </div>

                <div>
                    <button type="submit"
                            class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <i class="text-blue-500 fas fa-lock group-hover:text-blue-400"></i>
                        </span>
                        Sign in
                    </button>
                </div>

                <!-- Google OAuth -->
                <div class="relative mt-6">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                        <span class="px-2 text-gray-500 bg-gray-50">Or continue with</span>
                    </div>
                </div>

                <div class="mt-6">
                    <a href="{{ route('google.redirect') }}" class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm group hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <i class="mr-3 text-red-500 fab fa-google"></i>
                        <span>Sign in with Google</span>
                    </a>
                </div>

                <!-- Demo Credentials -->
                <div class="p-4 mt-6 border border-yellow-200 rounded-lg bg-yellow-50">
                    <h3 class="text-sm font-medium text-yellow-800">🔑 Demo Credentials</h3>
                    <p class="mt-1 text-xs text-yellow-700">
                        <strong>Email:</strong> admin@demo.com<br>
                        <strong>Password:</strong> password123
                    </p>
                </div>
            </form>

            <!-- Errors -->
            @if ($errors->any())
                <div class="p-4 mt-4 border border-red-200 rounded-lg bg-red-50">
                    <div class="text-sm text-red-600">
                        @foreach ($errors->all() as $error)
                            <p>{{ $error }}</p>
                        @endforeach
                    </div>
                </div>
            @endif

            <!-- Back to home -->
            <div class="text-center">
                <a href="{{ route('welcome') }}" class="text-sm text-gray-600 hover:text-gray-900">
                    ← Back to home
                </a>
            </div>
        </div>
    </div>
</body>
</html>

