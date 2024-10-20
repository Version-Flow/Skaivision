<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AccreditationBody extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'status',
        'is_deleted',
    ];

    protected $hidden = [
        'is_deleted',
        'updated_at',
    ];
}
