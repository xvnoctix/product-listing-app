<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasTimestamps;
// use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductImage extends Model
{
    use HasTimestamps;

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
