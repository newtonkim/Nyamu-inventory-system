<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            [
                'name' => 'admin',
                'display_name' => 'Administrator',
                'description' => 'Full system access and management capabilities'
            ],
            [
                'name' => 'manager',
                'display_name' => 'Manager',
                'description' => 'Inventory and sales management access'
            ],
            [
                'name' => 'cashier',
                'display_name' => 'Cashier',
                'description' => 'Sales and basic inventory access'
            ],
            [
                'name' => 'accountant',
                'display_name' => 'Accountant',
                'description' => 'Accounting and financial reports access'
            ]
        ];

        foreach ($roles as $role) {
            \App\Models\Role::create($role);
        }
    }
}
