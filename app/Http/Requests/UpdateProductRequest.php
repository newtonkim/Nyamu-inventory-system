<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    // public function authorize(): bool
    // {
    //     return auth()->user()->hasAnyRole(['admin', 'manager']);
    // }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $productId = $this->route('product')->id ?? null;

        return [
            'name' => 'sometimes|filled|string|max:255',
            'sku' => 'sometimes|nullable|string|max:255|unique:products,sku,' . $productId,
            'description' => 'sometimes|nullable|string',
            'category_id' => 'sometimes|filled|exists:categories,id',
            'cost_price' => 'sometimes|filled|numeric|min:0',
            'selling_price' => 'sometimes|filled|numeric|min:0',
            'stock_quantity' => 'sometimes|filled|integer|min:0',
            'minimum_stock' => 'sometimes|filled|integer|min:0',
            'unit' => 'sometimes|filled|string|max:50',
            'barcode' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'is_active' => 'boolean',
        ];
    }
}
