<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use HasFactory;

    protected $fillable = [
        'institution_id',
        'package_id',
        'next_payment',
        'current_payment',
        'biling_id',
        'payment_type',
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

    public function billing()
    {
        return $this->belongsTo(Billing::class);
    }
}
