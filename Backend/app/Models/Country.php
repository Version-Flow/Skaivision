<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Country extends Model
{
    use HasFactory;

    protected $fillable = [
        'country',
        'country_code',
        'initials',
        'status',
        'is_deleted',
    ];
    
    protected $hidden = [
        'is_deleted',
        'updated_at',
    ];

    public function regions()
    {
        return $this->hasMany(Region::class);
    }
}
