<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ethnicity extends Model
{
    use HasFactory;


    protected $fillable = [
        'ethnicity',
        'region_id',
        'description',
        'status',
        'is_deleted',
    ];

    protected $hidden = [
        'is_deleted',
        'updated_at',
    ];

    public function region()
    {
        return $this->belongsTo(Region::class);
    }
}
