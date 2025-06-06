@extends('layouts.app')

@section('title', 'Dashboard - VROM Inventory System')
@section('page-title', 'Dashboard')
@section('page-description', 'Last 6 months: Jan1, 2022 - Jun 30, 2022')

@section('content')
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <!-- Total Income Card -->
    <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
            <div>
                <p class="text-sm text-gray-600">Total Income</p>
                <p class="text-2xl font-bold text-gray-900">$14.032K</p>
                <p class="text-xs text-gray-500 mt-1">3% Today</p>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                    48%
                </div>
            </div>
        </div>
    </div>

    <!-- Sold Products Card -->
    <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
            <div>
                <p class="text-sm text-gray-600">Sold Products</p>
                <p class="text-2xl font-bold text-gray-900">$204.58K</p>
                <p class="text-xs text-gray-500 mt-1">Sold 89 products today</p>
            </div>
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs">
                    58%
                </div>
            </div>
        </div>
    </div>

    <!-- Total Revenue Card -->
    <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
            <div>
                <p class="text-sm text-gray-600">Total Revenue</p>
                <p class="text-2xl font-bold text-gray-900">$48.9K</p>
                <p class="text-xs text-gray-500 mt-1">3% Today</p>
            </div>
            <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <div class="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white text-xs">
                    72%
                </div>
            </div>
        </div>
    </div>

    <!-- Users Card -->
    <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
            <div>
                <p class="text-sm text-gray-600">Users</p>
                <div class="flex items-center space-x-2 mt-2">
                    <div class="flex -space-x-2">
                        <img class="w-6 h-6 rounded-full border-2 border-white" src="https://ui-avatars.com/api/?name=Peter+Katsiapis&background=3b82f6&color=fff" alt="PK">
                        <img class="w-6 h-6 rounded-full border-2 border-white" src="https://ui-avatars.com/api/?name=Kirk+Takvorian&background=10b981&color=fff" alt="KT">
                        <img class="w-6 h-6 rounded-full border-2 border-white" src="https://ui-avatars.com/api/?name=Desi+Warner&background=f59e0b&color=fff" alt="DW">
                        <img class="w-6 h-6 rounded-full border-2 border-white" src="https://ui-avatars.com/api/?name=Alexa+Vargas&background=ef4444&color=fff" alt="AV">
                    </div>
                </div>
            </div>
            <button class="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                <i class="fas fa-plus mr-1"></i>
            </button>
        </div>
    </div>
</div>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- Total Income Chart -->
    <div class="lg:col-span-2 bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-semibold text-gray-900">Total Income</h3>
            <div class="flex space-x-2 text-sm">
                <button class="px-3 py-1 bg-gray-100 rounded">1D</button>
                <button class="px-3 py-1 bg-gray-100 rounded">5D</button>
                <button class="px-3 py-1 bg-blue-600 text-white rounded">1M</button>
                <button class="px-3 py-1 bg-gray-100 rounded">6M</button>
                <button class="px-3 py-1 bg-gray-100 rounded">1Y</button>
                <button class="px-3 py-1 bg-gray-100 rounded">Max</button>
            </div>
        </div>
        
        <div class="mb-4">
            <div class="bg-blue-600 text-white px-3 py-1 rounded inline-block text-sm">
                Jun 30, 01:12 AM
                <br>
                $14,032.56
            </div>
        </div>
        
        <canvas id="incomeChart" height="100"></canvas>
    </div>

    <!-- Users List -->
    <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-semibold text-gray-900">Users</h3>
            <button class="text-blue-600 text-sm">
                <i class="fas fa-plus mr-1"></i>
                Add new item
            </button>
        </div>
        
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-sm font-medium">
                        PK
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900">Peter Katsiapis</p>
                        <p class="text-xs text-gray-500">Some user data</p>
                    </div>
                </div>
                <span class="text-xs text-gray-500">PK</span>
            </div>
            
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm font-medium">
                        KT
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900">Kirk Takvorian</p>
                        <p class="text-xs text-gray-500">Some user data</p>
                    </div>
                </div>
                <span class="text-xs text-gray-500">KT</span>
            </div>
            
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <div class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-sm font-medium">
                        DW
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900">Desi Warner</p>
                        <p class="text-xs text-gray-500">Some user data</p>
                    </div>
                </div>
                <span class="text-xs text-gray-500">DW</span>
            </div>
            
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-sm font-medium">
                        AV
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900">Alexa Vargas</p>
                        <p class="text-xs text-gray-500">Some user data</p>
                    </div>
                </div>
                <span class="text-xs text-gray-500">AV</span>
            </div>
        </div>
    </div>
</div>

<!-- Last Orders Table -->
<div class="mt-8 bg-white rounded-lg shadow">
    <div class="px-6 py-4 border-b border-gray-200">
        <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-gray-900">Last Orders</h3>
            <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-500">Last updated 18 minutes ago</span>
                <button class="bg-blue-600 text-white px-4 py-2 rounded text-sm">
                    <i class="fas fa-plus mr-1"></i>
                    Add new item
                </button>
            </div>
        </div>
    </div>
    
    <div class="overflow-x-auto">
        <table class="w-full">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purchase Date</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buyer</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Number</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seller</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shipping Cost</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edit</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">12.27.2023</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">allen bradley powerflex 525...</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Alisio4</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">273438391234O9</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">control200</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$6498.10</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$65.49</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                        <i class="fas fa-edit cursor-pointer"></i>
                    </td>
                </tr>
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">12.27.2023</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">allen bradley powerflex 525...</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Alisio4</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">273438391234O9</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">control200</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$6498.10</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">8</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$65.49</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                        <i class="fas fa-edit cursor-pointer"></i>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<script>
// Income Chart
const ctx = document.getElementById('incomeChart').getContext('2d');
const incomeChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Income',
            data: [8000, 9500, 11000, 12500, 13000, 14032],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: '#f3f4f6'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});
</script>
@endsection

