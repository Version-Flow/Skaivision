<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SchoolType extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'status',
        'is_deleted',
    ];

    protected $hidden = [
        'is_deleted',
        'updated_at',
    ];
}
