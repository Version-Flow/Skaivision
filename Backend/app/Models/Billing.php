<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Billing extends Model
{
    use HasFactory;
    protected $fillable = [
        'institution_id',
        'package_id',
        'total_amount',
        'status',
        'is_deleted',
    ];

    protected $hidden = [
        'is_deleted',
        'created_at',
        'updated_at',
    ];


    public function institution()
    {
        return $this->belongsTo(Institution::class);
    }

    public function package()
    {
        return $this->belongsTo(Package::class);
    }
}
