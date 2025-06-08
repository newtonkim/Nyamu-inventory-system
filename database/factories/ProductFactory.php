<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->words(3, true),
            'sku' => $this->faker->unique()->bothify('PROD-####'),
            'description' => $this->faker->sentence,
            'category_id' => Category::inRandomOrder()->first()->id,
            'cost_price' => $this->faker->randomFloat(2, 10, 100),
            'selling_price' => $this->faker->randomFloat(2, 20, 200),
            'stock_quantity' => $this->faker->numberBetween(0, 1000),
            'minimum_stock' => $this->faker->numberBetween(10, 50),
            'unit' => 'pcs',
            'barcode' => $this->faker->ean13,
            'image' => null,
            'is_active' => $this->faker->boolean,
        ];
    }
}
