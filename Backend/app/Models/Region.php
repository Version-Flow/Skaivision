<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Region extends Model
{
    use HasFactory;

    protected $fillable = [
        'region',
        'country_id',
        'status',
        'is_deleted',
    ];

    protected $hidden = [
        'is_deleted',
        'updated_at',
    ];
    
    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function ethnicities()
    {
        return $this->hasMany(Ethnicity::class);
    }

    public function districts()
    {
        return $this->hasMany(District::class);
    }
}
