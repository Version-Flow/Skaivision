<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Role extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'status', 'is_deleted'];

    protected $hidden = [
        'updated_at','is_deleted'
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }

}


