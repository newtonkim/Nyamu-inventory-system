<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use App\Models\Sale;
use App\Models\Purchase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {
        // Get dashboard statistics
        $totalProducts = Product::count();
        $totalCategories = Category::count();
        $lowStockProducts = Product::whereRaw('stock_quantity <= minimum_stock')->count();
        $outOfStockProducts = Product::where('stock_quantity', 0)->count();
        
        // Get recent sales and purchases
        $recentSales = Sale::with(['user'])->latest()->take(5)->get();
        $recentPurchases = Purchase::with(['supplier', 'user'])->latest()->take(5)->get();
        
        // Get monthly sales data for chart
        $monthlySales = Sale::select(
            DB::raw('MONTH(created_at) as month'),
            DB::raw('SUM(total_amount) as total')
        )
        ->whereYear('created_at', date('Y'))
        ->groupBy('month')
        ->orderBy('month')
        ->get();
        
        return view('dashboard.index', compact(
            'totalProducts',
            'totalCategories', 
            'lowStockProducts',
            'outOfStockProducts',
            'recentSales',
            'recentPurchases',
            'monthlySales'
        ));
    }
}
