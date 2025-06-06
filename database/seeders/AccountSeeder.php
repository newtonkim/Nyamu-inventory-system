<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $accounts = [
            // Assets
            ['code' => '1000', 'name' => 'Cash', 'type' => 'asset', 'subtype' => 'current_asset'],
            ['code' => '1100', 'name' => 'Accounts Receivable', 'type' => 'asset', 'subtype' => 'current_asset'],
            ['code' => '1200', 'name' => 'Inventory', 'type' => 'asset', 'subtype' => 'current_asset'],
            ['code' => '1500', 'name' => 'Equipment', 'type' => 'asset', 'subtype' => 'fixed_asset'],
            
            // Liabilities
            ['code' => '2000', 'name' => 'Accounts Payable', 'type' => 'liability', 'subtype' => 'current_liability'],
            ['code' => '2100', 'name' => 'Sales Tax Payable', 'type' => 'liability', 'subtype' => 'current_liability'],
            
            // Equity
            ['code' => '3000', 'name' => 'Owner\'s Equity', 'type' => 'equity', 'subtype' => 'equity'],
            ['code' => '3100', 'name' => 'Retained Earnings', 'type' => 'equity', 'subtype' => 'equity'],
            
            // Revenue
            ['code' => '4000', 'name' => 'Sales Revenue', 'type' => 'revenue', 'subtype' => 'revenue'],
            
            // Expenses
            ['code' => '5000', 'name' => 'Cost of Goods Sold', 'type' => 'expense', 'subtype' => 'cost_of_goods_sold'],
            ['code' => '6000', 'name' => 'Operating Expenses', 'type' => 'expense', 'subtype' => 'operating_expense'],
            ['code' => '6100', 'name' => 'Rent Expense', 'type' => 'expense', 'subtype' => 'operating_expense'],
            ['code' => '6200', 'name' => 'Utilities Expense', 'type' => 'expense', 'subtype' => 'operating_expense'],
        ];

        foreach ($accounts as $account) {
            \App\Models\Account::updateOrCreate(['code' => $account['code']], $account);
        }
    }
}
