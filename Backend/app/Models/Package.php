<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Package extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'title',
        'price',
        'states',
        'short_info',
        'payment_plan',
        'description',
        'status',
        'is_deleted',
    ];

    protected $hidden = [
        'is_deleted',
        'updated_at',
    ];

        public function institutions(){
        return $this->belongsToMany(Institution::class);
    }
        // public function packages(){
    //     return $this->belongsToMany(Package::class);
    // }

}
